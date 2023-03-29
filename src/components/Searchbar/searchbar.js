import React from "react";
import { TextInput,View } from "react-native";
import styles from "./searchbar.styles";

const Searchbar =(props)=>{
    
    return(
        <View>
            <TextInput 
            placeholder="ARA..." 
            placeholderTextColor={"white"}
            style={styles.input}
            // call back fonksiyondur string tipinde bir text döner onchange text
            onChangeText={props.onSearch}> 
                            
            </TextInput>
        </View>
    )
}
export default Searchbar;