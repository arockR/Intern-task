import React from 'react'
import { View, Button, Image, StyleSheet } from 'react-native'

export const Wrapper = ({navigation}) => {
    return (
            
        <View style={{flex : 1, justifyContent : 'flex-end', margin : 10}}>
            <View style={{marginBottom: 15}}>
                <Button
                    color='#084783'
                    title="Sign Up" 
                    onPress={() => navigation.navigate('Signup') }
                />
            </View>
            <View style={{marginBottom: 15}}>
                <Button
                    color='#084783'
                    title="Sign In" 
                    onPress={() => navigation.navigate('Signin') }
                />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    coverImg: {
        width: 250,
        height: 200,
        resizeMode: 'contain',
    }
})
