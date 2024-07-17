import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "../screens/Homescreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetail from "../screens/ProductDetail";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";
import Navigation from "../screens/Navigation";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import CartScreen from "../screens/CartScreen";
import Giftscreen from "../screens/Giftscreen";
import { connect } from "react-redux";
import { Product } from "../models";
import * as actions from "../redux/Reducers/cartActions";

const Stack = createStackNavigator();
const { width, height } = Dimensions.get("window");

type ClearButtonType = {
  clearCart: () => void;
};
type HearButtonType = {
  addItemToCart: (item: Product) => void;
  item: Product;
};

function MyStack({
  navigation,
  route,
  cartItems,
  clearCart,
}: {
  navigation: any;
  route: any;
  cartItems: { product: Product; quantity: number }[];
  clearCart: () => void;
}) {
  const tabHiddenRoutes = ["ProductDetails", "Navigator", "CartScreen"];

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [isHearted, setIsHearted] = useState<boolean>(false);

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

  const toggleHearted = () => {
    setIsHearted((prevState) => !prevState);
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Homescreen}
        options={({ navigation }) => ({
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Gifta")}
              style={{ paddingLeft: 10 }}
            >
              <MaterialCommunityIcons
                name='qrcode-scan'
                size={24}
                color='#F7D100'
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Navigator")}
              style={{ paddingRight: 10 }}
            >
              <MaterialCommunityIcons
                name='navigation-variant'
                size={24}
                color='#F7D100'
              />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Image
              source={require("../../assets/getirlogo.png")}
              style={{ width: 80, height: 30, marginBottom: 10 }}
            />
          ),
        })}
      />

      <Stack.Screen
        name='Navigator'
        component={Navigation}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name='close' size={24} color='#F7D100' />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#F7D100",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text
              style={{ fontWeight: "bold", color: "#F7D100", fontSize: 15 }}
            >
              Getir Şubeleri
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name='Gifta'
        component={Giftscreen}
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name='close' size={24} color='#F7D100' />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#F7D100",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text
              style={{ fontWeight: "bold", color: "#F7D100", fontSize: 15 }}
            >
              Github
            </Text>
          ),
        })}
      />
      <Stack.Screen
        name='Back'
        component={CategoryFilterScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#F7D100",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text
              style={{ fontWeight: "bold", color: "#F7D100", fontSize: 15 }}
            >
              Ürünler
            </Text>
          ),
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("CartScreen")}
                style={{
                  width: width * 0.22,
                  height: 33,
                  backgroundColor: "white",
                  marginRight: width * 0.03,
                  borderRadius: 9,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ width: 23, height: 23, marginLeft: 6 }}
                  source={require("./../../assets/cart.png")}
                />
                <View
                  style={{ width: 4, height: 33, backgroundColor: "white" }}
                />
                <View
                  style={{
                    flex: 1,
                    height: 33,
                    backgroundColor: "#F3EFFE",
                    borderTopRightRadius: 9,
                    borderBottomRightRadius: 9,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#5D3EBD",
                      fontWeight: "bold",
                      fontSize: 12,
                    }}
                  >
                    <Text>{"\u20BA"}</Text>
                    {totalPrice.toFixed(2)}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        options={({ navigation }) => ({
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons name='close' size={24} color='#F7D100' />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={toggleHearted}
              style={{ paddingRight: 10 }}
            >
              <FontAwesome
                name='heart'
                size={24}
                color={isHearted ? "#F7D100" : "black"}
              />
            </TouchableOpacity>
          ),
          headerBackTitleVisible: false,
          headerTintColor: "#F7D100",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text
              style={{ fontWeight: "bold", color: "#F7D100", fontSize: 15 }}
            >
              Ürün Detayı
            </Text>
          ),
        })}
        name='ProductDetails'
        component={ProductDetail}
      />
      <Stack.Screen
        name='CartScreen'
        component={CartScreen}
        options={{
          headerBackTitleVisible: false,
          headerTintColor: "#F7D100",
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text
              style={{ fontWeight: "bold", color: "#F7D100", fontSize: 15 }}
            >
              Sepetim
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={clearCart} style={{ paddingRight: 10 }}>
              <Ionicons name='trash' size={24} color='#F7D100' />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
  };
};

function HomeNavigator({
  navigation,
  route,
  cartItems,
  clearCart,
  addItemToCart,
}) {
  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={clearCart}
      addToItemCart={addItemToCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeNavigator);
