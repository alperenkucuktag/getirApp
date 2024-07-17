import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./src/screens/Homescreen";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import RootNavigators from "./src/navigators/RootNavigators";
import store from "./src/redux/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigators />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
