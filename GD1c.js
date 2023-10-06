import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet } from 'react-native';

const GD1c = () =>  {
    return (
        <View style={styles.container}>
            <View style={styles.styles1}></View>
            <View style={styles.styles2}>
                <Text style={styles.textH1}>CODE</Text>
            </View>
            <View style={styles.styles3}>
                <Text style={styles.customText}>VERIFICATION</Text>
            </View>
            <View style={styles.styles4}>
                <Text style={styles.customText1}>
                    Enter ontime password sent on{'\n'}++849092605798
                </Text>
            </View>

            <View style={styles.styles5}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
            </View>

            <View style={styles.styles6}>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>VERY CODE</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.styles7}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
    },

    styles1: {
        flex: 1,
    },

    styles2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },

    styles3: {
        flex: 1,
        alignItems: 'center',
    },

    styles4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    styles5: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    styles6: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    customText1: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        width: 302,
        height: 53,
    },

    customButton: {
        backgroundColor: 'rgba(227, 192, 0, 1)',
        color: 'black', // Màu chữ đen
        width: '339px',
        height: '50px',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 20,
    },

    buttonText: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 50, 
        height: 50
    },

    textH1: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: '60px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }

});
export default GD1c;

