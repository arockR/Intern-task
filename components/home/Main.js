import React, { useState,  useEffect } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import Constants  from 'expo-constants'
import { Topbar } from '../Topbar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import firebase from 'firebase'


export const Main = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        firebase.firestore().collection('Cars').get().then(snapshot => {
            let car = snapshot.docs.map(item => item.data() )
            setCars(car)
            
        }).catch(er => {
            console.log(er);
        })
    }, [])



    if (cars.length == 0) {
        return (
            <View>
                <View style={styles.statusBar} />
                <Topbar />
                <View style={{flex: 1, marginTop: 100, alignItems:'center', justifyContent: 'center'}} >
                    <Text>Loading cars</Text>
                </View>
            </View>
            
        )
    }

    return (
        <View style = {{backgroundColor: 'white'}}>
            <View style={styles.statusBar} />
            
            <Topbar />

            <FlatList
                style={{ marginTop: 60}}
                numColumns={1}
                horizontal={false}
                data={cars}
                renderItem={({ item }) => (
                    <View style={styles.carsContainer}>
                        <Image source={{uri : item.imgUrl}} style= {styles.carImg} />
                        <Text style={styles.carName}>{ item.name }</Text>
                        
                        <View style={styles.carInfoContainer}>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='currency-inr' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.price }</Text>
                            </View>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='engine' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.engine }</Text>
                            </View>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='car-turbocharger' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.transmission }</Text>
                            </View>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='fire' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.bhp }</Text>
                            </View>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='gas-station' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.fuel }</Text>
                            </View>
                            <View style={styles.carInfo}>
                                <MaterialCommunityIcons name='seat-passenger' color='#084783' size={25} />
                                <Text style={styles.feature}>{ item.seat }</Text>
                            </View>
                            <View style={{margin: 10}}>
                                <Text style={{fontWeight: '600'}}>{ item.launch }</Text>
                            </View>

                        </View>
                        <View style={styles.line}></View>
                    </View>
                ) }
            />
        </View>
    )
}

// styles

const styles = StyleSheet.create({
    statusBar: {
        height: Constants.statusBarHeight,
        backgroundColor: '#084783'
    },
    line: {
        width: '90%',
        borderWidth: 0.3,
        borderColor:'grey'
    },
    carsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 60,
    },
    carImg: {
        height: 150,
        width: 250,
        resizeMode: 'contain'
    },
    carName: {
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: 15
    },
    carInfoContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 15
    },
    carInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        minWidth: '30%',
        maxWidth: '60%',
        margin: 15,
    },
    feature: {
        paddingLeft: 7
    }

})