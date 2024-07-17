import React from "react";
import { ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import MainCategories from "../../components/MainCategories";

export default function Homescreen() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{}}>
      <HeaderMain />
      <BannerCarousel />
      <MainCategories />
    </ScrollView>
  );
}
