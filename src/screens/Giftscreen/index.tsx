import React, { useState, useRef } from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import QRCode from "react-native-qrcode-svg";
import ConfettiCannon from "react-native-confetti-cannon";

export default function Giftscreen() {
  const [qrValue, setQrValue] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const confettiRef = useRef(null);

  const generateQRCode = () => {
    setQrValue("https://github.com/alperenkucuktag");
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 100000); // Confetti animation duration
  };

  return (
    <View style={styles.container}>
      <Button
        title='/alperenkucuktag'
        color={"#FFD00C"}
        onPress={generateQRCode}
      />
      {qrValue ? (
        <View style={styles.qrContainer}>
          <QRCode value={qrValue} size={200} />
        </View>
      ) : null}
      {showConfetti && (
        <ConfettiCannon
          count={200}
          origin={{ x: -10, y: 0 }}
          fadeOut
          autoStart
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    backgroundColor: "#5C3EBC",
  },
  qrContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
