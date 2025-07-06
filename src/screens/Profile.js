import { StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useState} from 'react'
import {useEffect} from 'react'

const Profile = () => {
  const[saveNumber, setSaveNumber]=useState('')
  const[saveName,setSaveName]=useState('')
  const[saveEmailAddress, setSaveEmailAddress]=useState('')
  const[loading, setLoading]=useState(true)




      useEffect(()=>{

    const fetchData = async()=>{

      
         try{
    
    const saveuserfirstname = await AsyncStorage.getItem('userFirstName');
    const saveusermobilenumber = await AsyncStorage.getItem('userMobileNumber');
    const saveuseremailaddress = await AsyncStorage.getItem('userEmailAddress');

    if(saveuserfirstname !== null)
    {
      setSaveName(saveuserfirstname);
    }
    else{
      setSaveNumber('no data fround');
          }

           if(saveusermobilenumber !== null)
    {
      setSaveNumber(saveusermobilenumber);
    }
    else{
      setSaveNumber('no data fround');
          }

          if(saveuseremailaddress !== null){
            setSaveEmailAddress(saveuseremailaddress)
          }
          else{
            setSaveEmailAddress('no data found')
          }

   }
   catch(e){
    console.log(e);
   }
     finally{
      setTimeout(()=>{
   setLoading(false)
  },2000);
  }

  
  }
  fetchData();


  },[]);


  if(loading){
    return(
      <View style={{justifyContent:'center',
        alignItems:'center',
        marginTop:200
      }}>
        <ActivityIndicator size='small'/>
        <Text>Loading data</Text>
      </View>
    )
  }


   



    


  return (
    <View style={{
      justifyContent:'center',
      alignItems:'center',
     
      backgroundColor:'#B0E0E6',
      flex:1


    }}>
      <View style={styles.container1}>
        <Text style={styles.text} >Personal details</Text>
     <Text style={styles.text1}>Name: {saveName}</Text>
      <Text style={styles.text2} >Mobile Number: {saveNumber}</Text>    
      <Text style={styles.text3}>Email Address: {saveEmailAddress}</Text>
      </View>
        
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  text1:{
    fontSize:14,
    fontWeight:'600',
    fontStyle:'italic'

  },

  text2:{
    fontStyle:'italic',
    fontSize:14,
    fontWeight:'600'

  },
  text3:{
    fontStyle:'italic',
    fontSize:14,
    fontWeight:'600'

  },
  text:{
    fontStyle:'italic',


  },
  container1:{
    margin:20,
    marginTop:40,
    backgroundColor:'#FFF5EE',
    padding:70,
    borderRadius:10,
    borderWidth:0.5
  }
})