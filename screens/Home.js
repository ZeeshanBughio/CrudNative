import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.center}>
      <Text style={styles.text}>Home</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    center : {
        flex : 1,
        alignItems : 'center',
        justifyContent  : 'center',
        backgroundColor : 'red'
    },
    text : {
        fontSize: 35,
        color: 'white',
        fontFamily: 'Cursive'
    }
})