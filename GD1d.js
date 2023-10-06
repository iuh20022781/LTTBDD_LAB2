import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, H1, Button } from 'react-native';


const GD1d = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styles1}>
                <Text style={styles.customText}>LOGIN</Text>
            </View>
            <View style={styles.styles2}>
                <TextInput placeholder='Email' style={styles.input}></TextInput>
                <TextInput placeholder='Password ' style={styles.input}></TextInput>
                <Image
                        source={require('./img/eye 1.svg')}
                        style={[{
                            width: 30,
                            height: 30,
                            flexShrink: 0,
                            position:'absolute',
                            marginTop:83,
                            marginLeft:250
                        }]}
                    />
            </View>

            <View style={styles.styles3}>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={[styles.text, styles.customText1]}> When you agree to  term and conditions</Text>
                <TouchableOpacity> <Text style={[styles.text, styles.customText1, { color: '#5D25FA' }]}>For got your password?</Text></TouchableOpacity>
                <Text style={[styles.text, styles.customText1]}> Or login with</Text>
            </View>

            <View style={styles.styles4}>
            </View>

            <View style={styles.styles5}>
                <TouchableOpacity style={{
                    width: '110px',
                    height: '45px',
                    flexShrink: 0,
                    backgroundColor: 'rgba(37, 71, 155, 1)',
                    justifyContent: 'center', 
                    alignItems: 'center',
                }}>
                    <Image
                        source={require('./img/icofacebook-1924510 1.svg')}
                        style={[{
                            width: 30,
                            height: 30,
                            flexShrink: 0,
                            marginRight:20
                        }]}
                    />
                    <Text ></Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.customText2, {
                    width: '110px',
                    height: 45,
                    flexShrink: 0,
                    backgroundColor: 'rgba(65, 160, 215, 1)'
                }]}>
                </TouchableOpacity>

                <Text style={{
                    position: 'absolute',
                    fontSize: '35px',
                    fontWeight: 'bold',
                    color: '#FFF',
                }}>Z</Text>

                <TouchableOpacity style={[styles.icon, {
                    width: 110,
                    height: 45,
                    flexShrink: 0,
                    justifyContent: 'center', 
                    alignItems: 'center',
                }]} >
                    <Image
                        source={require('./img/Group.svg')}
                        style={{
                            width: 35,
                            height: 35,
                            flexShrink: 0,
                        }}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.styles6}>
            </View>

            <View style={styles.styles7}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
    },

    styles1: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    styles2: {
        flex: 5,
        alignItems: 'center',
        marginTop: '30px'
    },

    styles3: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    styles4: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },

    styles5: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
    },

    styles6: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    styles7: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },

    customText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    customText1: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
    },

    customText2: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 'px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    customButton: {
        backgroundColor: '#E53935',
        width: '330px',
        height: '54px',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 20,
    },

    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        borderRadius: '2px'
    },

    input: {
        width: '330px',
        height: '45px',
        marginBottom: 30,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        flexShrink: 0,
        paddingLeft: 10,
    },

    text: {
        marginBottom: 10
    },

    icon: {
        borderWidth: 1,
        borderColor: 'skyblue',
    }
});
export default GD1d;
