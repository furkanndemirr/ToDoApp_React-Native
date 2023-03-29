import React from "react";
import { Text,View,SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import styles from "./sonuc.styles";
import { useState } from "react";

const sonuc = (props) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <FlatList
            
            data={props.task}
            renderItem={({item,index})=>(
            
                <View style={styles.goruntu}>
                <Text style={{color:"white", flex:1}}>{item}</Text>
                <TouchableOpacity 
                onPress={props.downcombined}>
                <Text >X</Text>
                </TouchableOpacity>
                
            </View>)}
            keyExtractor={item => item + Math.random()
                //keyExtractor={item=>item.id
            }
            />
            
            
        </SafeAreaView>
    )
}
export default sonuc;