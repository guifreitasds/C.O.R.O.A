from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow


app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:''@localhost/coroa'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Medicines(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default = datetime.datetime.now())

    def __init__(self, title, description):
        self.title = title
        self.description = description


class MedicineSchema(ma.Schema):
    class Meta: 
        fields = ('id', 'title', 'description', 'created_at')

medicine_schema = MedicineSchema()
medicines_schema = MedicineSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_medicines():
    all_medicines = Medicines.query.all()
    results = medicines_schema.dump(all_medicines)
    return jsonify(results)


@app.route('/get/<id>/', methods = ['GET'])
def get_details(id):
    medicine = Medicines.query.get(id)
    return medicine_schema.jsonify(medicine)


@app.route('/add', methods = ['POST'])
def add_medicine():
    title = request.json['title']
    description = request.json['description']
    medicines = Medicines(title, description)
    db.session.add(medicines)
    db.session.commit()
    return medicine_schema.jsonify(medicines)


@app.route('/update/<id>/', methods = ['PUT'])
def update_medicine(id):
    medicine = Medicines.query.get(id)

    title = request.json['title']
    description = request.json['description']
    created_at = datetime.datetime.now()

    medicine.title = title
    medicine.description = description
    medicine.created_at = created_at

    db.session.commit()
    return medicine_schema.jsonify(medicine)


@app.route('/delete/<id>/', methods = ['DELETE'])
def delete_medicine(id):
    medicine = Medicines.query.get(id)
    db.session.delete(medicine)
    db.session.commit()

    return medicine_schema.jsonify(medicine)

if __name__=="__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)