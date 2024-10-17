import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const Bodys = ({ theme }: any) => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Image
          style={styles.avatar}
          source={require("../../assets/authors.jpg")}
        />
        <View
          style={[
            styles.descriptionContainer,
            { backgroundColor: theme.buttonBackground },
          ]}
        >
          <Text style={[styles.descriptionTitle, { color: theme.text }]}>
            Descripción sobre mí!
          </Text>
          <Text style={[styles.descriptionDescription, { color: theme.text }]}>
            Soy un alumno y me gusta estudiar(no es verdad) y en mi tiempo libre
            me gusta jugar videojuegos, y romper el código de maneras que ni yo
            sé cómo.
          </Text>
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: theme.text }]}>
        Cosas que me gustan mucho:
      </Text>

      <ScrollView
        style={[styles.scrollView, { backgroundColor: theme.background }]}
      >
        {[
          "Salir con mi pareja",
          "Ir a la playa",
          "Escuchar música",
          "Leer manga",
          "Jugar videojuegos",
          "Ir de cenar romántica",
          "romper el código",
        ].map((item, index) => (
          <Text
            key={index}
            style={[
              styles.interestsText,
              { color: theme.text, borderColor: theme.borderColor },
            ]}
          >
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
    padding: 10,
    borderRadius: 10,
    width: "70%",
    marginTop: 25,
  },
  descriptionTitle: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
  },
  descriptionDescription: {
    textAlign: "center",
  },
  sectionTitle: {
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
    borderWidth: 1,
    borderStyle: "dashed",
    padding: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 10,
  },
});
