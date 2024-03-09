import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type Navigation = {
  HomeScreen: undefined;
  Perfil: undefined;
  Ajustes: undefined;
  Puntuaje: undefined;
  Membresia: undefined;
  Calendar: undefined;
  Login: undefined;
  CrearCuenta: undefined;
  ConfirmacionCuenta: undefined;
};

export type RoutesProps = NativeStackNavigationProp<Navigation>;
