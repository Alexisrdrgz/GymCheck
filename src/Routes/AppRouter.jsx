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
            <Route path="/" Component={<LoginPage />} />
            <Route path="/registro" Component={<Registro />} />
            <Route path="/registro2" Component={<Registro2 />} />
            <Route path="/menu/:email" Component={<Menu />} />
            <Route path="/perfil" Component={<Perfil />} />
            <Route path="/calendario" Component={<Calendario />} />
            <Route path="/puntuaje" Component={<Puntuaje />} />
            <Route path="/pagos" Component={<Pagos />} />
            <Route path="/ajustes" Component={<Ajustes />} />
            <Route path="/editarperfil" Component={<EditarPerfil />} />
            <Route path="/actualizaciones" Component={<Actualizaciones />} />

        </Routes>
    )

};