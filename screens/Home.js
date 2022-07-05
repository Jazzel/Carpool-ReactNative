import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

const HomeScreen = () => {
  return (
    <View style={{ backgroundColor: "#DEDCDC" }}>
      <View style={styles.StatusBar}>
        <Text style={{ fontSize: 20, fontWeight: "700" }}>Carpool</Text>
      </View>
      <View style={{ paddingVertical: 40, paddingHorizontal: 30 }}>
        <View
          style={{
            display: "grid",

            gridTemplateColumns: "auto auto",
          }}
        >
          <TouchableOpacity style={styles.btn}>
            <Image
              style={styles.image}
              source={require("./../assets/car.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
          <TouchableOpacity style={styles.btn}></TouchableOpacity>
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
  btn: {
    height: 120,
    borderRadius: "10px",
    boxShadow: "0 .8rem 1rem 0 rgba(0,0,0,.15)",
    width: "90%",
    backgroundColor: "white",
    marginVertical: 10,
  },
});

export default HomeScreen;
