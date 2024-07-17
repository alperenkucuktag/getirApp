import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Category } from "../../models";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

type CategoryItemProps = {
  item: Category;
};

export default function CategoryItem({ item }: CategoryItemProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Back", { category: item })}
      style={{
        width: width * 0.25,
        height: width * 0.24,
        marginTop: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Image
        style={{ width: width * 0.18, height: width * 0.18, borderRadius: 8 }}
        source={{
          uri: item.src,
        }}
      />
      <Text style={{ fontSize: 12, color: "#616161", fontWeight: "500" }}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});
