import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Rooms from './pages/Rooms';
import Sign from './pages/auth/Sign';

import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from './components/styles/colors';
import RoomMessages from './pages/RoomMessages';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignPage" component={Sign} />
    </Stack.Navigator>
  );
}

const RoomStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RoomsPage"
        component={Rooms}
        options={{
          headerTitle: 'Odalar',
          headerTitleAlign: 'center',
          headerTintColor: '#ff9e42',
          headerBackVisible: false,//üst çubuk geri tuşunu kapatır
          headerRight: () => <Icon name='logout' size={25} color={colors.yellow} onPress={() => auth().signOut()} />,
        }}
      />
      <Stack.Screen
        name='RoomMessagesPage'
        component={RoomMessages}
        options={({ route, navigation }) => ({
          headerTitle: route.params.item.room,
          headerTitleAlign: 'center',
          headerTintColor: colors.yellow,
          headerBackTitle: 'odalar',
          headerRight: () => <Icon name='logout' size={25} color={colors.yellow} onPress={() => auth().signOut()} />,
          headerLeft: () => <Icon name='arrow-left' size={25} color={colors.yellow} onPress={() => navigation.goBack()} ><Text style={{ fontSize: 20 }}>Odalar</Text></Icon>,
        })}

      />
    </Stack.Navigator>
  );
}

const Router = () => {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {//user verisinde değişiklik olursa kontrolü yapıyor
    auth().onAuthStateChanged(user => {
      setUserSession(!user);
    });
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userSession ?
          (<Stack.Screen
            name="Auth"
            component={AuthStack}
          />)
          : (
            <Stack.Screen
              name="Room"
              component={RoomStack}
            />
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;