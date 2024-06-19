import { Image, StyleSheet, View } from "react-native";
import { data } from "./Data";
export default function AccountsCard(){
    return(
        <View style={styles.cont}>
         {
            data.map((item, index)=>{
                return(
                    <View style={styles.iconbutton} key={item.id}>
                        <Image style={{
                            resizeMode:"contain"
                        }}source={item.icon}/>
                    </View>
                )
            })
         }
        </View>

    );
}

const styles = StyleSheet.create({
    cont:{
        flexDirection:"row",
        alignSelf:"center",
        alignItems:"center"
    },
    iconbutton:{
        paddingHorizontal:15,
        paddingVertical: 15,
        backgroundColor:"white",
        marginHorizontal:12,
        borderRadius:50,
        elevation:0.1
    }
})