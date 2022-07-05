import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#DEDCDC", height: "100vh" }}>
      <View style={styles.StatusBar}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ position: "absolute", top: 15, right: 15 }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require("./../assets/logout.png")}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Dashboard</Text>
      </View>
      <View style={{ paddingVertical: 40, paddingHorizontal: 30 }}>
        <View style={{}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("Carpool")}
          >
            <Image
              style={styles.image}
              source={require("./../assets/car.png")}
            />
            <Text style={styles.btnText}> Carpool</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate("BookRide")}
          >
            <Image
              style={styles.image}
              source={require("./../assets/booking.png")}
            />
            <Text style={styles.btnText}> Book a ride</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: 120,
  },
  StatusBar: {
    height: 50,
    width: "100%",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 .8rem 1rem 0 rgba(0,0,0,.15)",
  },
  btn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: 200,
    borderRadius: "10px",
    boxShadow: "0 .8rem 1rem 0 rgba(0,0,0,.15)",
    width: "100%",
    backgroundColor: "white",
    marginVertical: 10,
  },
  btnText: {
    fontSize: 20,
    fontWeight: 600,
    textTransform: "uppercase",
  },
});

export default HomeScreen;
