import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import {Feather as Icon} from '@expo/vector-icons';
import { createMaterialTopTabNavigator, MaterialTopTabBar, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';
import Status from '../screens/Status';
import Chats from '../screens/Chats';
import Calls from '../screens/Calls';
import { LIGHT_COLOR, PRIMARY, PRIMARY_DARK, SECONDARY_BLUE } from '../constants/colors';
import { StatusBar } from 'expo-status-bar';
import CameraScreen from '../screens/CameraScreen/CameraScreen';




interface MainProps {

}

const Stack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

export type MatrimonyTabParamList = {
  chats: undefined;
  status: undefined;
  calls: undefined;
  camera: undefined;
};

export type WhatsAppStackParamList = {
  home: undefined;
};

export type combineTabWithStackProps<
  T extends keyof MatrimonyTabParamList
> = CompositeNavigationProp<
  MaterialTopTabNavigationProp<MatrimonyTabParamList, T>,
  NativeStackNavigationProp<WhatsAppStackParamList>
>;

function MaterialTopTab() {
    return (
      <Tab.Navigator
      initialRouteName='chats'
        screenOptions={{
          tabBarActiveTintColor: LIGHT_COLOR,
          tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: PRIMARY },
          tabBarIndicatorStyle: {
            backgroundColor: '#fff',
          }
        }}
      >
        <Tab.Screen
        name="Camera"
        options={{
          tabBarLabel: () => (
            <View>
              <Icon name="camera" size={26} color={PRIMARY_DARK} />
            </View>
          ),
        }}
        component={CameraScreen}
        />
        <Tab.Screen
          name="Feed"
          component={Chats}
          options={{ tabBarLabel: 'chats' }}
        />
        <Tab.Screen
          name="Notifications"
          component={Status}
          options={{ tabBarLabel: 'status' }}
        />
        <Tab.Screen
          name="Profile"
          component={Calls}
          options={{ tabBarLabel: 'calls' }}
        />
      </Tab.Navigator>
    );
  };



/*
const MaterialTopTab = () => {
    return(
       
        <Tab.Navigator
       
        >           
            <Tab.Screen name="chats" component={Chats} />
            <Tab.Screen name="status" component={Status} />
            <Tab.Screen name="calls" component={Calls} />
        </Tab.Navigator>
       
    );
}
*/
const Main = ({}: MainProps) => {
    return(
    <View style={{ flex: 1 }}>
        <StatusBar 
        style='light'
        backgroundColor={PRIMARY_DARK}
        />
<NavigationContainer>
<Stack.Navigator>
    <Stack.Screen 
    options={({navigation,route}) => ({
        title: "WhatsApp",
        headerTintColor: LIGHT_COLOR,
        headerShadowVisible: false,
        headerStyle: { backgroundColor: PRIMARY, },
        headerRight: () => {
            return(
                <View style={{flexDirection: "row", alignItems: "center"}}>
                    <TouchableOpacity 
                    onPress={() => console.log("Search")}
                    style={{marginHorizontal: 9}}
                    >
                    <Icon name='search' size={26} color={LIGHT_COLOR} />
                    </TouchableOpacity>
                    <TouchableOpacity
                    onPress={() => console.log("menu Clicked")}
                    style={{marginHorizontal: 5}}
                    >
                    <Icon name='more-vertical' size={26} color={LIGHT_COLOR} />
                    </TouchableOpacity>
                </View>
            );
        },
    })}
    name="home" 
    component={MaterialTopTab}/>
</Stack.Navigator>
</NavigationContainer>
</View>
    )
}



export default Main;