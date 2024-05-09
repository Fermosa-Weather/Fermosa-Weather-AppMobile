import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 800, // Altura del encabezado
        backgroundColor: '#ccc', // Color de fondo del encabezado
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

export default Header;
