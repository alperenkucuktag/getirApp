import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

export default function DetailProperty() {
  const [details, setDetails] = useState<string[]>([
    "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti",
    "İçindekiler",
    "Besin Değerleri",
    "Kullanım",
    "Ek bilgiler",
  ]);

  const TextComponent = ({
    detail,
    index,
  }: {
    detail: string;
    index: number;
  }) => {
    return (
      <View
        style={{
          paddingVertical: 12,
          borderBottomWidth: index === details.length - 1 ? 0 : 0.4,
          borderBottomColor: "lightgray",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            color: index === 0 ? "black" : "#4E4E4E",
            fontSize: index === 0 ? 10.5 : 13,
            fontWeight: index === 0 ? "400" : "500",
          }}
        >
          {detail}
        </Text>
        {index === 0 ? null : (
          <Feather name='chevron-down' size={24} color='#9f9f9f' />
        )}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingVertical: 8,
      }}
    >
      {details.map((item, index) => (
        <TextComponent key={index} index={index} detail={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
