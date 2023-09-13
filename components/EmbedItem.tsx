import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function EmbedItem() {
  return (
    
    <View  >
      <Text  style={styles.TextDesign}>EmbedItem</Text>
      <ScrollView horizontal={true}>
        <View style={styles.scroll}>
            <View style={[styles.box , styles.boxscroll]}><Text>Let's</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>Scroll</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>box</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>on</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>right</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>side</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>Let's</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>Scroll</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>box</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>on</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>right</Text></View>
            <View style={[styles.box , styles.boxscroll]}><Text>side</Text></View>
            </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    TextDesign:{
        fontSize:15,
        margin:8,
        fontWeight:'bold',
        color:"red",
    },
    box:{
        height:100,
        width:100,
        borderRadius:4,
        margin:6,
        flex:1,
        alignItems:'center',
        justifyContent:'center'


    },
    boxscroll:{
        backgroundColor:"grey",
        elevation:4,
        shadowColor:"red",
        shadowRadius: 8,
        shadowOpacity:0.5,
        shadowOffset:{
            height:1,
            width:1,
        }

    },
    scroll:{
        flex:1,
        flexDirection:'row',
       
        

    }

})