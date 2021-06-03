import React, { Component } from 'react';
import { View, TextInput, Button, TouchableHighlightBase } from 'react-native'
import firebase from 'firebase'

class SignIn extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }

        this.handleSignIn = this.handleSignIn.bind(this)
    }

    handleSignIn() {

        const { email, password } = this.state

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then((result) => {
                console.log('user logged in',result);
            })
            .catch((err) => console.log(err))
    }

    render() {
        
        return (
            <View>
                
                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="email"
                    onChangeText={(email) => this.setState({email})}
                />
                
                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="password"
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />

                <View style={{marginHorizontal : 10, marginVertical : 15}}>
                    <Button
                        color='#084783'
                        title="Sign In"
                        onPress={this.handleSignIn}
                    />
                </View>

            </View>
        );
    }
}

export default SignIn;