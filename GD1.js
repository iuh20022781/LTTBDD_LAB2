import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

const GD1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styles1}>
            </View>
            <View style={styles.styles2}>
                <Image source={require('./img/Ellipse 8.png')}
                    style={{
                        width: ' 140px',
                        height: '140px',
                        flexShrinks: 0
                    }}  ></Image>
            </View>

            <View style={styles.styles3}>
                <Text style={styles.customText} >GROW {'\n'}  YOUR BUSINESS</Text>
            </View>

            <View style={styles.styles4}>
                <Text style={styles.customText1} >We will help you to grow your business using {'\n'} online server</Text>
            </View>

            <View style={styles.styles5}>
                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, rgba(0, 204, 249, 1) 0%, #00CCF9 100%)',
    },

    styles1: {
        flex: 1
    },

    styles2: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },

    styles3: {
        flex: 1,
        alignItems: 'center'
    },

    styles4: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    styles5: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:30
    },

    customText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    customText1: {
        color: '#000',
        textAlign: 'center',
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    }, 

    customButton: {
        backgroundColor: '#E3C000',
        width: '100px',
        height: '40px',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
       borderRadius:10
    }
});
export default GD1;