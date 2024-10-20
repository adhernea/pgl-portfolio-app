import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProfileInfo = () => {
  return (
    <View style={styles.profileContainer}>
      <Image style={styles.avatar} source={require("../assets/camilo.jpg")} />
      <View style={styles.descriptionContainer}>
        <Text style={styles.title}>Descripción sobre mí!</Text>
        <Text>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: "lightgray",
    padding: 10,
    borderRadius: 10,
    width: "70%",
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default ProfileInfo;
