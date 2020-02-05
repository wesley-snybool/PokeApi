import React from 'react'
import { View, StyleSheet, Text } from  'react-native'


 function PokeScreen({ navigation }) {

    const poke_name = navigation.getParam('poke_name')

    return (
        <View style={styles.container}>
            <Text>{poke_name}</Text>
        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PokeScreen;