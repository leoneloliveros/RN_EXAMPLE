import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import LoginScreen from './screens/Login'
import DetailScreen from './screens/Detail'

import useAuth from './hooks/useAuth'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function Landing() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  )
}
function App() {
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
            ) 
            :
            (
              <Stack.Screen 
                name="Login"
                options={{ headerShown: false }}
                component={LoginScreen}
              />
            )

            
            
          }
          <Stack.Screen 
            name="Home"
            options={{ headerShown: false }}
            component={Landing}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App
