import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

const GD1a = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styles1}>
            </View>
            <View style={styles.styles2}>
                <Image source={require('./img/Ellipse 1.svg')}
                    style={{
                        width: ' 142px',
                        height: '142px',
                        'stroke-width': '15px'
                    }}  ></Image>
            </View>

            <View style={styles.styles3}>
                <Text style={styles.customText} >GROW {'\n'}  YOUR BUSINESS</Text>
            </View>

            <View style={styles.styles4}>
                <Text style={styles.customText1} >We will help you to grow your business using {'\n'} online server</Text>
            </View>

            <View style={styles.styles5}>
                <Text style={styles.customButton}  > LOGIN</Text>
                <Text style={styles.customButton} > SIGN IN</Text>
            </View>

            <View style={styles.styles6}>
                <Text style={styles.customText3}  >HOW WE WORK?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage: 'linear-gradient(180deg, #C7F4F6 0.03%, #D1F4F6 30.21%, #E5F4F5 85.42%, #00CCF9 100%)',
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
    },

    styles6: {
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
        fontSize: 15,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },

    customText3: {
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 18,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
        top: '-20px',
        width: '302px',
        height: '53px',
        'flex-shrink': ' 0'
    },
    
    customButton: {
        borderRadius: 5,
        backgroundColor: '#E3C000',
        padding: 10
    }
});
export default GD1a;
