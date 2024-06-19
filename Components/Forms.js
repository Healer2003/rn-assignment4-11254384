import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function Forms({value1,value2,change1,change2}){
    return(
        <View style={styles.main}>
            <View style={styles.input}>
            <TextInput placeholder="Name" value={value1} onChangeText={change1}/>
            </View>
            <View style={styles.input}>
            <TextInput placeholder="Email" keyboardType="email-address" value={value2} onChangeText={change2}/>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main:{
        paddingVertical:20,
        
        
    },
    input:{
        paddingVertical:15,
        paddingHorizontal:10,
        borderWidth:1,
        marginVertical:10,
        borderRadius:8,
        borderColor:"#AFB0B6"
    }
})