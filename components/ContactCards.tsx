import React from "react";

import {Text , View ,StyleSheet, ScrollView, TouchableOpacity, Linking} from 'react-native';
    const User = [
      {
        uid:1,
        Name :'Akshay Dhobale ',
        profession:"Software Engineer ",
      },
      {
        uid:2,
        Name :'Sanket Dhobale ',
        profession:"UI Engineer",
      },
      {
        uid:3,
        Name :'Aakash Singh ',
        profession:"ML Engineer",
      }

    ]

const ContactCards =()=>{

      function connectlink (link :string){
         Linking.openURL(link);
      }
      return (
        <View>
            <Text style={styles.heading}> Contact List ( click below to connect ) </Text>
             <ScrollView scrollEnabled={false} style={styles.head}>
              <TouchableOpacity onPress={()=>connectlink('https://www.linkedin.com/in/akshay-dhobale')}>
            {
              User.map(({uid,Name,profession})=>(
                <View key={uid} style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                 <Text  style={styles.subtext}> {Name} :  {profession} </Text>
                 {/* <Text  style={styles.subtext}>{profession}</Text> */}
               </View>
              ) )
            }
            </TouchableOpacity>
            </ScrollView>
        </View>
      )
}


export default ContactCards;

const styles = StyleSheet.create({
  heading:{
     fontSize:17,
     fontWeight:"bold",
     marginHorizontal:10
  },
  head:{
       marginHorizontal:10,
       marginLeft:12,
       marginBottom:20,
       marginTop:10,
       backgroundColor:'#333',
       padding:10,
       borderRadius:20,
       elevation:1,
       shadowRadius:30,
       shadowColor:'green'
      //  flex:1,
      //  alignItems:'center',
      //  justifyContent:'center',
  },
  subtext:{
        fontSize:15
        // fontWeight:'800',
  },
})