import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet ,Image ,ScrollView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";




export default class Uniform extends Component {


  

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
<Image source={require('../assets/UniformImage-removebg-preview.png')}
       style={styles.uniformIcon}></Image>


       <Text style={{color: "#171796",
    textAlign: "center",fontWeight: 'bold',
    fontSize: RFValue(20),
    fontFamily: "cursive", padding:20,
   }}>DAYS              UNIFORM</Text>

    <Text style={styles.textStyle}>MONDAY      -      WHITE UNIFORM</Text>
  <Text style={styles.textStyle}>TUESDAY       -      GREY UNIFORM</Text>
  <Text style={styles.textStyle}>WEDNESDAY   -      GREY UNIFORM</Text>
  <Text style={styles.textStyle}>THURSDAY    -      GREY UNIFORM</Text>
  <Text style={styles.textStyle}>FRIDAY      -      GREY UNIFORM</Text>
  <Text style={styles.textStyle}>SATURDAY    -     HOUSE UNIFORM</Text>
       
        <TouchableOpacity
              style={styles.buttons}
           onPress={() =>this.props.navigation.navigate('HomeScreen')}>
            
              
              <Text style={{ fontSize:20,fontWeight:'bold', color:"black",fontFamily:'cursive'}}>Home Screen</Text>
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
     marginTop: 0 ,
     backgroundColor:'white'
    },
  textStyle:{
color: "black",
    textAlign: "center",
    fontSize: RFValue(20),
    fontFamily: "cursive",
    fontWeight: 'bold',
   
 
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

  uniformIcon:{
     width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
   marginLeft:1
  }
})