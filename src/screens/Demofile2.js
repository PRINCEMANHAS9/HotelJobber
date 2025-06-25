import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Demofile2 = ({route}) => {
    const {details} = route.params
  return (
    <View>
      <Text>{details.name}</Text>
      <Text>{details.username}</Text>
    </View>
  )
}

export default Demofile2

const styles = StyleSheet.create({})