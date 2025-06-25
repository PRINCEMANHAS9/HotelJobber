import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Modal } from 'react-native'
import React from 'react';
import { useState } from 'react';
import Flatlist from './Flatlist'

const Alljobs = () => {
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
                      <TouchableOpacity onPress={()=>setModalView1(true)}>
                      <Image source={require('../assets/promote.png')}
                      style={styles.img2}/>
                      </TouchableOpacity>
      
                     <TouchableOpacity onPress={()=>setModalView2(true)}> 
                      <Image source={require('../assets/bellicon.png')}
                      style={styles.img2}/>
                      </TouchableOpacity>
                      
                      
                    <TouchableOpacity onPress={()=>setModalView3(true)}>
                        <Image source={require('../assets/dotsmenu.png')}
                      style={styles.img3}/>
                      </TouchableOpacity>               
                  </View>
                </View>
       
      
                <View style={{display:'flex',
                    flexDirection:'row',
                    gap:150}}> 
                  <Text style={styles.text3}> All Jobs</Text>   




                 <TouchableOpacity style={{display:'flex',
                     flexDirection:'row'}}>
                     <Image source={require('../assets/pin.png')}
                     style={{width:16, 
                     height:16,
                     tintColor:'red',
                     marginTop:5}}
                    //  onPress={()=>setModalView(true)}
                    />
                     <Text style={{marginTop:7}}>Select State</Text> 
                 </TouchableOpacity>
    </View>
    

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
            margin:13}}/>
            </TouchableOpacity>
            <Text style={{fontSize:23,
                fontWeight:700,
                marginLeft:30,
                marginTop:5}}>Broadcast msg</Text>
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
            style={{width:15,
            height:15,
            margin:13,          
            }}/>
           
            </TouchableOpacity>
            <Text style={{fontSize:23,
                fontWeight:700,
                marginLeft:30,
                marginTop:5}}>Nortification</Text>
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
            margin:13}}/>
            </TouchableOpacity>
            <Text style={{fontSize:23,
                fontWeight:700,
                marginLeft:30,
                marginTop:5}}>More Info</Text>
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
    
    
    
    
    

    <Flatlist/>






    









    </View>
  )
}

export default Alljobs

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
        marginLeft:10,
        marginTop:5
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
        backgroundColor:'azure',
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
})