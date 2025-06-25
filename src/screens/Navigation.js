import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './Signup';
import Slider from'./Slider';
import Login from './Login'; 
import Homescreen from './Homescreen';
import TabBottom from './TabBottom';
import Demofile from './Demofile';
import Demofile2 from './Demofile2';
import Formsubmit from './Formsubmit';
import Flatlist from './Flatlist';
import Jobdetails from './Jobdetails';
import Jobdetails2 from './Jobdetails2';
import Jobdetails3 from './Jobdetails3';
import Jobdetails4 from './Jobdetails4';
import Jobdetails5 from './Jobdetails5';
import Jobdetails6 from './Jobdetails6';




const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name='Slider'
        component={Slider}
        options={{headerShown:false}}/>

         <Stack.Screen name='Signup'
        component={Signup}
         options={{headerShown:false}}/>

          <Stack.Screen name='Login'
        component={Login}
         options={{headerShown:false}}/>




         <Stack.Screen name='TabBottom'
        component={TabBottom}
         options={{headerShown:false}}/>

          <Stack.Screen name='Flatlist'
         component={Flatlist}/>



         <Stack.Screen name='Formsubmit'
         component={Formsubmit}
          options={{headerShown:false}}
         />
          
           <Stack.Screen name="Jobdetails" 
           component={Jobdetails}
            options={{headerShown:false}} />

             <Stack.Screen name="Jobdetails2" 
           component={Jobdetails2}
            options={{headerShown:false}} />


             <Stack.Screen name="Jobdetails3" 
           component={Jobdetails3}
            options={{headerShown:false}} />

            <Stack.Screen name="Jobdetails4" 
           component={Jobdetails4}
            options={{headerShown:false}} />

            <Stack.Screen name="Jobdetails5" 
           component={Jobdetails5}
            options={{headerShown:false}} />

            <Stack.Screen name="Jobdetails6" 
           component={Jobdetails6}
            options={{headerShown:false}} />

           
           

      </Stack.Navigator>
         </NavigationContainer>
  );
};

export default Navigation