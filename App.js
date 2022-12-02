import * as React from 'react';
import { Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home'
import Crud from './screens/Crud'
// import List from './screens/List'
import Gallery from './screens/Gallery'

const Tab = createBottomTabNavigator();
const screenOptions = {
  unmountOnBlur: false,
  headerShown: false,
  tabBarStyle:{
    backgroundColor:'black',
    height:65,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
  },
  tabBarItemStyle:{
    backgroundColor:'white',
    margin:0,
    borderRadius:0,
    color:'white',
  }
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator {...{ screenOptions }}>
        <Tab.Screen name="Home" component={HomeScreen}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({color,size}) => (
              <Image
                source={require("./assets/home.png")}
                style={{height:30 ,width:30}}
                />
            )
          }}
        />

        <Tab.Screen name="User" component={Crud}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({color,size}) => (
              <Image
                source={require("./assets/users.png")}
                style={{height:30 ,width:40}}
                />
            )
          }}
        />

        {/* <Tab.Screen name="Listings" component={List} 
          options={{
            tabBarLabel: "",
            tabBarIcon: ({color,size}) => (
              <Image
                source={require("./assets/list.png")}
                style={{height:30 ,width:30}}
                />
            )
          }}
        /> */}

        <Tab.Screen name="Gallery" component={Gallery}
          options={{
            tabBarLabel: "",
            tabBarIcon: ({color,size}) => (
              <Image
                source={require("./assets/gallery.png")}
                style={{height:30 ,width:30}}
                />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;