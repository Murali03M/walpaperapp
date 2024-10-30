

import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Library from '../library';
import Suggested from '../suggested';
import Liked from '../liked';

const Tab = createMaterialTopTabNavigator();



export default function foryou () {
  return (


           <Tab.Navigator>
      <Tab.Screen name="Liked" component={Liked} />
        <Tab.Screen name="Suggested" component={Suggested} />
        <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>


 
 


  )
}
