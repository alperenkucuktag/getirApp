import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import productsGetir from "../../../assets/productsGetir";
import CartItem from "../../components/CartItem";
import { ScrollView } from "react-native";
import ProductItem from "../../components/ProductItem";
import { connect } from "react-redux";

import { Product } from "../../models";

const { width, height } = Dimensions.get("window"); // Ekran genişliğini almak için

function CartScreen({
  cartItems,
  navigation,
  route,
  clearCart,
}: {
  cartItems: {
    navigation: any;
    route: any;
    cartItems: { product: Product; quantity: number }[];
    clearCart: () => void;
  }[];
}) {
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((cartItem) => {
      total += cartItem.product.fiyat * cartItem.quantity;
    });
    setTotalPrice(total);
  };
  useEffect(() => {
    getProductsPrice();
  }, [cartItems, navigation]);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <FlatList
          style={{}}
          data={cartItems}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CartItem product={item.product} quantity={item.quantity} />
          )}
        />
        <Text style={{ padding: 15, fontWeight: "bold", color: "#5d3ebd" }}>
          Önerilen Ürünler
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          bounces={true}
          style={{ backgroundColor: "white" }}
        >
          {productsGetir.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </ScrollView>
      </ScrollView>
      <View
        style={{
          height: height * 0.12,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: "4%",
          backgroundColor: "#f8f8f8",
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: height * 0.06,
            flex: 3,
            backgroundColor: "#5d3ebd",
            justifyContent: "center",
            alignItems: "center",
            marginTop: -10,
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            Devam
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            marginTop: -10,
            height: height * 0.06,
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text
            style={{
              color: "#5D3EBD",
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            <Text>{"\u20BA"}</Text>
            {totalPrice.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}
//*state e ürün ekledik
const mapStatetoProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStatetoProps, null)(CartScreen);
