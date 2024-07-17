import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Product } from "../../models";
import * as actions from "../../redux/Reducers/cartActions";
import { connect } from "react-redux";

type CartItemProps = {
  product: Product;
  quantity: number;
  removeFromCart: (product: Product) => void;
};

const { width, height } = Dimensions.get("window");

function CartItem({ product, removeFromCart, quantity }: CartItemProps) {
  return (
    <View style={{ width: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: height * 0.13,
          width: width * 0.92,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: width * 0.04,
          justifyContent: "space-between",
          backgroundColor: "white",
          borderBottomWidth: 0.4,
          borderBottomColor: "lightgrey",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderWidth: 0.4,
              borderColor: "lightgray",
              borderRadius: 8,
              padding: 4,
            }}
          >
            <Image
              style={{
                height: height * 0.09,
                width: height * 0.09,
              }}
              source={{ uri: product.image }}
            />
          </View>

          <View style={{ marginLeft: 8 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "600",
                maxWidth: width * 0.41,
              }}
            >
              {product.name}
            </Text>
            <Text
              style={{
                fontSize: 12,
                marginTop: 3,
                color: "#848897",
                fontWeight: "600",
              }}
            >
              {product.miktar}
            </Text>
            <Text
              style={{
                color: "#5D3EBD",
                fontWeight: "bold",
                marginTop: 6,
                fontSize: 15,
              }}
            >
              {"\u20BA"}
              {product.fiyat}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width * 0.22,
            borderColor: "lightgrey",
            borderWidth: 0.5,
            height: height * 0.037,
            borderRadius: 10,
            justifyContent: "space-around",
            alignItems: "center",

            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,

            marginBottom: 10,
          }}
        >
          <TouchableOpacity onPress={() => removeFromCart(product)}>
            <Text>-</Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: "#5D3EBD",
              height: height * 0.037,
              width: width * 0.06,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "#F7D100", fontWeight: "bold", fontSize: 12 }}
            >
              {quantity}
            </Text>
          </View>
          <TouchableOpacity>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (product: Product) =>
      dispatch(actions.removeFromCart(product)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
