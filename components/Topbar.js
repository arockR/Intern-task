import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from 'firebase'

export const Topbar = () => {

    return (
        <View style={styles.topBar}>
            <Text style={{color:'white', fontSize:20}}>Cars Park</Text>
            <MaterialCommunityIcons
                name='logout' style={{ fontWeight: 600 }}
                size={20}
                onPress = { () => firebase.auth().signOut() }  />
        </View>
    )
}

const styles = StyleSheet.create({
    topBar: {
        alignSelf: 'stretch',
        height: 90,
        flexDirection: 'row',
        backgroundColor: '#084783',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        marginTop: 10,
        zIndex: 100
    }
})
