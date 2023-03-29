import React from "react";
import { Text,View,SafeAreaView, StyleSheet,FlatList,TouchableOpacity,TextInput} from "react-native";
import Yapilacak from "./src/components/yapilacaklar";
import Kaydet from "./src/components/kaydet";
import { useState } from "react";
import Sonuc from "./src/components/sonuc";
import Searchbar from "./src/components/Searchbar";

const App = () => {
  
  const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const [task, setTask] = useState([]);
    const [list,setList]=useState([]);
    
   
    const handleSearch = deger => {
      if(deger)
      {
        const filteredlist = list.filter(item => {
          const searcedText = deger.toLowerCase();
          const currentTitle= item.toLowerCase();
          
          return currentTitle.indexOf(searcedText) > -1;
            
        
          // içinde bulunuyorsa döndür demiş oluyoruz.
          
        });
        setTask(filteredlist);
      }
      else{
        setTask(list);
      }
      //return currentTitle.indexOf(searcedText) < -1;
      //setTask(list);
      };
    
    const addTaskPress = () => {
        setTask([...task, text]);
        setList([...list, text]);
        setText('');
      };
      const removeTaskPress = index => {
        const newTask = [...task];
        const newList = [...list];
        newTask.splice(index, 1);
        setTask(newTask);
        newList.splice(index, 1);
        setList(newList);
      };
      function updateCounter() {
        setCounter(counter + 1);
      }
      function downCounter() {
        setCounter(counter - 1);
      }
      function upCombined() {
        updateCounter();
        addTaskPress();
      }
      function downCombined() {
        downCounter();
        removeTaskPress();
      }
  return(
    <SafeAreaView style={styles.container}>
      <Yapilacak counter={counter}></Yapilacak>
      <Searchbar onSearch={handleSearch}></Searchbar>
      
      <Sonuc task={task} downcombined={downCombined}></Sonuc>
      <Kaydet text={text} set={setText} upcom={upCombined}></Kaydet>
    </SafeAreaView>
  )
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#102027",
  },
  goruntu:{
    padding:10,
    margin:10,
    backgroundColor:"#7da453",
    borderRadius:5,
},taskDelete: {
  width: 25,
  height: 25,
  borderRadius: 15,
  backgroundColor: 'red',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 9,
},
taskDeleteText: {
  fontSize: 10,
  color: 'white',
},
})