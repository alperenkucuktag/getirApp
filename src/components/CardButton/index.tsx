import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from "react-native";
import { connect, Dispatch } from "react-redux";
import Toast from "react-native-toast-message";
import * as actions from "../../redux/Reducers/cartActions";
import { Product } from "../../models";

const { width, height } = Dimensions.get("window");

type CartButtonType = {
  addItemToCart: (item: Product) => void;
  item: Product;
};

function CardButton({ item, addItemToCart }: CartButtonType) {
  const handleAddToCart = () => {
    addItemToCart(item);
    Toast.show({
      type: "success",
      text2: "Ürün sepete başarıyla eklendi!",
      position: "Top",
      visibilityTime: 2000,
      autoHide: true,
      topOffset: 59,
      text2Style: styles.toastText2,
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleAddToCart}
        activeOpacity={0.7}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sepete Ekle</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: height * 0.13,
    backgroundColor: "white",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#5D39C1",
    height: height * 0.06,
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  toastText2: {
    fontWeight: "bold",
  },
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addItemToCart: (item: Product) =>
      dispatch(actions.addTocart({ quantity: 1, product: item })),
  };
};

export default connect(null, mapDispatchToProps)(CardButton);
