import React, { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./../assets/logo.png")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: 40,
  },
});

export default SplashScreen;
