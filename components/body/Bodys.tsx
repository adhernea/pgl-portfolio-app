import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Bodys = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/SofyanAmrabat.jpg")}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text>
            Soy profe y me gusta mi trabajo aunque a veces me dé por enrevesar
            prácticas para mis queridos alumnos
          </Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
      <ScrollView style={styles.scrollView}>
        {[
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
          "Ir de cenar romántica",
        ].map((item, index) => (
          <Text key={index} style={styles.interestsText}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
};

export default Bodys;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
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
    marginTop: 50,
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  sectionTitle: {
    color: "black",
    fontWeight: "900",
    textTransform: "capitalize",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  scrollView: {
    padding: 10,
  },
  interestsText: {
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
