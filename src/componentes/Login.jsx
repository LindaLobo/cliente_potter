import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Login = () => {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const { auth, setAuth } = useAuth();
    const navigate = useNavigate();

    const hadleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:8000/login", {
                nombre,
                correo,
                password,
            });
            console.log(response)
            const token = response.data.message;
            sessionStorage.setItem("token", token);
            setAuth({ token, auth: true });
            navigate("/personajes");
        } catch (error) {
            console.log("se genero un error", error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `${error.response.data}!`,
            });
        }
    };

    useEffect(() => {
        const storedToken = sessionStorage.getItem("token");
        if (storedToken) {
            setAuth({ token: storedToken, auth: true });
            navigate("/personajes");
        }
    }, [setAuth, navigate]);

    return (
        <div className="container mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 className="text-center text-secondary mb-5">Iniciar sesión</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="nombre"
                        id="input_nombre"
                        placeholder="nombre"
                        className="form-control"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                    <Form.Label>nombre</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="correo"
                        id="input_correo"
                        placeholder="correo"
                        className="form-control"
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo}
                    />
                    <Form.Label>correo</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="password"
                        id="input_password"
                        placeholder="Password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <Form.Label>Password</Form.Label>
                </Form.Group>
                <div className="text-center">
                    <Button
                        type="button"
                        className="btn btn-color btn-block mb-4"
                        onClick={hadleLogin}
                    >
                        Iniciar Sesion
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Login
