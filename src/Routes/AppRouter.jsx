import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../Routes/PrivateRoutes.tsx";
import LoginPage from "../../src/App";
import Registro2 from "../Components/Registro/Registro2";
import Registro from "../Components/Registro/Registro";
import Menu from "../Components/menu/menu";
import Perfil from "../Components/Perfil/Perfil";
import Calendario from "../Components/Calendario/Calendario";
import Puntuaje from "../Components/Puntuaje/Puntuaje";
import Pagos from "../Components/Membresia/Membresia";
import Ajustes from "../Components/Ajustes/Ajustes";
import EditarPerfil from "../Components/Actualizar/EditarPerfil";
import Actualizaciones from "../Components/Actualizaciones/Actualizaciones";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registro" element={<Registro />} />
      <Route path="/registro2" element={<Registro2 />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/menu" element={<Menu />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/calendario" element={<Calendario />} />
        <Route path="/puntuaje" element={<Puntuaje />} />
        <Route path="/pagos" element={<Pagos />} />
        <Route path="/ajustes" element={<Ajustes />} />
        <Route path="/editarperfil" element={<EditarPerfil />} />
        <Route path="/actualizaciones" element={<Actualizaciones />} />
      </Route>
    </Routes>
  );
};
