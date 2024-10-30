

import { Slot } from 'expo-router'
import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

export default function Layout() {
  return (
    <SafeAreaView>
      <View style={{ backgroundColor: 'black' }}>
        <Text>Go back</Text>
      </View>
      <Slot />
      
     </SafeAreaView>
  )
}
