import { Image, ImageBackground, StyleSheet ,View,Text} from "react-native"

export default function JobsCard({style,icon,Firm,location,salary,time,experience,role,but}){
    return(
       
            <ImageBackground  style={style} source={require("../assets/Mask.png")}>
             <View style={{flex:1,justifyContent:"space-between"}}>
                <View style={{flexDirection:"row"}}>
                 <View style={styles.iconholder}>
                    <Image source={icon}/>
                 </View>
                 <View>
                    <Text style={{color:"#FFFFFF", fontSize:16,fontWeight:"500"}}>{role}</Text>
                    <Text style={{color:"#FFFFFF", fontSize:14}}>{Firm}</Text>
                 </View>
                </View>

                <View style={{flexDirection:"row",alignSelf:"flex-end"}}>
                    <View style={but}><Text style={{color:"white",fontSize:11}}>{time}</Text></View>
                    <View style={but}><Text style={{color:"white",fontSize:11}}>{experience}</Text></View>
                </View>

                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <Text style={styles.bottomtext}>{salary}</Text>
                    <Text style={styles.bottomtext}>{location}</Text>
                </View>
             </View>
            </ImageBackground>

    )
}

const styles = StyleSheet.create({
  iconholder:{
    paddingHorizontal:8,
    paddingVertical:8,
    backgroundColor:"white",
    borderRadius:10,
    marginRight:15
  },
  bottomtext:{
    fontSize:14,
    color:"white",
    fontWeight:"500",
  },
 
})