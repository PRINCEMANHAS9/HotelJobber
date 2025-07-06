import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import {useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Login = ({navigation}) => {
    const[mobileNumber,setMobileNumber]=useState('')
    const[password,setPassword]=useState('')
    
    const myButton = async()=>{
        try{
        const saveMobileNumber = await AsyncStorage.getItem('userMobileNumber');
        const savePassword = await AsyncStorage.getItem('userPassword');
        if (mobileNumber === saveMobileNumber && password === savePassword){       
            navigation.navigate('TabBottom');      
            }
           else{
            Alert.alert('pls enter a valid details' )
           }
        }  
           catch(e){
            console.log(e)
           } 
    
        
    

            

    }

  return (
    <View>
    <View style={styles. container}>
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
            <Text style={styles.text3}>
                Want Job in Hotel?</Text>
            <Text style={styles.text4} >Login Here</Text>
             </View>


            <View >  
                <TextInput placeholder='Mobile Number'
                placeholderTextColor="#999"
                    style={styles.textinput3} value={mobileNumber}
                    onChangeText={setMobileNumber} />


                    <TextInput placeholder='Password'
                    placeholderTextColor="#999"
                    style={styles.textinput4} value={password}
                    onChangeText={setPassword}/>
                    </View>



                    <TouchableOpacity 
                          style={styles.container3}
                          onPress={myButton}>
                            <Text style={styles.text5}>
                                 Login
                                 </Text>
                            </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
     text1:{
        fontSize:25,
        fontWeight:'700',
        color:'orange'
    },
    text2:{
        fontSize:25,
        fontWeight:'700',
        color:'#4682B4'
    },

    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    text3:{
        marginTop:50,
        fontSize:17,

    },
    text4:{
        marginTop:20,
        fontSize:22,
        fontWeight:'600'
    },
     textinput3:{
      backgroundColor:'white',
      margin:26,
      marginTop:50,
      borderWidth:1,
      borderRadius:5,
      borderColor:'grey'
          },


          textinput4:{
      backgroundColor:'white',
      margin:26,
      marginTop:10,
      borderWidth:1,
      borderRadius:5,
      borderColor:'grey'
          },
   container3:{
        backgroundColor:'#4682B4',
        padding:12,
        paddingHorizontal:25,
        margin:30,
        marginTop:0,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
     text5:{
        fontSize:15,
        fontWeight:'600',
        color:'azure'
    }
})