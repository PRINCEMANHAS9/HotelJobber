import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Modal, } from 'react-native'
import React from 'react'
import Login from './Login';
import Signup from './Signup';
import{useState} from 'react'
// import { Picker } from '@react-native-picker/picker';



const Homescreen = ({navigation}) => {
    // const [selectedState, setSelectedState] = useState('');
    const[modalView1, setModalView1]=useState(false) ;
    const[modalView2, setModalView2]=useState(false) ;
    const[modalView3, setModalView3]=useState(false) ;


  return (
    <View style={styles.container}>
        <View style={styles.container4}>
       <View style={styles.container1}>
              <Image source={require('../assets/paper.png')}
              style={styles.img1}/>
              <View style={styles.container2}>
            <Text style={styles.text1}>hotel</Text>
            <Text style={styles.text2}>jobber.com</Text>
            </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={()=>{setModalView1(true)}}>
                <Image source={require('../assets/promote.png')}
                style={styles.img2}/>
                </TouchableOpacity>

               <TouchableOpacity onPress={()=>{setModalView2(true)}}> 
                <Image source={require('../assets/bellicon.png')}
                style={styles.img2}/>
                </TouchableOpacity>
                
                
              <TouchableOpacity onPress={()=>{setModalView3(true)}}>
                  <Image source={require('../assets/dotsmenu.png')}
                style={styles.img3}/>
                </TouchableOpacity>               
            </View>
            </View>



          <View style={{paddingBottom:30}}> 
            <Text style={styles.text3}> Hot Jobs</Text>

{/* <View style={styles.picker1}>
             <Picker
        selectedValue={selectedState}
        onValueChange={(itemValue, itemIndex) => setSelectedState(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="--Select State--" value="" color='grey' />
        <Picker.Item label="Andhra Pradesh" value="andhra_pradesh" color='grey' />
        <Picker.Item label="Arunachal Pradesh" value="arunachal_pradesh" color='grey'/>
        <Picker.Item label="Assam" value="assam" color='grey' />
        <Picker.Item label="Bihar" value="bihar" color='grey'/>
        <Picker.Item label="Chhattisgarh" value="chhattisgarh" color='grey' />
        <Picker.Item label="Delhi" value="delhi" color='grey'/>
        <Picker.Item label="Goa" value="goa"color='grey' />
        <Picker.Item label="Gujarat" value="gujarat" color='grey'/>
        <Picker.Item label="Haryana" value="haryana"color='grey' />
        <Picker.Item label="Himachal Pradesh" value="himachal_pradesh" color='grey'/>
        <Picker.Item label="Jharkhand" value="jharkhand" color='grey'/>
        <Picker.Item label="Karnataka" value="karnataka" color='grey'/>
        <Picker.Item label="Kerala" value="kerala" color='grey'/>
        <Picker.Item label="Madhya Pradesh" value="madhya_pradesh" color='grey'/>
        <Picker.Item label="Maharashtra" value="maharashtra" color='grey'/>
        <Picker.Item label="Manipur" value="manipur" color='grey'/>
        <Picker.Item label="Meghalaya" value="meghalaya" color='grey'/>
        <Picker.Item label="Mizoram" value="mizoram" color='grey'/>
        <Picker.Item label="Nagaland" value="nagaland" color='grey'/>
        <Picker.Item label="Odisha" value="odisha" color='grey'/>
        <Picker.Item label="Punjab" value="punjab" color='grey'/>
        <Picker.Item label="Rajasthan" value="rajasthan" color='grey'/>
        <Picker.Item label="Sikkim" value="sikkim" color='grey' />
        <Picker.Item label="Tamil Nadu" value="tamil_nadu" color='grey'/>
        <Picker.Item label="Telangana" value="telangana" color='grey'/>
        <Picker.Item label="Tripura" value="tripura" color='grey'/>
        <Picker.Item label="Uttar Pradesh" value="uttar_pradesh" color='grey' />
        <Picker.Item label="Uttarakhand" value="uttarakhand" color='grey'/>
        <Picker.Item label="West Bengal" value="west_bengal" color='grey'/>
      </Picker>
      </View> */}
       </View>

       
        <ScrollView>
            <View style={styles.container5}>

                <View style={styles.container6}>
              <View  style={styles.Image}>
                   <Text style={styles.img4}>VK</Text>
                </View>
                <View>
                <Text style={{fontSize:20,
                    fontWeight:'500',
                    color:'grey'}}>
                    Vaikuntapuram Restaurant</Text>
                <Text>Restaurant</Text>
                <View style={{display:'flex',
                    flexDirection:'row'}}>

                    <Image source={require('../assets/pin.png')}
                    style={{width:15,
                    height:15,
                    tintColor:'red'}}/>
                    <Text>Hyderabad-Telangana</Text>
                </View>
              
                </View>
                                          

            </View>            
                 <Image source={require('../assets/restaurant2.jpg')} 
                 style={{width:362,height:300}}/>  
                

            </View>


            <TouchableOpacity style={{borderWidth:0.2,
                margin:15,
                marginTop:0                
                }}
                onPress={()=>navigation.navigate('Jobdetails')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                     borderwidth:0.5,
                    gap:170}}>
                    <Text>Home Maid   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5}}/>

                </View>
            </TouchableOpacity>



            <TouchableOpacity style={{
                margin:15,
                marginTop:-15,
                 borderWidth:0.2
               }}
               onPress={()=>navigation.navigate('Jobdetails2')} >
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                     

                    gap:170}}>
                    <Text>Waiter   vacancy:3</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5,
                      marginLeft:35}}/>

                </View>
            </TouchableOpacity>



              <TouchableOpacity style={{margin:15,
                marginTop:-15,
                }}
                 onPress={()=>navigation.navigate('Jobdetails3')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                    gap:170,
                    borderWidth:0.2,
                    borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}}>
                    <Text>Cook   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      marginLeft:35,
                      marginTop:4}}/>

                </View>
            </TouchableOpacity>






            {/* first task completed */}





           <View style={styles.container5}>

                <View style={styles.container6}>
              <View  style={styles.Image}>
                   <Text style={styles.img4}>VK</Text>
                </View>
                <View>
                <Text style={{fontSize:20,
                    fontWeight:'500',
                    color:'grey'}}>
                    Vaikuntapuram Restaurant</Text>
                <Text>Restaurant</Text>
                <View style={{display:'flex',
                    flexDirection:'row'}}>

                    <Image source={require('../assets/pin.png')}
                    style={{width:15,
                    height:15,
                    tintColor:'red'}}/>
                    <Text>Hyderabad-Telangana</Text>
                </View>
              
                </View>
                                          

            </View>            
                 <Image source={require('../assets/restaurant3.jpg')} 
                 style={{width:362,height:300}}/>  
                

            </View>


            <TouchableOpacity style={{borderWidth:0.2,
                margin:15,
                marginTop:0
                }}onPress={()=>navigation.navigate('Jobdetails4')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                     borderwidth:0.5,
                    gap:170}}>
                    <Text>Home Maid   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5}}/>

                </View>
            </TouchableOpacity>



            <TouchableOpacity style={{
                margin:15,
                marginTop:-15,
               }}onPress={()=>navigation.navigate('Jobdetails5')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                      borderWidth:0.2,

                    gap:170}}>
                    <Text>Waiter   vacancy:3</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5,
                      marginLeft:35}}/>

                </View>
            </TouchableOpacity>



              <TouchableOpacity style={{margin:15,
                marginTop:-15,
                }}onPress={()=>navigation.navigate('Jobdetails6')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                    gap:170,
                    borderWidth:0.2,
                    borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}}>
                    <Text>Cook   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      marginLeft:33,
                      marginTop:4}}/>

                </View>
            </TouchableOpacity>


            {/* second task is completed*/}





            <View style={styles.container5}>

                <View style={styles.container6}>
              <View  style={styles.Image}>
                   <Text style={styles.img4}>VK</Text>
                </View>
                <View>
                <Text style={{fontSize:20,
                    fontWeight:'500',
                    color:'grey'}}>
                    Vaikuntapuram Restaurant</Text>
                <Text>Restaurant</Text>
                <View style={{display:'flex',
                    flexDirection:'row'}}>

                    <Image source={require('../assets/pin.png')}
                    style={{width:15,
                    height:15,
                    tintColor:'red'}}/>
                    <Text>Hyderabad-Telangana</Text>
                </View>
              
                </View>
                                          

            </View>            
                 <Image source={require('../assets/restaurant4.jpg')} 
                 style={{width:362,height:300}}/>  
                

            </View>


            <TouchableOpacity style={{borderWidth:0.2,
                margin:15,
                marginTop:0
                }}
                onPress={()=>navigation.navigate('Jobdetails4')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                     borderwidth:0.5,
                    gap:170}}>
                    <Text>Home Maid   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5}}/>

                </View>
            </TouchableOpacity>



            <TouchableOpacity style={{
                margin:15,
                marginTop:-15,
               }}onPress={()=>navigation.navigate('Jobdetails5')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                      borderWidth:0.2,

                    gap:170}}>
                    <Text>Waiter   vacancy:3</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      margin:5,
                      marginLeft:33}}/>

                </View>
            </TouchableOpacity>



              <TouchableOpacity style={{margin:15,
                marginTop:-15,
                }}onPress={()=>navigation.navigate('Jobdetails6')}>
                <View style={{display:'flex',
                     flexDirection:'row',
                     marginLeft:0,
                     marginRight:0,
                     backgroundColor:'white',
                     padding:15,
                    gap:170,
                    borderWidth:0.2,
                    borderBottomRightRadius:10,
                borderBottomLeftRadius:10,}}>
                    <Text>Cook   vacancy:1</Text>
                    <Image source={require('../assets/right-arrow.png')}
                    style={{width:10,
                     height:10,
                      marginLeft:35,
                      marginTop:4}}/>

                </View>
            </TouchableOpacity>






        </ScrollView>
      

<Modal animationType='fade'
visible={modalView1}
transparent={false}>

   

    <View style={{backgroundColor:'azure',
     flex:1, 
     display:'flex', 
     flexDirection:'row'}}>
     <TouchableOpacity 
     onPress={()=>{setModalView1(false)}}>
          <Image source={require('../assets/leftarrow.png')} 
        style={{width:17,
        height:17,
        margin:8}}/>
        </TouchableOpacity>
        <Text style={{fontSize:23,
            fontWeight:700,
            marginLeft:30}}>Broadcast msg</Text>
    </View>
  
</Modal>


<Modal animationType='fade'
visible={modalView2}
transparent={false}>

   

    <View style={{backgroundColor:'azure',
     flex:1, 
     display:'flex', 
     flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{setModalView2(false)}}>
          <Image source={require('../assets/leftarrow.png')} 
        style={{width:17,
        height:17,
        margin:8}}/>
        </TouchableOpacity>
        <Text style={{fontSize:23,
            fontWeight:700,
            marginLeft:30}}>Nortification</Text>
    </View>
  
</Modal>



<Modal animationType='fade'
visible={modalView3}
transparent={false}>

   
<View style={{backgroundColor:'azure',flex:1 }}>
    <View style={{
     display:'flex', 
     flexDirection:'row'}}>
     <TouchableOpacity onPress={()=>{setModalView3(false)}}>
          <Image source={require('../assets/leftarrow.png')} 
        style={{width:17,
        height:17,
        margin:8}}/>
        </TouchableOpacity>
        <Text style={{fontSize:23,
            fontWeight:700,
            marginLeft:30}}>More Info</Text>
            </View>

            <TouchableOpacity style={{
        backgroundColor:'#4682B4',
        padding:12,
        justifyContent:'center',
        alignItems:'center', 
        margin:40,  
        
        borderRadius:5
            }} onPress={()=>{navigation.navigate('Signup')}}>
                <Text style={{ fontSize:16,
                    fontWeight:'600',
                    color:'white'
                }}>LogOut</Text>
            </TouchableOpacity>
    </View>
  
</Modal>





    </View>
    
    
  )
}

export default Homescreen

const styles = StyleSheet.create({
     text1:{
        fontSize:19,
        fontWeight:'700',
        color:'orange'
    },
    text2:{
        fontSize:19,
        fontWeight:'700',
        color:'#4682B4'
    },
    text3:{
        fontSize:23,
        fontWeight:'600',
        marginLeft:10
    },


       img1:{
        width:35,
        height:35,
        tintColor:'#4682B4'
    },


    img2:{
        width:25,
        height:25,
        tintColor:'#4682B4',
        marginRight:10
      

    },
    img3:{
         width:25,
        height:25,
        tintColor:'#4682B4',
       

    },

    container3:{
        display:'flex',
        flexDirection:'row',
        margin:30,
        gap:10,
        marginTop:40
    },



    container1:{
        marginTop:40,
        display:'flex',
        flexDirection:'row',
        margin:20
    },
    container:{
        backgroundColor:'#B0E0E6',
        flex:1,
        marginTop:10
    },
    container2:{
        display:'flex',
        flexDirection:'row',
    },
    container4:{
        display:'flex',
        flexDirection:'row',
        gap:20

    },
    container5:{
       
        backgroundColor:'white',
        marginLeft:15,
        marginRight:15,
        marginTop:10,
         gap:30,
         borderWidth:0.2,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
       
        
           },
     container6:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:40,
        padding:10
        },



    picker:{
        borderWidth:1,
        backgroundColor:'white',
       
    },

    picker1:{
        borderWidth:0.3,
        margin:15,
    },
    img4:{
        fontSize:20,
        fontWeight:'500',       
    },

    Image:{
        padding:13,
        borderRadius:50,
        borderWidth:0.2,
        borderColor:'grey'
    }



       })