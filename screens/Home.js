import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Platform,
    StatusBar,
    ImageBackground,
    Image
} from "react-native";

export default class HomeScreen extends Component {
    

    render() {
        return (
            <View style={styles.container}>
             <SafeAreaView style={styles.droidSafeArea}/>
            <ImageBackground source={require('../assets/quizbackground.jpg')} style={styles.backgroundImage}>
            <View style={styles.titleBar}>
             <Text style={styles.titleText}>
                Quiz App
             </Text>
             </View>
             <TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("ComputerScience")
             }}>
             <Text style={styles.routeText}>
             Computer Science
             </Text>
             </TouchableOpacity>
                          <TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("GeneralAwareness")
             }}>
             <Text style={styles.routeText}>
             General Awareness
             </Text>
            
             </TouchableOpacity>

             <TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("Nature")
             }}>
             <Text style={styles.routeText}>
            Nature & Science
             </Text>
             

             
             </TouchableOpacity>
             <TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("History")
             }}>
             <Text style={styles.routeText}>
             History
             </Text>
            
             </TouchableOpacity>

<TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("Boardgames")
             }}>
             <Text style={styles.routeText}>
             Board Games
             </Text>
            
             </TouchableOpacity>

               <TouchableOpacity style={styles.routeCard} onPress={()=>{
               this.props.navigation.navigate("Geography")
              }}>
              <Text style={styles.routeText}>
              Geography
              </Text>
            
             </TouchableOpacity>

             

            </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.1,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent:"center",
       alignItems:"center"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
       justifyContent:"center",
       alignItems:"center"
    },
    
});