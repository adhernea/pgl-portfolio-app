import React from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";

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
          <Image
            source={{
              uri: "https://th.bing.com/th/id/OIP.VFcLLNaupqVhXkp7qsfDhwAAAA?rs=1&pid=ImgDetMain",
            }}
            style={styles.image}
          />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
  },
});

export default LikesList;
