import { StyleSheet, View, Text, Image, FlatList} from "react-native";
import SearchTab from "../Components/SearchTab";
import JobsCard from "../Components/JobsCard";
import { jobs } from "../Components/Data";
import PopularCard from "../Components/PopularCard";


export default function Home({route}){
    const render = ({item})=>{
        return(
            <JobsCard 
            role={item.role}
            Firm={item.company}
            experience={item.experience}
            salary={item.salary}
            location={item.location}
            icon={item.icon}
            style={item.card}
            time={item.time}
            but={item.button}
            />
        )
    }
    const {name, email} = route.params
    return(
     <View style={styles.container}>
        <View style={{flexDirection:"row",alignItems:"center", paddingVertical:10}}>
        <View style={{flex:1}}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
        </View>
        <View>
        <Image source={require('../assets/Profile.png')}/>
        <View style={styles.mainring}>
                    <View
                    style={styles.subring}
                    ></View>
                </View>
        </View>
        </View>
        <SearchTab/>
        <View style={styles.textcont}>
            <Text style={styles.left}>Featured Jobs</Text>
            <Text style={styles.right}>See all</Text>
        </View>
        <View style={{marginVertical:20}}>
        <FlatList 
        data={jobs} 
        renderItem={render} 
        keyExtractor={(item)=>item.id} 
        showsHorizontalScrollIndicator={false} 
        horizontal={true}/>
        </View>

         <View style={styles.textcont}>
            <Text style={styles.left}>Popular Jobs</Text>
            <Text style={styles.right}>See all</Text>
        </View >
        <View style={{marginVertical:10,flex:1}}>
        <PopularCard/>
        </View>
     </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#FAFAFD"
    },
    name:{
        fontSize:24,
        fontWeight:"bold"
    },
    email:{
        fontSize:20,
        color:"#95969D"
    },
    textcont:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    left:{
        fontSize:16,
        fontWeight:"500",
        color:"#0D0D26"
    },
    right:{
        fontSize:14,
        fontWeight:"medium",
        color:"#95969D"
    },
    mainring:{
        paddingHorizontal:3,
        paddingVertical:3,
        backgroundColor:"white",
        borderRadius:50,
        position:"absolute",
        left:36,
        top:5
 },
    subring:{
        paddingHorizontal:4,
        paddingVertical:4,
        backgroundColor:"red",
        borderRadius:50
 }
})