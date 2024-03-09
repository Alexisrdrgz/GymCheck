import React, { useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from "./AuthStack";
import HomeStack from "./HomeStack";
import { auth } from "../../firebase";

const MainStack = () => {
  const Stack = createNativeStackNavigator();
  const [userAuthenticated, setUserAuthenticated] = React.useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserAuthenticated(true);
      } else {
        setUserAuthenticated(false);
      }
    });
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userAuthenticated ? (
        <Stack.Screen name="CrearCuenta" component={HomeStack} />
      ) : (
        <Stack.Screen name="authStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
