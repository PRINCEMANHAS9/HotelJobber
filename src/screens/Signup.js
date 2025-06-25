import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert,  } from 'react-native'
import React from 'react'
import{useState} from 'react'
import { Picker } from '@react-native-picker/picker'
import {CheckBox} from 'react-native-check-box'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Signup = ({navigation}) => {
  const[selectedValue,setSelectValue]=useState('');
  const[firstName, setFirstName]=useState('');
  const[lastName, setLastName]=useState('') ;
  const[fatherName,setFatherName]=useState('');
  const[mobileNumber,setMobileNumber]=useState('');
  const[adhaarCardNumber, setAdhaarCardNumber]=useState('');
  const[emailAddress,setEmailAddress]=useState('');
  const[password, setPassword]=useState('');
  
  const myButton=async()=>{
   if(!firstName || !lastName || !fatherName  || !mobileNumber || !adhaarCardNumber || !emailAddress || !password)
     { Alert.alert('fill it'); 
   return false;
  }
  {
    try{
   await AsyncStorage.setItem('userMobileNumber',mobileNumber);
   await AsyncStorage.setItem('userPassword', password);
   await AsyncStorage.setItem('userFirstName', firstName);
   await AsyncStorage.setItem('userEmailAddress', emailAddress);
  


   console.log('saved successfully');
    navigation.navigate('Login') 

  }
  catch(e){
    console.log(e);
    
    
  }
}




  
}


  


  return (
    <View style={styles.container}>


        <View style={{display:'flex',
             flexDirection:'row',
             marginTop:80,
             justifyContent:'center',
             alignItems:'center'
             }} >
            <Image source={require('../assets/paper.png')}
             style={{width:33,
             height:33,
             tintColor:'#4682B4'}}/>
      <Text style={styles.text1}>hotel</Text>
      <Text style={styles.text2}>jobber.com</Text>
      </View>


      <View style={styles.container1}>
        <TextInput placeholder='First Name'
        placeholderTextColor="#999"
        style={styles.textinput1}
        value={firstName}
        onChangeText={setFirstName}/>
        <TextInput placeholder='Last Name' 
        placeholderTextColor="#999"
         style={styles.textinput1}
         value={lastName}
         onChangeText={setLastName}/>

      </View>

        <View style={styles.container1}>
        <TextInput placeholder='Father Name'
        placeholderTextColor="#999"
        style={styles.textinput1}  
         value={fatherName}
         onChangeText={setFatherName}  
        
        />
       <View style={styles.Picker}>
       <Picker selectedValue={selectedValue}
       onValueChange={(itemValue, itemIndex)=>setSelectValue(itemValue)} 
       style={styles.Picker1}
      >
         <Picker.Item label = 'Gender' value='Gender'/>
        <Picker.Item label = 'Male' value='Male'/>
         <Picker.Item label = 'Female' value='Female'/>
          <Picker.Item label = 'Other' value='Other'/>


       </Picker>
       </View>
      </View>



      
        <TextInput placeholder='Mobile Number'
        placeholderTextColor="#999"
        style={styles.textinput2}
         value={mobileNumber}
         onChangeText={setMobileNumber}/>
           
        <TextInput placeholder='Adhaar Card Number'
        placeholderTextColor="#999"
        style={styles.textinput3}
        value={adhaarCardNumber}
         onChangeText={setAdhaarCardNumber} />


         <TextInput placeholder='Email Address'
         placeholderTextColor="#999"
        style={styles.textinput3} 
        value={emailAddress}
         onChangeText={setEmailAddress}/>

          <TextInput placeholder='Password'
          placeholderTextColor="#999"
        style={styles.textinput3}
        value={password}
         onChangeText={setPassword} />

        <TouchableOpacity
        style={styles.container2}
        
        onPress={myButton}>


          <Text style={styles.text3}>
            Next
          </Text>
        </TouchableOpacity>

        <View style={{display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:3,
        marginTop:-15
          }}>
          <Text> Already Registered?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
            <Text style={{fontSize:12,
              fontWeight:'300',
              color:'#4682B4'}}>Skip</Text>
            </TouchableOpacity>

        </View>

        

         
        
        









    </View>
  )
}

export default Signup

const styles = StyleSheet.create({

    container:{
        backgroundColor:'azure',
        flex:1

    },

    text1:{
        fontSize:25,
        fontWeight:'600'
    },
    text2:{
        fontSize:20,
        fontWeight:'600',
        color:'orange'
    },
    textinput1:{
      borderWidth:0.5,
      borderRadius:5,
      width:160,
      borderColor:'grey',
      backgroundColor:'white'
      
    },
    container1:{
      display:'flex',
      flexDirection:'row',
      gap:20,
      justifyContent:'center',
      alignItems:'center',
      marginTop:40

    },
    Picker:{
       borderWidth:0.5,
      borderRadius:5,
      width:160,
      height:41,
      borderColor:'grey',
      backgroundColor:'white',
      
    },
    Picker1:{
      marginTop:-7,
      color:'grey'
    },
    textinput2:{
      backgroundColor:'white',
      margin:26,
      marginTop:35,
      borderWidth:0.3,
      borderRadius:5


    },
    textinput3:{
      backgroundColor:'white',
      margin:26,
      marginTop:10,
      borderWidth:0.3,
      borderRadius:5
    },
    container2:{
      backgroundColor:'#4682B4',
      borderRadius:5,
      padding:13,
      justifyContent:'center',
      alignItems:'center',
      margin:90,
      marginTop:30

    },
    text3:{
      fontSize:16,
      fontWeight:'600',
      color:'azure'
    }



})


