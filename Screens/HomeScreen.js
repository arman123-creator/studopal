import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import { Linking } from 'react-native';
//import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
constructor(){
  super();
  this.state={
    like:0,
    dislike:0
  }
}

  render() {
    return (
      <View>
      <Text style={styles.textStyle}>STUDOPAL</Text>
       <Image source={require('../assets/StudentLogo.png')}
       style={styles.appIcon}>
       
</Image>
        <View>
       
          <View style={styles.buttonsContainer}>

          <TouchableOpacity
         onPress={() => Linking.openURL('https://www.apsahmednagar.com/')}  
           >

            <Image
                  style={{
                    height: 50,
                    width: 100,
                    borderRadius: 80,
                    
                    alignSelf: "center",
                  }}
                  source={require('../assets/SchoolLogo.png')}
                />
           
            <Text style={{ alignItems: 'center',
    justifyContent: 'center',
     paddingLeft:80,
     marginRight: 15,
    fontWeight:'bold',color:'black',fontFamily:'cursive',fontSize:15}}
     >
APS WEB
</Text></TouchableOpacity>
            <TouchableOpacity
              style={{backgroundColor:'#f2c80c', alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
   borderRadius: 15,
    margin: 15,
    width: 200,
    height: 50,alignSelf:'center'}}
              onPress={() => this.props.navigation.navigate('Activities')}>
              
              

             <Text style={{fontWeight:'bold',color:'black',fontFamily:'cursive',fontSize:20}}> Activities</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor:'#f2c80c', alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 15,
    width: 200,
    height: 50,alignSelf:'center'}}
              onPress={() => this.props.navigation.navigate('Uniform')}>
              <Text style={{fontWeight:'bold',color:'black',fontFamily:'cursive',fontSize:20}}>Uniform</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{backgroundColor:'#f2c80c', alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    
    borderRadius: 15,
    margin: 15,
    width: 200,
    height: 50,alignSelf:'center'}}
              onPress={() => this.props.navigation.navigate('AboutSchool')}>
              <Text style={{fontWeight:'bold',color:'black',fontFamily:'cursive',fontSize:20}}>AboutSchool</Text>
            </TouchableOpacity>


           <TouchableOpacity
         onPress={() => Linking.openURL('https://console.dialogflow.com/api-client/demo/embedded/0caa3670-7258-4284-8dd8-916f89dfed83')}  
           >

            <Image
                  style={{
                    height: 50,
                    width: 100,
                    borderRadius: 80,
                    alignSelf: "center",
                  }}
                  source={require('../assets/chatbot.png')}
                />
           
            <Text style={{ alignItems: 'center',
    justifyContent: 'center',
     paddingLeft:60,
     marginRight: 15,
    fontWeight:'bold',color:'black',fontFamily:'cursive',fontSize:15}}
     >
TUTOROT-X
</Text></TouchableOpacity>
          
 
          
</View>

          </View>
          
        </View>
     
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  appIcon:{
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
   marginLeft:85
  },
  textStyle:{
color: 'black',
    padding: 10,
    fontSize: 30,
    fontWeight: 'bold',
     fontFamily: "cursive",
    textAlign: 'center',
},
 
  
});

