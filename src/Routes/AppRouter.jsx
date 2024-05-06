import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../../src/App"));
const Registro2 = lazy(() => import("../Components/Registro/Registro2"));
const Registro = lazy(() => import("../Components/Registro/Registro"));
const Menu = lazy(() => import("../Components/menu/menu"));
const Perfil = lazy(() => import("../Components/Perfil/Perfil"));
const Calendario = lazy(() => import("../Components/Calendario/Calendario"));
const Puntuaje = lazy(() => import("../Components/Puntuaje/Puntuaje"));
const Pagos = lazy(() => import("../Components/Membresia/Membresia"));
const Ajustes = lazy(() => import("../Components/Ajustes/Ajustes"));
const EditarPerfil = lazy(() => import("../Components/Actualizar/EditarPerfil"));
const Actualizaciones = lazy(() => import("../Components/Actualizaciones/Actualizaciones"));
export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registro2" element={<Registro2 />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/puntuaje" element={<Puntuaje />} />
            <Route path="/pagos" element={<Pagos />} />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/editarperfil" element={<EditarPerfil />} />
            <Route path="/actualizaciones" element={<Actualizaciones />} />

        </Routes>
    )

};