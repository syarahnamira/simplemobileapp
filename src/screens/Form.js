import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useUser } from '../contexts/User';

export function FormDataDiriScreen({ navigation }) {
    const [nama, setNama] = useState('');
    const [hobi, setHobi] = useState('');
    const { saveUserData } = useUser();

    const submitData = () => {
        saveUserData({ nama, hobi });
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text>Masukkan Nama Anda:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setNama}
                value={nama}
                placeholder="Nama"
            />
            <Text>Masukkan Hobi Anda:</Text>
            <TextInput
                style={styles.input}
                onChangeText={setHobi}
                value={hobi}
                placeholder="Hobi"
            />
            <Button
                title="Submit"
                onPress={submitData}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});