import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import { WebView } from "react-native-webview";

const CarpoolScreen = () => {
  return (
    <View style={{ backgroundColor: "#DEDCDC", height: "100vh" }}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={{ position: "absolute", top: 15, left: 15 }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require("./../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Carpool</Text>
      </View>
      <View style={{ height: "100vh", overflowY: "hidden" }}>
        <WebView
          style={{ backgroundColor: "red", width: "100%" }}
          source={{ uri: "https://www.google.com/maps/" }}
        />
        <View
          style={{
            position: "absolute",
            bottom: 0,
            height: 300,
            width: "100%",
            backgroundColor: "white",
            paddingVertical: 40,
            paddingHorizontal: 30,
          }}
        >
          <Text>From: </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(from) => setFrom(from)}
            />
          </View>
          <Text>To: </Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.TextInput}
              onChangeText={(from) => setFrom(from)}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  StatusBar: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 .8rem 1rem 0 rgba(0,0,0,.15)",
  },
  inputView: {
    marginTop: 10,
    backgroundColor: "#13BB9B",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,

    alignItems: "left",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    color: "white",
    marginLeft: 20,
  },
});

export default CarpoolScreen;
