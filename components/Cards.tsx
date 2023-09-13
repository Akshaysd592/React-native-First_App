import {View,Text, StyleSheet, Image} from 'react-native';

import React from 'react';


function Cards (){
        return (
            <View style={styles.boxdesign}>
                 <Image style={styles.imagedesign} source={(require('../images/Hawamahal.jpeg'))} />
                <View style={styles.boxdesign }>
                <Text style={styles.head}>Hawa Mahal</Text>
                <Text style={styles.head1}>Hawa Mahal, palace in the Indian city of Jaipur
                 that was designed by Lal Chand Ustad and completed in 1799.</Text>
                </View>
           </View>
        )
};

const styles = StyleSheet.create({
    boxdesign:{
        flex:1,
        alignItems:'center',
        backgroundColor:'red',
        gap:8,
        width:250,
        height:350,
        borderRadius:8,
        margin:8,
        padding:4


    },
    imagedesign:{
            height:200,
            width:240,
            borderRadius:6
            
    },
    head:{

    },
    head1:{
        flex:1,
        
       

    }

})

export default Cards;