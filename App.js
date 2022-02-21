import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import registerNNPushToken from 'native-notify';

import LoginScreen from './screens/Login'
import CharactersScreen from './screens/Characters'

import useAuth from './hooks/useAuth'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Landing() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Characters" component={CharactersScreen} />
      <Tab.Screen name="Detail2" component={CharactersScreen} />
    </Tab.Navigator>
  )
}
function App() {
  registerNNPushToken(2134, 'sqVJkbWXxl3GQfwaGN5ExS');
  const { isAuthenticated } = useAuth()
  return (
      <NavigationContainer>
        <Stack.Navigator>
          { isAuthenticated ? 
            (
              <Stack.Screen 
                name="Home"
                options={{ headerShown: false }}
                component={Landing}
              />
            ) : (
              <Stack.Screen 
                name="Login"
                options={{ headerShown: false }}
                component={LoginScreen}
              />
            )
          }
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App
