import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet ,Image,ScrollView } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";


export default class Activities extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize:20, backgroundColor:"white",fontFamily:'cursive', textAlign: 'center',}}> UPCOMING ACTIVITIES </Text>
        
         <Image source={require('../assets/ActivitiesImage-removebg-preview.png')}
       style={styles.activitiesIcon}></Image>


      <Text style={{color: "#171796",
    textAlign: "center",fontWeight: 'bold',
    //fontSize: RFValue(20),
    fontFamily: "cursive", padding:20,fontSize:15,
   }}>DATE              ACTIVITIES</Text>

<Text  style={styles.textStyle}>5sept2022  -   Teacher's Day celebration</Text> 
<Text  style={styles.textStyle}>10sept2022 - Marathon(6 to 8)</Text>
<Text  style={styles.textStyle}>12sept2022 -  Hindi Divas Celeb.</Text>
<Text  style={styles.textStyle}>24sept2022  - Cyclothon(6 to 8)</Text>
<Text  style={styles.textStyle}>26sept2022 - Swachta Week starts</Text>
<Text  style={styles.textStyle}>29sept2022 - Inter-class Calligraphy</Text>
<Text  style={styles.textStyle}>8oct2022 - Mathmania(6-12),Cultural Event(10)</Text>
<Text  style={styles.textStyle}>10oct2022 - IAF day Celeb</Text>
<Text  style={styles.textStyle}>15oct2022 - Diya Decoration Comp</Text>
<Text  style={styles.textStyle}>29oct2022 - Run for unity(9)</Text>
        <TouchableOpacity
              style={styles.buttons}
              onPress={() =>this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontSize:20, color:"black",fontWeight:'bold',fontFamily:'cursive'}}>Home Screen</Text>
        </TouchableOpacity>
      </View>
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 50 ,
     backgroundColor:'white'
    },

    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#f2c80c",
    margin: 10,
    width: 200,
    height: 50,
  },
  activitiesIcon:{
     width: RFValue(300),
    height: RFValue(300),
    resizeMode: "contain",
   marginLeft:1
  },
   textStyle:{
color: "black",
    textAlign: "center",
    fontSize: RFValue(20),
    fontFamily: "cursive",
    fontWeight: 'bold',
   
 
    },
})