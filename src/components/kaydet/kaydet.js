import React,{useState} from "react";
import { View,Text,TextInput,Button,SafeAreaView,StyleSheet,TouchableOpacity} from "react-native";
import styles from "./kaydet.style";

const kaydet = (props)=> {
    
    
    return(
        <SafeAreaView style={sekil.deneme}>
            <TextInput onChangeText={props.set} value={props.text} placeholder="Yapılacak..." placeholderTextColor={"gray"}  style={{borderBottomWidth:1,borderBottomColor:"#475861"}}></TextInput>
        <TouchableOpacity style={styles.button} onPress={props.upcom}>
          <Text style={styles.text}>Kaydet</Text>
        </TouchableOpacity>
            
        </SafeAreaView>
    )
}
export default kaydet;

const sekil = StyleSheet.create({
    deneme:
    {
        
        backgroundColor:"#37474f",
        padding:10,
        margin:10,
        borderRadius:10
    }
})