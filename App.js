import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback } from 'react-native';
import { store } from './store';
import LoginScreen from './screens/LoginScreen';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import CreateList from './screens/CreateList';
import DeleteScreen from './screens/DeleteScreen';
import TaskScreen from './screens/TaskScreen';
import EditScreen from './screens/EditScreen';
import CreateTask from './screens/CreateTask';
import axios from 'axios';
import MessageScreen from './screens/MessageScreen';
import ProfileScreen from './screens/ProfileScreen';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Dashboard" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Task" component={TaskScreen} options={{ headerShown: false }} />
            <Stack.Screen name="CreateList" component={CreateList} options={{ headerShown: false }} />
            <Stack.Screen name="CreateTask" component={CreateTask} options={{ headerShown: false }} />
            <Stack.Screen name="Edit" component={EditScreen} options={{ headerShown: false }} />
            <Stack.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                presentation: 'transparentModal',
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="Message"
              component={MessageScreen}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                presentation: 'transparentModal',
                cardOverlayEnabled: true,
              }}
            />
            <Stack.Screen
              name="Delete"
              component={DeleteScreen}
              options={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                presentation: 'transparentModal',
                cardOverlayEnabled: true,
              }}
            />
          </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}
