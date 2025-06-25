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
    <View style={{marginTop:230,
      justifyContent:'center',
      alignItems:'center'

    }}>
      <Text style={styles.text1}> name:{saveName}</Text>
      <Text style={styles.text2} >mobilenumber:{saveNumber}</Text>    
        <Text style={styles.text3}>emailaddress:{saveEmailAddress}</Text>
        
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  text1:{
    fontSize:17,
    fontWeight:'600'

  },
  text2:{
    fontSize:17,
    fontWeight:'600'

  },
  text3:{
    fontSize:17,
    fontWeight:'600'

  }
})