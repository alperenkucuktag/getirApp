import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Product } from "../../models";

import ImageCarousel from "../../components/ImageCarousel";
import DetailBox from "../../components/DetailBox";
import DetailProperty from "../../components/DetailProperty";
import CardButton from "../../components/CardButton";
import { ScrollView } from "react-native";

export default function ProductDetail(props) {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    // setProduct sadece bir kez çağrılacak
    setProduct(props.route.params.product);
  }, [props.route.params.product]);

  if (!product) {
    // Product null ise yükleniyor gösterecek
    return <ActivityIndicator color={"#5D3EBD"} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <ImageCarousel images={product.images} />
        <DetailBox
          price={product.fiyat}
          name={product.name}
          quantity={product.miktar}
        />
        <Text
          style={{
            paddingHorizontal: 10,
            paddingVertical: 14,
            color: "#808B99",
            fontWeight: "600",
          }}
        >
          Detaylar
        </Text>
        <DetailProperty />
      </ScrollView>
      <CardButton item={product} />
    </View>
  );
}

const styles = StyleSheet.create({});
