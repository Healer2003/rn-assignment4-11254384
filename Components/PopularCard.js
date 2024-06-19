import { FlatList, Image, StyleSheet, Text, View } from "react-native"
import { joblist } from "./Data"

export default function PopularCard(){
    const render = ({item}) =>{
        return(
            <View style={styles.main}>
            <Image source={item.logo}/>
            <View style={styles.viewone}>
                <Text style={styles.toptext}>{item.role}</Text>
                <Text style={styles.bottomtext}>{item.firm}</Text>
            </View>
            <View style={styles.viewtwo}>
            <Text style={[styles.toptext,{fontWeight:"medium",fontSize:12}]}>{item.salary}</Text>
            <Text style={styles.bottomtext}>{item.location}</Text>
            </View>
        </View>
        )
    }
    return(
        <View>
            <FlatList data={joblist} renderItem={render} keyExtractor={(item)=>item.id} showsVerticalScrollIndicator={false}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingHorizontal:10,
        paddingVertical:20,
        backgroundColor:"white",
        marginVertical:10,
        borderRadius:20
    },
    toptext:{
        fontSize:14,
        fontWeight:"500"
    },
    bottomtext:{
        fontSize:13,
        color:"#95969D"
    },
    viewone:{
       justifyContent:"space-between",
       alignItems:"flex-start"
    },
    viewtwo:{
        justifyContent:"space-between",
        alignItems:"flex-end"
     }
})