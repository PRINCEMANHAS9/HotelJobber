import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { NavigationContainer } from '@react-navigation/native';

import Signup from './Signup';
import Login from './Login';
import Homescreen from './Homescreen';
import Demofile from './Demofile';
import Profile from './Profile';
import Alljobs from './Alljobs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


const TabBottom = () => {
      return (
         <Tab.Navigator>
                    <Tab.Screen
                     name='Hot Jobs'
                      component={Homescreen}
                      options={{headerShown:false, tabBarIcon:( color, size)=>
                      (<MaterialCommunityIcons name='fire' color={color} size={23} />)}}/>

                     <Tab.Screen 
                     name='Alljobs'
                      component={Alljobs} 
                      options={{headerShown:false,tabBarIcon:( color, size)=>
                      (<MaterialCommunityIcons name='briefcase-outline' color={color} size={23} />)}}/>              

                       <Tab.Screen 
                     name='Profile'
                      component={Profile}
                      options={{headerShown:false , tabBarIcon:( color, size)=>
                      (<MaterialCommunityIcons name='account' color={color} size={23}  />) }}/>                   
                      
                      

                </Tab.Navigator>
          


   
  )
}

export default TabBottom

const styles = StyleSheet.create({})