import React from 'react';
import {StyleSheet,View,Text,Image,Pressable,TextInput} from "react-native";
  
  const GD2b = () => {
    return (
      <View style={styles.container}>
        <View style={styles.styles1}>
          <Image
            source={require("./img/usb.png")}
            style={styles.imgView1}
          ></Image>
          <Text style={styles.textView1}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>

        <View style={styles.styles2}>
          <Text style={styles.textView2}>Cực kỳ hài lòng</Text>
        </View>

        <View style={styles.styles3}>
          <Image
            source={require("./img/star.png")}
            style={styles.star}
          ></Image>

          <Image
            source={require("./img/star.png")}
            style={styles.star}
          ></Image>

          <Image
            source={require("./img/star.png")}
            style={styles.star}
          ></Image>

          <Image
            source={require("./img/star.png")}
            style={styles.star}
          ></Image>

          <Image
            source={require("./img/star.png")}
            style={styles.star}
          ></Image>
        </View>

        <View style={styles.styles4}>
          <Pressable style={styles.viewAddImage}>
            <Image
              source={require("./img/camera.png")}
              style={styles.camera}
            ></Image>

            <Text style={styles.textBtnAddImage}>Thêm hình ảnh</Text>
          </Pressable>

          <View style={styles.textArea}>
            <TextInput
              placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
              style={{ flex: 1}}
            ></TextInput>

            <Pressable>
              <Text>https://meet.google.com/nsj-ojwi-xpp</Text>
            </Pressable>

          </View>
        </View>
        
        <View style={styles.styles5}>
          <Pressable style={styles.btn}>
            <Text style={styles.textBtn}>Gửi</Text>
          </Pressable>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  
    styles1: {
      flex: 2,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
  
    imgView1: {
      width: 95,
      height: 95,
      marginHorizontal: 10,
    },
  
    textView1: {
      fontFamily: "Roboto",
      fontSize: 16,
      fontWeight: "700",
      lineHeight: 19,
      letterSpacing: 0,
    },
  
    styles2: {
      flex: 1,
      justifyContent: "flex-end",
      alignItems: "center",
    },
  
    textView2: {
      fontFamily: "Roboto",
      fontSize: 18,
      fontWeight: "700",
      lineHeight: 21,
      letterSpacing: 0,
    },
  
    styles3: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  
    star: {
      width: 40,
      height: 40,
      marginHorizontal: 5,
    },
  
    styles4: {
      flex: 6,
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  
    viewAddImage: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      border: "1px solid #1511EB",
      width: 293,
      height: 68,
      borderRadius: 5,
      backgroundImage:
        "linear-gradient(0deg, rgba(196, 196, 196, 0), rgba(196, 196, 196, 0))",
      border: "1px solid #1511EB",
    },
  
    camera: {
      width: 40,
      height: 33,
      marginHorizontal: 10,
    },
  
    textBtnAddImage: {
      fontFamily: "Roboto",
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 21,
      letterSpacing: 0,
    },
  
    textArea: {
      width: 293,
      height: 222,
      borderRadius: 5,
      backgroundImage:
        "linear-gradient(0deg, rgba(196, 196, 196, 0), rgba(196, 196, 196, 0))",
      border: "1px solid #C4C4C4",
    },
  
    styles5: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
    },
  
    btn: {
      width: 289,
      height: 41,
      borderRadius: 5,
      backgroundImage:
        "linear-gradient(0deg, #0D5DB6, #0D5DB6), linear-gradient(0deg, #1511EB, #1511EB)",
      border: "1px solid #1511EB",
      justifyContent: "center",
      alignItems: "center",
    },
  
    textBtn: {
      fontFamily: "Roboto",
      fontSize: 20,
      fontWeight: "700",
      lineHeight: 23,
      letterSpacing: 0,
      color: "#FFFFFF",
    },
  });
export default GD2b;