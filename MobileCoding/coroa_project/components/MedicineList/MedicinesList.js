import { StyleSheet, View, FlatList, Text } from "react-native";

import { MedicinesListItem } from "../MedicineList/MedicinesListItem/MedicinesListItem";

export function MedicinesList(props) {
    return(
        <FlatList 
        data={props.data}
        renderItem={({item} ) =>(
            <MedicinesListItem source={item.source} name={item.name} hour={item.hour}/>
        )}
        keyExtractor={item => item.key}
        style={styles.container}/>
    );
}

const styles = StyleSheet.create({
    container:{
        margin: 20,
        marginTop: -1,
    }
})