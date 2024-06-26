import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CustomButton } from '../components/CustomButton';

export function HomeScreen() {
    const navigation = useNavigation();
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.header}>Selamat Datang Pada Aplikasi Ini!</Text>
                <Text>Oleh:</Text>
                <Text>Dewa Putu Prasta Maha Gangga</Text>
                <Text>2402011896 (TZCA)</Text>
                <StatusBar style="auto" />
                <CustomButton
                    title="Data Diri"
                    onPress={() => navigation.navigate('Form Data Diri')}
                ></CustomButton>
                <CustomButton
                    title="Maps"
                    onPress={() => navigation.navigate('Maps')}
                ></CustomButton>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      marginBottom: 20,
    },
});