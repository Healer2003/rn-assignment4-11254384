import { StatusBar } from 'expo-status-bar';
import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from './Screens/SignUp';
import Home from './Screens/Home';


const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <View style={styles.container}>
        <Stack.Navigator initialRouteName='SignUp'>
          <Stack.Screen options={{headerShown:false}}name='SignUp' component={SignUp}/>
         <Stack.Screen options={{headerShown:false}} name ='Home' component={Home}/>
        </Stack.Navigator>
        </View>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FAFAFD",
    paddingTop:20,
    paddingHorizontal:18
  },
  text:{
    fontSize:16,
  }


});
