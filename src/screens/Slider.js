import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Slider = ({navigation}) => {
  return (
    <View style={styles.container1}>
        <Image source={require('../assets/paper.png')}
        style={styles.img1}/>
        <View style={styles.container2}>
      <Text style={styles.text1}>hotel</Text>
      <Text style={styles.text2}>jobber.com</Text>
      </View>
      <Text style={styles.text3}>We made it easy!</Text>


      <TouchableOpacity 
      style={styles.container3}
      onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.text4}>
             SignUp
             </Text>
        </TouchableOpacity>


    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    img1:{
        width:55,
        height:55,
        tintColor:'#4682B4'
    },
    container1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:200
    },
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
    container2:{
        display:'flex',
        flexDirection:'row'
    },
    text3:{
        marginTop:20,

    },
    container3:{
        backgroundColor:'#4682B4',
        padding:12,
        paddingHorizontal:25,
        marginTop:80,
        borderRadius:5
    },

    text4:{
        fontSize:15,
        fontWeight:'600',
        color:'azure'
    }

})