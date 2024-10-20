import { useState } from "react";
import Header from "./components/Header";
import ProfileInfo from "./components/ProfileInfo";
import LikesList from "./components/LikeList";
import QRCodeDisplay from "./components/QRCodeDisplay";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const [displayMyQR, setDisplayMyQR] = useState(true);
  return (
    <View style={styles.container}>
      <Header displayMyQR={displayMyQR} setDisplayMyQR={setDisplayMyQR} />
      {displayMyQR ? (
        <View style={styles.body}>
          <ProfileInfo />
          <LikesList />
        </View>
      ) : (
        <QRCodeDisplay url={"https://github.com/CamiloP4ez"} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
