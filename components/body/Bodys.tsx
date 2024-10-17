import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Bodys = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/authors.jpg")}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>Descripción sobre mí!</Text>
          <Text>
            Soy un alumno y me gusta estudiar(no es verdad) y en mi tiempo libre
            me gusta jugar videojuegos, y romper el codigo de maneras que ni yo
            se como
          </Text>
        </View>
      </View>
      <Text style={styles.sectionTitle}>Cosas que me gustan mucho:</Text>
      <ScrollView style={styles.scrollView}>
        {[
          "Salir con mi pareja",
          "Ir a la playa",
          "Domingos de misa",
          "Escuchar música",
          "Manga",
          "Videojuegos",
          "Ir de cenar romántica",
          "romper el codigo",
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
