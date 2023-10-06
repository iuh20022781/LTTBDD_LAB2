import React from 'react';
import { View, TouchableOpacity, Text, Image, TextInput, StyleSheet } from 'react-native';

const GD1b = () =>  {
  return (
    <View style={styles.container}>
      <View style={styles.styles1}></View>
      <View style={styles.styles2}>
        <Image
          source={require('./img/lock-152879 1.svg')}
          style={{
            width: 105,
            height: 117,
            flexShrink: 0
          }}
        />
      </View>
      <View style={styles.styles3}>
        <Text style={styles.customText}>FORGET{'\n'}PASSWORD</Text>
      </View>
      <View style={styles.styles4}>
        <Text style={styles.customText1}>
          Provide your account’s email for which you{'\n'}want to reset your password
        </Text>
      </View>

      <View style={styles.styles5}>
        <Image
          source={require('./img/mail-2935365 1.svg')}
          style={{
            width: 48,
            height: 45,
            flexShrink: 0
          
          }}
        />
        <TextInput placeholder={'Email'} style={styles.input}></TextInput>
      </View>


      <View style={styles.styles6}>
        <TouchableOpacity style={styles.customButton}>
          <Text style={styles.buttonText}>NEXT</Text>
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
    justifyContent: 'center',
    flexDirection: 'row',
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
    width: 302,
    height: 53,
  },

  customButton: {
    backgroundColor: 'rgba(227, 192, 0, 1)',
    color: 'black', // Màu chữ đen
    width: '305px',
    height: '45px',
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
    backgroundColor: '#C4C4C4',
    width: 258,
    height: 45,
    flexShrink: 0,
  },
});
export default GD1b;
