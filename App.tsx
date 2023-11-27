import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Login from "./src/components/Login";
import CrearCuenta from "./src/components/CrearCuenta";
import ConfirmacionCuenta from "./src/components/ConfirmacionCuenta";
import HomeScreen from "./src/components/HomeScreen/HomeScreen";

export default function App() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <SafeAreaView style={styles.container}>
        <View
          style={{
            flex: 1,
            paddingTop: Platform.OS === "android" && 30,
          }}
        >
          <HomeScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
});
