import { StyleSheet, View,Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import Forms from "../Components/Forms";
import AccountsCard from "../Components/AccountsCard";
import { useNavigation } from "@react-navigation/native";
import Home from "./Home";

export default function SignUp(){
    const [name,setName] = useState()
    const [email, setEmail] = useState()

    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.info}>
                <Text style={styles.nameText}>Jobizz</Text>
                <Text style={styles.welcomeText}>Welcome Back👋</Text>
                <Text style={styles.lastText}>Let's log in. Apply to jobs!</Text>
            </View>
            <Forms value1={name} value2={email} change1={setName} change2={setEmail}/>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Home',{name:name, email: email})}}>
                <Text
                style={{
                    alignSelf:"center",
                    color:"white",
                    fontSize:16,
                    fontWeight:"medium"
                }}
                >Log in</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                marginTop:40,
                marginBottom:30
            }}>
                <View style={styles.hrule}></View>
                <Text style={{
                     marginHorizontal:10,
                     color:"#AFB0B6"
                }}>Or continue with</Text>
                <View style={styles.hrule}></View>
            </View>
            <AccountsCard/>
            <Text style={{color:"#BDBEC2", fontSize:14, alignSelf:"center",marginVertical:50}}>Haven't an account?
                <Text style={{color:"#356899"}}> Register</Text>
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
        container:{
          flex:1,
          backgroundColor:"#FAFAFD"
            
        },

        info:{
            paddingTop:100,
            paddingBottom:20
         },
        nameText:{
            fontSize:22,
            color:"#356899",
            fontWeight:"500"
        },
        welcomeText:{
            fontSize:24,
            fontWeight:"500",
            marginVertical:5
            
        },
        lastText:{
            fontSize:14,
            color:"#AFB0B6"
            
        },
        button:{
            backgroundColor:"#356899",
            paddingVertical:18,
            borderRadius:8
        },
        hrule:{
            height:0.5,
            paddingHorizontal:70,
            backgroundColor:"#AFB0B6",
           
        }
})