import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { initializeSDK, processPayment } from '../services/getStore';

export const Home: React.FC = () => {
    useEffect(() => {
        initializeSDK()
            .then((message) => Alert.alert('Sucesso', message))
            .catch((error) => Alert.alert('Erro', error.message));
    }, []);

    const handlePayment = async () => {
        try {
            const result = await processPayment('100.00');
            Alert.alert('Pagamento', result);
        } catch (error) {
            Alert.alert('Erro no pagamento', error.message);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ActivePay</Text>
            <Button title="Processar Pagamento" onPress={handlePayment} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
}) 