import React from "react";
import { View, StyleSheet } from "react-native";
import QRCode from "react-native-qrcode-svg";

type QRCodeDisplayProps = {
  url: string;
};

const QRCodeDisplay = (props: QRCodeDisplayProps) => {
  return (
    <View style={styles.qrContainer}>
      <QRCode value={props.url} />
    </View>
  );
};

const styles = StyleSheet.create({
  qrContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});

export default QRCodeDisplay;
