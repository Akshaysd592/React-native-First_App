import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import EmbedItem from './EmbedItem'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.TextDesign}>FlatCards</Text>
      <View style={styles.container}>
          <View style={[styles.box , styles.boxred]}><Text>Red</Text></View>
          <View style={[styles.box , styles.boxgreen]}><Text>Green</Text></View>
          <View style={[styles.box , styles.boxorange]}><Text>Orange</Text></View>

      </View> 
      <View>
      <EmbedItem/>
      </View>
      
       
    </View>
  )
}

const styles = StyleSheet.create({
  TextDesign :{
     fontSize:15,
     color:'#f0f',
     padding:12,
     fontWeight:'bold'
  },
  container:{
        flex:1,
        flexDirection:"row"
  },
  box:{
      height:100,
      width:100,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:8,
      margin:8,
  },
  boxred:{
       backgroundColor:'red',
  },
  boxgreen:{
      backgroundColor:'green',
  },
  boxorange:{
     backgroundColor:'orange'
  }


})