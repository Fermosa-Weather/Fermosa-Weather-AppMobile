import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Footer</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 800, // Altura del pie de página
        with: 1000,
        backgroundColor: '#ccc', // Color de fondo del pie de página
        justifyContent: 'center',
        alignItems: 'center',
        margin:70
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
});

export default Footer;
