import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Formsubmit from './Formsubmit'
import { useNavigation } from '@react-navigation/native'




const Flatlist = ({data}) => {
    const navigation = useNavigation(); 
    const renderItem=({item})=>(
        <TouchableOpacity style={{backgroundColor:'#B0E0E6'}}
        onPress={()=>navigation.navigate('Formsubmit',{details:item})}>
                    <View style={{justifyContent:'center',
            alignItems:'center',
            padding:20,
            borderWidth:0.3,
            borderRadius:15,
            margin:40,
            backgroundColor:'white'

        }}>

           
            <View style={styles.container}>
                <Text style={{fontSize:20,fontWeight:'600'}}>
                    {item.heading}</Text>
                </View>
                <Text style={{marginTop:2}}>{item.title}</Text>
                <Text style={{marginTop:2}}>{item.title1}</Text>
                <Text style={{marginTop:2}}>{item.Vacancy}</Text>
                <Text style={{marginTop:2}}>{item.total}</Text>
              <View style={styles.container1}>
                  <Image source={item.image}
                style={styles.img}/>
                <Text style={{marginTop:2}}>{item.location}</Text>
                </View>
       

                </View>
                </TouchableOpacity>
       

    )
  return (
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={(item)=>item.id}
    
    
    
    />
  )
}

export default Flatlist

const styles = StyleSheet.create({
    img:{
        width:14,
        height:14,
        tintColor:'red',
        marginTop:4,
        margin:2
    },
    container1:{
        display:'flex',
        flexDirection:'row'
    },
    container:{
        borderWidth:0.3,
        borderRadius:50,
        padding:10,
        marginBottom:10,
        backgroundColor:'#87CEFA'
    }
})