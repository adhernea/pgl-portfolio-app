import { Pressable, View, Text, StyleSheet } from "react-native";

const Header = ({ setDisplayMyQR }: any) => {
  return (
    <View>
      <Text style={styles.title}>My Portfolio App</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => setDisplayMyQR(true)}>
          <Text style={styles.buttonText}>Mi info</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => setDisplayMyQR(false)}>
          <Text style={styles.buttonText}>Mi QR</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  title: {
    backgroundColor: "gray",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    backgroundColor: "darkgray",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: {
    width: "50%",
    borderColor: "black",
    borderWidth: 1,
    borderStyle: "dashed",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
});