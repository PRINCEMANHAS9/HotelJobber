import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Formsubmit from './Formsubmit'
import { useNavigation } from '@react-navigation/native'



const Users=[
    {
        id:1,
        heading:'VK',
        title:'Vraj lnn',
        title1: 'Hotel',
        Vacancy: 'HouseKeeper',
        total: 'vacancy: 5',
        image:require('../assets/pin.png'),
        location:'Dwarka-Gujrat'

},

 {
        id:2,
        heading:'IPGH',
        title:'Iskon Prayagraj Guest House',
        title1: ' Guest House',
        Vacancy: 'Sales & marketing',
        total: 'vacancy: 1',
        image:require('../assets/pin.png'),
        location:'Prayagraj-Uttar Pradesh'

},


 {
        id:3,
        heading:'IPGH',    

        title:'Iskon Prayagraj Guest House',
        title1: ' Guest House',
        Vacancy: 'Maintenance',
        total: 'vacancy: 1',
        image:require('../assets/pin.png'),
        location:'Prayagraj-Uttar Pradesh'

},


 {
        id:4,
        heading:'RD',
        title:'The Royal Dudes',
        title1: 'Restaurant',
        Vacancy: 'Dishwasher',
        total: 'vacancy: 2',
        image:require('../assets/pin.png'),
        location:'Mumbai-Maharashtra'

},

 {
        id:5,
        heading:'RD',
        title:'The Royal Dudes',
        title1: 'Restaurant',
        Vacancy: 'Assistant Restaurant Manager',
        total: 'vacancy: 1',
        image:require('../assets/pin.png'),
        location:'Mumbai-Maharashtra'

},


{
        id:6,
        heading:'RD',
        title:'The Royal Dudes',
        title1: 'Restaurant',
        Vacancy: 'Helper',
        total: 'vacancy: 2',
        image:require('../assets/pin.png'),
        location:'Mumbai-Maharashtra'

},

 {
        id:7,
        heading:'RD',
        title:'The Royal Dudes',
        title1: 'Restaurant',
        Vacancy: 'Dishwasher',
        total: 'vacancy: 5',
        image:require('../assets/pin.png'),
        location:'Prayagraj-Uttar Pradesh'

},


 {
        id:8,
        heading:'VK',
        title:'Vraj lnn',
        title1: 'Hotel',
        Vacancy: 'Cook',
        total: 'vacancy: 5',
        image:require('../assets/pin.png'),
        location:'Dwarka-Gujrat'

},





]

const Flatlist = () => {
    const navigation = useNavigation(); 
    const renderItem=({item})=>(
        <TouchableOpacity style={{backgroundColor:'azure'}}
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
    data={Users}
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