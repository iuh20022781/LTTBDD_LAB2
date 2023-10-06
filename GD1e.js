import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, H1, Button,RadioButton } from 'react-native';


const GD1e = () => {
    const [selectRadio,setSelectRadio] = useState(1)
    return (
        <View style={styles.container}>
            <View style={styles.styles1}>
                <Text style={styles.customText}  >REGISTER</Text>
            </View>

            <View style={styles.styles2}>
                <TextInput placeholder='    Name' style={styles.input}></TextInput>
                <TextInput placeholder='    Phone ' style={styles.input}></TextInput>
                <TextInput placeholder='    Email' style={styles.input}></TextInput>
                <TextInput placeholder='    Password ' style={styles.input}></TextInput>
                <TextInput placeholder='    Birthday' style={styles.input}></TextInput>
                <Image
                        source={require('./img/eye 1.svg')}
                        style={[{
                            width: 30,
                            height: 30,
                            flexShrink: 0,
                            position:'absolute',
                            marginTop:235,
                            marginLeft:250
                        }]}
                    />
                
            </View>
            <View style={styles.styles3}>
            <TouchableOpacity style={{right:60}} onPress={()=>setSelectRadio(1)}>
                <View style={styles.wrapper}>
                    <Text style={styles.radio}>
                    {selectRadio ==1 ?  <View style={styles.radioBg}></View>:null}      
                    </Text>
                    <Text style={styles.customText1} >Male</Text>
                </View>

            </TouchableOpacity>
            <TouchableOpacity style={{right:40}}   onPress={()=>setSelectRadio(2)}>
                <View style={styles.wrapper}>
                    <Text style={styles.radio}>
                    {selectRadio ==2 ?  <View style={styles.radioBg}></View>:null}
                    </Text>
                    <Text style={styles.customText1} >Gender</Text>
                </View>

            </TouchableOpacity>

            </View>
            <View style={styles.styles6}>
            
            <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>REGISTER</Text>   
                </TouchableOpacity>
                <Text style={[styles.text, styles.customText1]}> When you agree to  term and conditions</Text>
            </View>

            <View style={styles.styles7}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(47, 180, 72, 0.19)',
    },

    styles1: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    styles2: {
        flex: 6,
        alignItems: 'center',
        marginTop: '30px'
    },

    styles3: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    styles4: {
        flex: 3,
        alignItems: 'center',
        flexDirection: 'row',
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
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
    },

    styles7: {
        flex: 2,
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
        height: '45px',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 2,
        margin: 20,
    },

    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        borderRadius: '2px',
        fontWeight:'bold'
    },

    input: {
        width: '330px',
        height: '45px',
        marginBottom: 30,
        backgroundColor: 'rgba(196, 196, 196, 0.30)',
        flexShrink: 0
    },

    text: {
        marginBottom: 10
    },

    icon: {
        borderWidth: 1,
        borderColor: 'skyblue',
    },

    radio:{
        width:25,
        height:25,
        borderColor:'black',
        borderRadius:20,
        borderWidth:3,
        margin:20,
    },

    wrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
    
    radioBg:{
        backgroundColor:'black',
        height:15,
        width:15,
        margin:2,
        borderRadius:20
    }
});
export default GD1e;
