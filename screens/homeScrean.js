import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <Text>
      {/* <div>Home</div> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Header')}
      >
        <Text style={styles.buttonText}>Header</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Footer')}
      >
        <Text style={styles.buttonText}>Footer</Text>
      </TouchableOpacity>
      
    </Text>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default HomeScreen;
