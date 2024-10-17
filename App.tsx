import { useState } from "react";
import { View, StyleSheet } from "react-native";
import Header from "./components/header/Header";
import Bodys from "./components/body/Bodys";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Header setDisplayMyQR={setDisplayMyQR} /> 

        {displayMyQR ? (
          <View>
            <Bodys />
          </View>
        ) : (
          <View style={styles.qrContainer}>
            <QRCode value="https://github.com/The-Albertox" />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topContainer: {
    height: "15%",
    paddingTop: 50,
    width: "100%",
  },
  bodyContainer: {
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "50%",
    width: "100%",
    height: "100%",
  },
});