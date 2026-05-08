# from flask import Flask, jsonify, request
# from flask_sqlalchemy import SQLAlchemy
# import datetime
# from flask_marshmallow import Marshmallow


# app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/coroa'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# ma = Marshmallow(app)

# class Medicines(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String(100))
#     description = db.Column(db.String(255))
#     created_at = db.Column(db.DateTime, default = datetime.datetime.now())

#     def __init__(self, title, description):
#         self.title = title
#         self.description = description


# class MedicineSchema(ma.Schema):
#     class Meta: 
#         fields = ('id', 'title', 'description', 'created_at')

# medicine_schema = MedicineSchema()
# medicines_schema = MedicineSchema(many=True)


# @app.route('/get', methods = ['GET'])
# def get_medicines():
#     all_medicines = Medicines.query.all()
#     results = medicines_schema.dump(all_medicines)
#     return jsonify(results)


# @app.route('/get/<id>/', methods = ['GET'])
# def get_details(id):
#     medicine = Medicines.query.get(id)
#     return medicine_schema.jsonify(medicine)


# @app.route('/add', methods = ['POST'])
# def add_medicine():
#     title = request.json['title']
#     description = request.json['description']
#     medicines = Medicines(title, description)
#     db.session.add(medicines)
#     db.session.commit()
#     return medicine_schema.jsonify(medicines)


# @app.route('/update/<id>/', methods = ['PUT'])
# def update_medicine(id):
#     medicine = Medicines.query.get(id)

#     title = request.json['title']
#     description = request.json['description']
#     created_at = datetime.datetime.now()

#     medicine.title = title
#     medicine.description = description
#     medicine.created_at = created_at

#     db.session.commit()
#     return medicine_schema.jsonify(medicine)


# @app.route('/delete/<id>/', methods = ['DELETE'])
# def delete_medicine(id):
#     medicine = Medicines.query.get(id)
#     db.session.delete(medicine)
#     db.session.commit()

#     return medicine_schema.jsonify(medicine)

# if __name__=="__main__":
#     app.run(host='0.0.0.0', port=5000, debug=True)



# New version

from contextlib import asynccontextmanager
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Field, Session, SQLModel, create_engine, select
from pydantic import BaseModel
from datetime import datetime
from typing import Optional
import uvicorn


# ── Database ──────────────────────────────────────────────────────────────────

DATABASE_URL = "sqlite:///./coroa.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})


# ── Models ────────────────────────────────────────────────────────────────────

class Medicine(SQLModel, table=True):
    __table_args__ = {"extend_existing": True}

    id: Optional[int] = Field(default=None, primary_key=True)
    title: str = Field(max_length=100)
    description: str = Field(max_length=255)
    created_at: datetime = Field(default_factory=datetime.now)


class MedicineCreate(BaseModel):
    title: str
    description: str


class MedicineUpdate(BaseModel):
    title: str
    description: str


# ── App ───────────────────────────────────────────────────────────────────────

@asynccontextmanager
async def lifespan(app: FastAPI):
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(title="C.O.R.O.A API", version="2.0.0", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


# ── Routes ────────────────────────────────────────────────────────────────────

@app.get("/get", response_model=list[Medicine])
def get_medicines():
    with Session(engine) as session:
        return session.exec(select(Medicine)).all()


@app.get("/get/{id}", response_model=Medicine)
def get_medicine(id: int):
    with Session(engine) as session:
        medicine = session.get(Medicine, id)
        if not medicine:
            raise HTTPException(status_code=404, detail="Medicine not found")
        return medicine


@app.post("/add", response_model=Medicine, status_code=201)
def add_medicine(data: MedicineCreate):
    with Session(engine) as session:
        medicine = Medicine(title=data.title, description=data.description)
        session.add(medicine)
        session.commit()
        session.refresh(medicine)
        return medicine


@app.put("/update/{id}", response_model=Medicine)
def update_medicine(id: int, data: MedicineUpdate):
    with Session(engine) as session:
        medicine = session.get(Medicine, id)
        if not medicine:
            raise HTTPException(status_code=404, detail="Medicine not found")
        medicine.title = data.title
        medicine.description = data.description
        medicine.created_at = datetime.now()
        session.commit()
        session.refresh(medicine)
        return medicine


@app.delete("/delete/{id}", response_model=Medicine)
def delete_medicine(id: int):
    with Session(engine) as session:
        medicine = session.get(Medicine, id)
        if not medicine:
            raise HTTPException(status_code=404, detail="Medicine not found")
        session.delete(medicine)
        session.commit()
        return medicine


# ── Entry point ───────────────────────────────────────────────────────────────

if __name__ == "__main__":
    uvicorn.run("app:app", host="0.0.0.0", port=5000, reload=True)