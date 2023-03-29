import React, { useState } from "react";
import { View,StyleSheet,SafeAreaView, Text } from "react-native";
import styles from "./yapilacak.styles";

const yapilacak =(props)=>{
    
    return(
        <SafeAreaView style={{flexDirection:"row"}}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.counter}>{props.counter}</Text>
        </SafeAreaView>
    )
}
export default yapilacak;