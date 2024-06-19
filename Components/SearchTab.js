import { Image, StyleSheet, TextInput, View } from "react-native"
import {Ionicons} from '@expo/vector-icons'

export default function SearchTab(){
    return(
        <View style={styles.main}>
            <View style={styles.search}>
          <Ionicons name="search" size={20} color={"#95969D"}/>
            <TextInput  placeholder="Search a job or position" style={{paddingLeft:10}}/>
            </View>
            <View style={styles.filter}>
                <Image source={require('../assets/Filter.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginVertical:25
        
    },
     search:{
        paddingVertical:10,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:10,
        width:"81%",
        borderRadius:10,
        backgroundColor:"#F2F2F3"
     },
     filter:{
        paddingVertical:14,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F2F2F3",
        paddingHorizontal:18,
        borderRadius:10
     },
    
})