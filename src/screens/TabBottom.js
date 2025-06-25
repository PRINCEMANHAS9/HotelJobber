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

const Tab = createBottomTabNavigator();


const TabBottom = () => {
      return (
         <Tab.Navigator>
                    <Tab.Screen
                     name='Hot Jobs'
                      component={Homescreen}
                      options={{headerShown:false}} />

                     <Tab.Screen 
                     name='Alljobs'
                      component={Alljobs} 
                      options={{headerShown:false}}/>                    

                       <Tab.Screen 
                     name='Profile'
                      component={Profile}
                      options={{headerShown:false}}/>                   
                      
                      

                </Tab.Navigator>
          


   
  )
}

export default TabBottom

const styles = StyleSheet.create({})