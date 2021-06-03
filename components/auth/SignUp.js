import React, { Component } from 'react';
import { View, TextInput, Button } from 'react-native'
import firebase from 'firebase'

class SignUp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            // name : "",
            firstName: '',
            lastName: '',
            age: '',
            gender: '',
            phone: '',
            email: '',
            password : ''
        }

        this.handleSignUp = this.handleSignUp.bind(this)
    }

    handleSignUp() {

        const { firstName, lastName, age, gender, phone, email, password } = this.state
        console.log(this.state);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection('Users').doc(firebase.auth().currentUser.uid).set({
                    firstName,
                    lastName,
                    age,
                    gender,
                    phone,
                    email
                })
            })
            .catch((err) => console.log(err))
    }

    render() {
        
        return (
            <View>
                
                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="first name"
                    onChangeText={(firstName) => this.setState({firstName})}
                />
                
                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="last name"
                    onChangeText={(lastName) => this.setState({lastName})}
                />

                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="age"
                    onChangeText={(age) => this.setState({age})}
                />

                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="gender"
                    onChangeText={(gender) => this.setState({gender})}
                />

                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="address"
                    onChangeText={(address) => this.setState({address})}
                />

                <TextInput
                    style={{marginVertical : 8, marginHorizontal : 10, paddingVertical: 12, paddingHorizontal: 5, backgroundColor: 'white'}}
                    placeholder="mobile number"
                    onChangeText={(phone) => this.setState({phone})}
                />
                
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
                        title="Sign Up"
                        onPress={this.handleSignUp}
                    />
                </View>

            </View>
        );
    }
}

export default SignUp;