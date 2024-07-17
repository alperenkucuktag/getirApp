import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("window");

const TypeBox = ({
  setCat,
  item,
  active,
}: {
  setCat: any;
  item: string;
  active: string;
}) => {
  return (
    <TouchableOpacity
      onPress={() => setCat(item)}
      style={[
        {
          flexDirection: "row",
          paddingHorizontal: 13,
          height: height * 0.044,
          marginRight: 12,
          alignItems: "center",
          borderRadius: 6,
        },
        item == active
          ? { backgroundColor: "#7849F7" }
          : { borderColor: "#F0EFF7", borderWidth: 1.3 },
      ]}
    >
      <Text
        style={[
          { fontSize: 12, color: "#7849F7", fontWeight: "600" },
          item == active && { color: "white" },
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
  );
};

export default function TypeFiltering() {
  const [category, setCategory] = useState<String>("Birlikte iyi Gider");
  return (
    <ScrollView
      style={{
        width: "100%",
        flexDirection: "row",
        height: height * 0.072,
        paddingVertical: height * 0.014,
        backgroundColor: "white",
        paddingHorizontal: 12,
        borderBottomColor: "lightgrey",

        borderBottomWidth: 1,
      }}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
    >
      {["Birlikte iyi Gider", "Çubuk", "Külah", "Çoklu", "Bar"].map(
        (item, index) => (
          <TypeBox
            setCat={setCategory}
            key={index}
            item={item}
            active={category}
          />
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
