import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import CategoryFiltering from "../../components/CategoryFiltering";
import { Category } from "../../models";
import TypeFiltering from "../../components/TypeFiltering";
import ProductItem from "../../components/ProductItem";
import ProductsContainer from "../../components/ProductContainer";

export default function CategoryFilterScreen(props) {
  const [category, setCategory] = useState<Category>(
    props.route.params.category
  );
  return (
    <ScrollView>
      <CategoryFiltering category={category} />
      <TypeFiltering />
      <ProductsContainer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
