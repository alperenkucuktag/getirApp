import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import categoriesGetir from "../../../assets/categoriesGetir";
import { Category } from "../../models";

const { width, height } = Dimensions.get("window");

const CategoryBox = ({
  item,
  active,
  onPress,
}: {
  item: Category;
  active: Category;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.categoryBox,
          item.name == active.name && styles.activeCategoryBox,
        ]}
      >
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default function CategoryFiltering({
  category,
}: {
  category: Category;
}) {
  const [categories, setCategories] = useState<Category[]>(categoriesGetir);
  const [activeCategory, setActiveCategory] = useState<Category>(category);

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}
        showsHorizontalScrollIndicator={false}
        bounces={true}
        horizontal={true}
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.id}
            item={item}
            active={activeCategory}
            onPress={() => setActiveCategory(item)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#7849F7",
    height: height * 0.075,
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    width: "100%",
  },
  scrollViewContent: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  categoryBox: {
    justifyContent: "center",
    paddingHorizontal: 15, // Kenar boşluklarını ayarladım
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.075,
  },
  activeCategoryBox: {
    borderBottomColor: "#FFD00C",
    borderBottomWidth: 2.5,
  },
  categoryText: {
    fontWeight: "600",
    fontSize: 14,
    color: "white",
  },
});
