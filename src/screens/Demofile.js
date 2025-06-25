import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react' 

// import Demofile2 from './Demofile2'


const Demofile  = ({navigation}) => {

    const[users, setUsers]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>{
            setUsers(data);
                console.log('API Working');
            })
            .catch((e)=>{
                console.log('error')
            })  
           },[])



const renderitem= ({item})=>(
   
   <ScrollView>
   
   <TouchableOpacity onPress={()=>navigation.navigate('Demofile2', {details:item})}>
     <View style={{justifyContent:'center',
        alignItems:'center',
        padding:10,
        marginTop:30
    }} >
    
        
   
    <Text> {item.name}</Text>
   <Text>{item.username}</Text>
   <Text>{item.email}</Text>
 
   
    </View>
    </TouchableOpacity>
    </ScrollView>

)



  return (
    <FlatList
    data={users}
    keyExtractor={(item)=>item.id.toString()}
        renderItem={renderitem}

    />
  )
}

export default Demofile 

const styles = StyleSheet.create({})
