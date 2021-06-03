import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { Wrapper } from './components/auth/Wrapper';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import {Main} from './components/home/Main';

// firebase credentials
const firebaseConfig = {
  apiKey: "AIzaSyACqrt4nL_ACqc-RUR6USLCU2LvUfTEzZc",
  authDomain: "assignment-ee977.firebaseapp.com",
  databaseURL: "https://assignment-ee977-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "assignment-ee977",
  storageBucket: "assignment-ee977.appspot.com",
  messagingSenderId: "992684393623",
  appId: "1:992684393623:web:df8b46c65151a291dd95d2",
  measurementId: "G-G6BVR8LSPM"
}

// checking and initializing firebase app
if (firebase.default.apps.length === 0) {
  firebase.default.initializeApp(firebaseConfig)
}

// creating stack navigator
const Stack = createStackNavigator()

class App extends Component {

  constructor(props) {
    super(props)
    
    this.state = {
      loaded : false,
      loggedIn : false
    }

  }

  componentDidMount() {
    firebase.default.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loaded: true,
          loggedIn : false
        })
      }
      else {
        this.setState({
          loaded: true,
          loggedIn : true
        })  
      }
    })
  }

  render() {

    if (!this.state.loaded) {
      return (
        <View style={{flex:1, alignItems:'center', justifyContent: 'center'}} >
          <Text>please wait for a moment</Text>
        </View>
      )
    }

    if (!this.state.loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName={Wrapper}>
            <Stack.Screen name="Wrapper" component={Wrapper} options={ {headerShown : false} }/>
            <Stack.Screen name="Signin" component={SignIn} />
            <Stack.Screen name="Signup" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Main}>
         <Stack.Screen name="Main" component={Main} options={ {headerShown : false} }/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App
