import { View, Text } from "react-native";
import {StyleSheet, TextInput, Image, TouchableOpacity } from "react-native-web";

const GD2c = () => {
  return (
    <View style={styles.container}>
      <View style={styles.styles1}>
        <View style={styles.styles1_1}>
          <Text style={styles.textPassword}> PASSWORD{"\n"}GENERATOR</Text>
        </View>

        <View style={styles.styles1_2}>
          <TextInput></TextInput>
        </View>

        <View style={styles.styles1_3}>
          <Text style={styles.text2}>Password length</Text>
          <TextInput style={styles.input1}></TextInput>
        </View>

        <View style={styles.styles1_4}>
          <Text style={styles.text3}>Include lower case letters</Text>
          <Image style={styles.imageTick} source={require("./img/tick.png")} />
        </View>

        <View style={styles.styles1_4}>
          <Text style={styles.text3}>Include upcase letters</Text>
          <TextInput style={styles.input2}></TextInput>
        </View>

        <View style={styles.styles1_4}>
          <Text style={styles.text3}>Include number</Text>
          <Image style={styles.imageTick} source={require("./img/tick.png")} />
        </View>

        <View style={styles.styles1_4}>
          <Text style={styles.text3}>Include special letters</Text>
          <TextInput style={styles.input2}></TextInput>
        </View>

        <View style={styles.styles1_5}>
          <TouchableOpacity>
            <Text style={styles.text4}>GENERATE PASSWORD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 360,
      height: 640,
      backgroundImage:
        "radial-gradient(145% 145% at 50% 50%, #3B3B98 26.56%, rgba(196, 196, 196, 0.00) 87.36%)",
    },

    styles1: {
      width: 322,
      height: 605,
      backgroundColor: "#23235B",
      margin: 20,
      marginLeft: 35,
      flex: 1,
      borderRadius: 15,
    },

    styles1_1: {
      textAlign: "center",
      justifyContent: "center",
      marginLeft: 61,
      marginTop: 40,
    },

    styles1_2: {
      width: 297,
      height: 55,
      backgroundColor: "#151537",
      marginLeft: 13,
      marginTop: 33,
    },

    styles1_3: {
      marginTop: 20,
      flexDirection: "row",
    },

    input1: {
      position: "absolute",
      backgroundColor: "#FFF",
      color: "black",
      width: 118,
      height: 33,
      marginLeft: 190,
    },

    input2: {
      backgroundColor: "#FFF",
      width: 25,
      height: 25,
      marginLeft: 15,
    },

    styles1_4: {
      flexDirection: "row",
      marginTop: 35,
    },

    imageTick: {
      position: "absolute",
      width: 25,
      height: 25,
      marginLeft: 280,
    },

    textPassword: {
      color: "#FFF",
      fontSize: 25,
      fontWeight: 700,
    },

    text2: {
      width: 223,
      color: "#FFF",
      fontSize: 20,
      fontWeight: 700,
      marginLeft: 19,
    },

    text3: {
      width: 247,
      color: "#FFF",
      fontSize: 20,
      fontWeight: 700,
      marginLeft: 19,
    },

    styles1_5: {
      width: 269,
      height: 55,
      backgroundColor: "#3B3B98",
      justifyContent: "center",
      alignItems: "center",
      marginTop: 35,
      marginLeft: 26,
    },

    text4: {
      color: "#FFF",
      fontSize: 18,
      fontWeight: 700,
    },
    
  });
export default GD2c;