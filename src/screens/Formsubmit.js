import { StyleSheet, Text, View,Image, TouchableOpacity  } from 'react-native'
import React from 'react'

const Formsubmit = ({route}) => {
  const  {details} = route.params
  return (
    <View style={{backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center',
      marginTop:120,
      margin:10,
      borderRadius:5,
      paddingBottom:30
    }}>
    
     <View style={{padding:10,
      backgroundColor:'orange',
       borderRadius:50,
       marginTop:10

     }}>
       <Text style={{
        
       }} >{details.heading}</Text>
       </View>



      
      <Text style={{marginTop:10}}>{details.title}</Text>
      <Text style={{marginTop:10}}>{details.title1}</Text>
      <Text style={{marginTop:10}}>{details.Vacancy}</Text>
      <Text style={{marginTop:10}}>{details.total}</Text>
      <Text style={{marginTop:10 }}>Salary Offer.Rs. 18000-24000</Text>
      <Text style={{margin:10}}> A Cook's primary responsibilities include preparing, cooking, and assembling dishes according to recipes and standards, while also maintaining a clean and organized workspace. They are also responsible for ensuring food quality, proper food handling, and adhering to sanitation and safety guidelines. </Text>
      <Text style={{fontSize:17, fontWeight:'600', marginRight:220}}>Facilities</Text>

      <View style={{display:'flex',
        flexDirection:'row',
        gap:25, 
        marginTop:10,
        marginRight:60

        
       
      }}>
        <View style={{backgroundColor:'azure',
          padding:25,
          
          justifyContent:'center',
          alignItems:'center'
        }}>
        <Image source={require('../assets/food-tray.png')}
        style={{width:40,height:40}}/>
        <Text style={{marginTop:5}}>Food</Text>
        </View>

         <View style={{backgroundColor:'azure',
          padding:25,
          alignItems:'center'
         }}>
        <Image source={require('../assets/sleeping.png')}
       style={{width:40, height:40}}/>
        <Text style={{marginTop:5}}>Staff Room</Text>
        </View>

      </View>

      <TouchableOpacity
      style={{padding:14,
        paddingHorizontal:50,
        backgroundColor:'green',
        borderRadius:7,
        marginTop:20


      }}>
        <Text>
          Apply
        </Text>
      </TouchableOpacity>

    </View>
  )
}

export default Formsubmit

const styles = StyleSheet.create({})