// import React from 'react';

// import {Text,View,StyleSheet} from 'react-native';

// function App(){

//          return (
//           <View style={Styles.contain}>
//             <Text>Hello Ji</Text>
//           </View>
//          )  

// }
// const Styles = StyleSheet.create({
//   contain:{
//       flex:1,
//       alignItems:"center",
//       justifyContent:"center",
//   },
// })




// export default App;


import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import Cards from './components/Cards'
import ActionCard from './components/ActionCard'
import ContactCards from './components/ContactCards'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        
      <ScrollView>
        <FlatCards/> 
      </ScrollView>
      <Text style={[styles.contain]}>Scroll Image</Text> 
      <ScrollView horizontal>
       
         <Cards/>
         <Cards/>
         <Cards/>
      </ScrollView>
      
      <ScrollView>
        <ContactCards/>
         <ActionCard/>
      </ScrollView>



      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
      contain:{
        fontWeight:'bold',
        margin:6,
        fontSize:15
      }
});

export default App