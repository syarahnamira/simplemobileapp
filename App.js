// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider, useUser } from './src/contexts/User';
import { HomeScreen } from './src/screens/Home';
import { FormDataDiriScreen } from './src/screens/Form';
import { Maps } from './src/screens/Maps';

const Stack = createNativeStackNavigator();

const CustomHeader = () => {
  const { user } = useUser();
  return (
      <View style={{ marginRight: 15 }}>
          <Text>{user.nama}</Text>
      </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen 
              name="Home" 
              component={HomeScreen}
              options={{
                headerRight: () => <CustomHeader />,
                title: 'Home',
              }}
            />
            <Stack.Screen 
              name="Form Data Diri" 
              component={FormDataDiriScreen} 
              options={{
                headerRight: () => <CustomHeader />,
                title: 'Form Data Diri',
              }}
            />
            <Stack.Screen
              name="Maps" 
              component={Maps}
              options={{
                headerRight: () => <CustomHeader />,
                title: 'Maps',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </UserProvider>
    </SafeAreaProvider>
  );
}