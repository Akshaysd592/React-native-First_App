import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function linkopen(linktobeopen: string) {
    Linking.openURL(linktobeopen);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card </Text>

      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>Taj Mahal</Text>
        </View>
        <Image
          style={styles.cardImage}
          source={require('../images/taj_mahal.jpg')}
        />
        <View style={styles.bodyContainer}>
           <Text numberOfLines={3}>
            An immense mausoleum of white marble, built in Agra between 1631 and
            1648 by order of the Mughal emperor Shah Jahan in memory of his
            favourite wife, the Taj Mahal is the jewel of Muslim art in India
            and one of the universally admired masterpieces of the world's
            heritage.
          </Text>
          <View style={styles.footerContainer}>
             <TouchableOpacity onPress={() => linkopen('https://en.wikipedia.org/wiki/Taj_Mahal')}>
            <Text style={styles.linkStyle}>Read More</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            onPress={() => linkopen('https://www.instagram.com/akshaysd592')}>
            <Text style={styles.linkStyle}>Follow me </Text>
            </TouchableOpacity> */}

            <TouchableOpacity
            onPress={() =>
                linkopen('https://www.linkedin.com/in/akshay-dhobale')
            }>
            <Text style={styles.linkStyle}>Follow me</Text>
            </TouchableOpacity>
          </View>
          
        </View>

            
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize:15,
    fontWeight:'bold',
    marginHorizontal:8
  },
  card: {
    height:380,
    width:380,
    borderRadius:8,
    marginVertical:12,
    marginHorizontal:15
  },
  elevatedCard: {
    backgroundColor:'#E07C24',
    elevation:3 ,
    shadowOffset:{
        height:1,
        width:1
    },
    shadowColor:'#333',
    shadowRadius:2,
    shadowOpacity:0.4

  },
  headingContainer: {
    height:25,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText: {
    color:'#FFFFFF',
    fontSize:15,
    fontWeight:'600'
  },
  cardImage: {
    height: 240,
    width: 380,
    objectFit:'fill'
  },
  bodyContainer: {
    padding:10,
    flex:1,
    flexDirection:"column"
  },
  footerContainer: {
       paddingTop:10,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-evenly'
  },
  linkStyle: {
    fontSize:15,
    fontWeight:'800',
    backgroundColor:"#FFFFFF",
    paddingHorizontal:20,
    paddingVertical:8,
    borderRadius:4,
    elevation:1,


  },
});

export default ActionCard;
