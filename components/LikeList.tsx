import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const LikesList = () => {
  const likes = [
    "Salir a pasear",
    "Senderismo",
    "Ir a la playita",
    "Domingos de misa",
    "La guitarrita",
    "El monte con lluvia",
    "Viajar",
    "Música variadita",
    "Anime",
    "Ducharme",
    "Videojuegos",
    "Ir de cena romántica",
  ];

  return (
    <ScrollView style={styles.scrollContainer}>
      {likes.map((like, index) => (
        <Text key={index} style={styles.likeText}>
          {like}
        </Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 10,
  },
  likeText: {
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    color: "darkred",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    backgroundColor: "silver",
    marginBottom: 10,
  },
});

export default LikesList;
