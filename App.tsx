import React, { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import Header from "./components/header/Header";
import Bodys from "./components/body/Bodys";
import QRCode from "react-native-qrcode-svg";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState<boolean>(true);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const lightTheme = {
    background: "#fff",
    text: "#000",
    buttonBackground: "gray",
    buttonText: "#fff",
    borderColor: "#ccc",
  };

  const darkTheme = {
    background: "#333",
    text: "#fff",
    buttonBackground: "light",
    buttonText: "#fff",
    borderColor: "#666",
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <ExpoStatusBar style={isDarkTheme ? "light" : "dark"} />

      <Pressable
        style={[
          styles.themeButton,
          { backgroundColor: theme.buttonBackground },
        ]}
        onPress={() => setIsDarkTheme(!isDarkTheme)}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>
          Cambiar a {isDarkTheme ? "Tema Claro" : "Tema Oscuro"}
        </Text>
      </Pressable>

      <View style={styles.topContainer}>
        <Header setDisplayMyQR={setDisplayMyQR} theme={theme} />

        {displayMyQR ? (
          <View>
            <Bodys theme={theme} />
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
  },
  topContainer: {
    height: "15%",

    width: "100%",
  },
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "50%",
    width: "100%",
    height: "100%",
  },
  themeButton: {
    alignItems: "center",
    paddingVertical: 10,
    marginTop: 30,
  },
  buttonText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
});
