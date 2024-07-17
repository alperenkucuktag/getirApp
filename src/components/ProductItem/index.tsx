import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Product } from "../../models";
import { useNavigation } from "@react-navigation/native";
import { connect } from "react-redux";
import * as actions from "../../redux/Reducers/cartActions";

const { width, height } = Dimensions.get("window");

type productItemType = {
  item: Product;
  addItemToCart: (a: Product) => void;
};

function ProductItem({ item, addItemToCart }: productItemType) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.29,
        marginTop: 12,
        // backgroundColor: "red",
        height: height * 0.24,
        marginLeft: 12,
        marginBottom: 6,
      }}
    >
      <Image
        style={{
          width: width * 0.28,
          height: width * 0.28,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{
          uri: item.image,
        }}
      />
      <View
        style={{ flexDirection: "row", marginTop: 10, alignItems: "center" }}
      >
        <Text
          style={{
            fontSize: 11,
            color: "#747990",
            textDecorationLine: "line-through",
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          <Text>{"\u20BA"}</Text>
          {item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontSize: 12, fontWeight: "600", marginTop: 5 }}>
        {item.name}
      </Text>
      <Text
        style={{
          color: "#747990",
          fontSize: 12,
          marginTop: 4,
          fontWeight: "600",
        }}
      >
        {item.miktar}
      </Text>
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          borderWidth: 0.3,
          borderColor: "lightgrey",
          backgroundColor: "white",
          position: "absolute",
          right: -6,
          top: -6,
          borderRadius: 6,
          alignItems: "center",
          justifyContent: "center",
          shadowRadius: 3.8,
          shadowOpacity: 0.19,
          shadowColor: "#5D3EBD",
        }}
        onPress={() => addItemToCart(item)}
      >
        <Entypo name='plus' size={24} color='#5D3EBD' />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
//Eklediğimiz ürünün ekranda gözükmesi Productıtem ve cartscreen arasında
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product: Product) =>
      dispatch(actions.addTocart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
