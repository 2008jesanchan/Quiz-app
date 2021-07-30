import React, { Component } from 'react';
import { Text, View,TouchableOpacity,StyleSheet,Image } from 'react-native';
import {Link} from 'react-router-native'
import {Ionicons} from '@expo/vector-icons'


export default class ComputerScience extends Component {
    render() {
        return (
            <View style={styles.container}>
                 <TouchableOpacity style={styles.button}
                onPress={()=>this.props.navigation.navigate('Home')}
                >
                <Text>Go Back</Text>
                </TouchableOpacity>
                <Text style={styles.text}>Lets start your computer science quiz!</Text>
                <Image style={styles.quizImage} source={require('../assets/quizImage.jpg')}/>
                <Link style={styles.startbutton} to={'csquiz'}>
                
                <TouchableOpacity  onPress={()=>this.props.navigation.navigate('csquiz')}>
                <View style={{display:'flex',flexDirection:"row"}}>
                <Ionicons 
                name='md-play'size={30}/>
                <Text style={styles.startbuttontext}>Start Questions</Text>
                </View>
                </TouchableOpacity>
                </Link>  

            </View>
        )
    }
}

const styles=StyleSheet.create({
container:{
  backgroundColor:'yellow',
  flex: 1,
  //justifyContent: "center",
  alignItems: "center"
},
button:{
  backgroundColor:"white",
  borderWidth:2,
  borderRadius:5,
  height:30,
  width:90,
  justifyContent:"center",
  alignItems:"center",
  marginTop:20
  
},
startbutton:{
  backgroundColor:'lightblue',
  borderWidth:2,
  borderRadius:5,
  height:'10%',
  width:'60%',
  justifyContent:"center",
  alignItems:"center",
  alignSelf:'center'
},
startbuttontext:{
fontSize:20
},
quizImage:{
height:250,
width:250,
margin:20,
marginTop:50


},
text:{
marginTop:30,
fontSize:18,
fontStyle:"italic",
}
})