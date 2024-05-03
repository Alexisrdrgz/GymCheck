import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const LoginPage = lazy(() => import("../../src/App"));
const Registro2 = lazy(() => import("../Components/Registro/Registro2"));
const Registro = lazy(() => import("../Components/Registro/Registro"));

export const AppRouter = () => {

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/registro2" element={<Registro2 />} />


        </Routes>
    )

};