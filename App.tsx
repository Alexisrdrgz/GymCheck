import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';

export default function App() {
  return (
    <KeyboardAvoidingView
    style={styles.container}
    behavior="height"
  >
    <SafeAreaView style={styles.container}>
    <View style={{
          flex: 1,
          paddingTop: Platform.OS === "android" && 30,}} >
      <Login />
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0
  },
});
