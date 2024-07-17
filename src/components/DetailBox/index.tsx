import { StyleSheet, Text, View } from "react-native";
import React from "react";
type DetailBoxProps = {
  price: number;
  name: string;
  quantity: string;
};
export default function DetailBox({ price, name, quantity }: DetailBoxProps) {
  return (
    <View
      style={{ width: "100%", backgroundColor: "white", alignItems: "center" }}
    >
      <Text
        style={{
          color: "#5D3EBD",
          fontWeight: "bold",
          fontSize: 20,
          marginTop: 12,
        }}
      >
        <Text>{" \u20BA"}</Text>
        {price}
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "700", marginTop: 12 }}>
        {name}
      </Text>
      <Text
        style={{
          color: "#848897",
          fontWeight: "700",
          marginTop: 8,
          paddingBottom: 17,
        }}
      >
        {quantity}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
