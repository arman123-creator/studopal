import React, { Component } from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Image,ScrollView} from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";

export default class AboutSchool extends Component {
  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
        <Text style={{  fontSize:25, backgroundColor:"white",fontFamily:'cursive', textAlign: 'center',color:'#171796'}}> About School</Text>
        
          <Image source={require('../assets/schoolLogo-removebg-preview.png')}
       style={styles.schoolIcon}></Image>

<Text style={styles.textStyle}>Army Public School is alternatively also known as APS. The school was established in 1982.
Army Public School is a Co-ed school affiliated to Central Board of Secondary Education (CBSE).
It is managed by Army Welfare Education Society.</Text>
         
<Text style={styles.textStyle}>Currently, there are over 4000 students on its rolls. The school's management, Principal, teaching faculty, and staff have created an ambiance not just of academic excellence, but also one where ethical values are inculcated, talent unleashed, self-confidence grows, and life skills are developed.
</Text>
         
         <Text style={styles.textStyle}>The school follows the CBSE curriculum with classes from Grade 1 to Grade 12. At the Grade XI level, students have the option to take up academic electives in humanities, science, or commerce subjects in addition to the regular subjects and languages. Music and Painting are also offered. In addition to sports, students enjoy adventure camps and training programs.</Text>

<Text style={styles.textStyle} >In addition to a composite Science lab, the three-storeyed academic block has labs for individual science subjects, namely, Physics, Chemistry, and Maths, all equipped with the required instruments and other equipment. There are also labs for maths and languages, and computer labs. Facilities for football, athletics, basketball, etc and for indoor games as well are provided.</Text>

        <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('HomeScreen')}>
              <Text style={{ fontWeight:'bold', fontSize:20, color:"black",fontFamily:'cursive'}}>Home Screen</Text>
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
     marginTop: 10 ,
backgroundColor:'white'
    },
  
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:'#f2c80c',
    color:'#f2c80c',
        margin: 10,
    width: 200,
    height: 50,
  },
  schoolIcon:{
     width: RFValue(200),
    height: RFValue(200),
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