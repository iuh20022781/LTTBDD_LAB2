import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet, H1, Button } from 'react-native';


const GDXMEye = () => {
    return (
        <View style={styles.container}>
            <View style={styles.styles1}>
                <Image source={require('./img/Group1.svg')}
                    style={{
                        width: ' 112.188px',
                        height: '107.199px',
                        'flex-shrink': 0
                    }}  ></Image>

            </View>

            <View style={styles.styles2}>
                <TextInput placeholder='Please input user name' style={styles.input} placeholderTextColor={'rgba(196, 196, 196, 1)'} ></TextInput>
                <TextInput placeholder='Please input password ' style={styles.input} placeholderTextColor={'rgba(196, 196, 196, 1)'} ></TextInput>


                <Image
                    source={require('./img/Group 3.svg')}
                    style={[{
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                        position: 'absolute',
                        marginTop: 10,
                        marginRight: 280


                    }]}
                />


                <Image
                    source={require('./img/Group 5.svg')}
                    style={[{
                        width: 30,
                        height: 30,
                        flexShrink: 0,
                        position: 'absolute',
                        marginTop: 95,
                        marginRight: 280


                    }]}
                />


            </View>
            <View style={styles.styles3}>

                <TouchableOpacity style={styles.customButton}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>




                {/* <TouchableOpacity> <Text style={[styles.text, styles.customText1, { color: '#5D25FA' }]}></Text></TouchableOpacity> */}

                {/* <Text style={[styles.text, styles.customText1]}> Or login with</Text> */}



            </View>

            <View style={styles.styles4}>
                <Text style={[styles.text, styles.customText1]}> Register</Text>
                <Text style={[styles.text, styles.customText1]}> Forgot Password</Text>

            </View>

            <View style={styles.styles5}>


            <View style={styles.divider1}></View>
            <Text style={styles.dividerText}>Other Login Methods</Text>
              <View style={styles.divider}></View>



            </View>


            <View style={styles.styles6}>




                <TouchableOpacity style={{
                    width: '110px',
                    height: '45px',
                    flexShrink: 0,

                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Image
                        source={require('./img/Group 8.svg')}
                        style={[{
                            width: 74,
                            height: 74,
                            flexShrink: 0,
                            marginRight: 20

                        }]}
                    />
                    <Text ></Text>
                </TouchableOpacity>



                <TouchableOpacity style={{
                    width: '110px',
                    height: '45px',
                    flexShrink: 0,

                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <Image
                        source={require('./img/Group 9.svg')}
                        style={[{
                            width: 74,
                            height: 74,
                            flexShrink: 0,
                            marginRight: 20

                        }]}
                    />
                    <Text ></Text>
                </TouchableOpacity>

                <TouchableOpacity style={{
                    width: 74,
                    height: 74,
                    flexShrink: 0,
                    backgroundColor: 'rgba(37, 71, 155, 1)',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 10
                }}>

                    <Image
                        source={require('./img/icofacebook-1924510 1.svg')}
                        style={[{
                            width: 70,
                            height: 50,
                            flexShrink: 0,
                            marginRight: 30,

                        }]}
                    />
                    <Text ></Text>
                </TouchableOpacity>



            </View>
            <View style={styles.styles7}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    styles1: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    styles2: {
        flex: 5,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: '30px',



    },
    styles3: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

    },
    styles4: {
        flex: 3,
        marginTop: -35,
        marginHorizontal: -30,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },
    styles5: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
       marginBottom:50

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
        
        fontSize: 25,
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',
    },
    customText1: {
        color: '#000',
        textAlign: 'center',
        
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',

    },

    customText2: {
        color: '#FFF',
        textAlign: 'center',
        
        fontSize: 'px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 'normal',

    },

    customButton: {
        backgroundColor: 'rgba(56, 111, 252, 1)',
        width: '330px',
        height: '54px',
        flexShrink: 0,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 5,
        margin: 20,
        borderRadius: 10
    },
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        // 
        fontSize: '20px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        borderRadius: '2px'
    },
    input: {
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 2,

        width: '330px',
        height: '54px',
        marginBottom: 30,

        flexShrink: 0,
        paddingLeft: 55, // Thêm khoảng trắng bên trái

    },
    text: {
        marginBottom: 10
    },
    icon: {
        borderWidth: 1,
        borderColor: 'skyblue',

    },
    divider: {
        flex: 1,
        height: 1,
        right:19,
       
        backgroundColor: '#0E18F5',
        marginLeft: 15,  // Điều chỉnh khoảng cách từ đầu nút LOGIN
        marginRight: 15, // Điều chỉnh khoảng cách từ cuối nút LOGIN
    },
    divider1: {
        flex: 1,
        height: 1,
        left:19,
       
        backgroundColor: '#0E18F5',
        marginLeft: 15,  // Điều chỉnh khoảng cách từ đầu nút LOGIN
        marginRight: 15, // Điều chỉnh khoảng cách từ cuối nút LOGIN
    },
    dividerText: {
        marginHorizontal: 10,
        color: '#000',
        textAlign: 'center',
        
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal',
        margin: 0,  
        marginTop:-15,
    }
});
export default GDXMEye;