import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import userList from './src/components/UserList';
import userform from './src/components/UserFrom';
import { Button, Icon } from 'react-native-elements';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" screenOptions={screenOptions}>
        <Stack.Screen 
        name="UserList"
         component={userList}
         options={({navigation}) => {
             return {
             title: 'Lista de Usuários',
             headerRight: () => (
              <Button
              onPress={() => navigation.navigate('UserForm')} 
              type="clear" icon={<Icon name="add" size={25} color="white" />} />
            )
           }
          }
         }
         />
        <Stack.Screen name="UserForm" component={userform}  options={{ title: 'Formulário de Usuários'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
     fontWeight: 'bold'
  }
}