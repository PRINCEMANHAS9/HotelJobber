import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const Jobdetails = ({navigation}) => {
  return (
    <View style={styles.container}>
       <View style={styles.container1}>
        <TouchableOpacity onPress={()=>navigation.navigate('TabBottom')}>
      <Image source={require('../assets/leftarrow.png')}
      style={styles.img}/> 
      </TouchableOpacity>
      <Text style={styles.text1}>Job Details</Text>
      </View>



      <ScrollView>
      <View style={styles.container2}>
        <View style={styles.container3}>
            <View style={styles.icon}>
            <Image source={require('../assets/iskcontemple.png')}
            style={styles.img1}/>
            </View>
            <View>
            <Text style={{fontSize:22,
                fontWeight:'700',
                marginTop:5}}>
                    VK</Text>
            <Text style={{fontSize:16,
                 fontWeight:'500',
                 marginTop:5 }}>Hotel</Text>
            <Text style={{marginTop:5}}> Location: sangli-Hyderabad </Text>                  
            </View>          

        </View>
         <Image source={require('../assets/Restaurant.jpg')}
            style={styles.img2}/>

            <View style={{margin:10}}>
                <Text style={{fontSize:20, fontWeight:'600' }}>Job opening for Cook</Text>
            </View>
            <Text>Min Exp: 0Years</Text>
            <Text>No. of Vacancies</Text>
            <Text> Salary Offer: Rs. 10000-14000  </Text>

            <View>
                <Text style={{alignSelf:'center',
                    marginTop:20,
                    fontSize:18,
                    fontWeight:'600'}}>
                    Facilities</Text>
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
                
            </View>
            <Text style={{marginTop:10,fontSize:19,fontWeight:'700'}}>Description</Text>
            <Text style={{margin:20, marginTop:10}}>A Cook's primary responsibilities include preparing, cooking, and assembling dishes according to recipes and standards, while also maintaining a clean and organized workspace. They are also responsible for ensuring food quality, proper food handling, and adhering to sanitation and safety guidelines.</Text>
            <Text style={{margin:20}}>Address: Sangli-Miraj road, vijaynagar, near kfc pizza hut   </Text>
            <Text style={{margin:20}}>City: Sangli-Hyderabad </Text>

             <TouchableOpacity
                  style={{padding:14,
                    paddingHorizontal:50,
                    backgroundColor:'orange',
                    borderRadius:7,
                    marginTop:20
            
            
                  }}>
                    <Text style={{fontSize:14,
                        fontWeight:'600',
                        color:'white'
                    }}>
                      Apply
                    </Text>
                  </TouchableOpacity>


      </View>
      </ScrollView>
    </View>
  )
}

export default Jobdetails

const styles = StyleSheet.create({

    container:{
        backgroundColor:'azure',
        flex:1

    },
    container1:{
        display:'flex',
        flexDirection:'row',
        margin:40,
        gap:20,
        marginTop:55

    },
    img:{
        width:15,
        height:15,
        marginTop:6
    },
    text1:{
        fontSize:20,
        fontWeight:'600'
    },
    img1:{
        width:20,
        height:20,
        },

    icon:{
        backgroundColor:'#fff',
        marginTop:10,
        borderRadius:50,
        borderWidth:1,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        shadowColor:'#000',
        shadowOpacity:0.5,
        shadowRadius:6,
        elevation:5,
        width:70,
        height:70

    },    


    container2:{
        backgroundColor:'white',
        margin:15,
        marginTop:15,
       justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        paddingBottom:50,
        borderRadius:10,
        borderWidth:0.2

    },
    container3:{
        display:'flex',
        flexDirection:'row',
        gap:30
    },
    img2:{
        width:362,
        height:230,
        marginTop:20


    }

})