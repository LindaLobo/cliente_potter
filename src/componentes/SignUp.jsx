import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SignUp = () => {

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const hadleSingUp = async () => {
        try {
            const response = await axios.post("http://localhost:8000/sign_up", {
                nombre,
                email,
                password
            });
            console.log(response)
            Swal.fire({
                icon: "success",
                title: "Transacción Exitosa",
                text: `Usuario Creado!`,
            });
            navigate("/login");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: `Puede que ya este registrado!`,
            });
        }
    };


    return (
        <div className="container mt-5 shadow p-3 mb-5 bg-body-tertiary rounded">
            <h1 className="text-center mb-5 text-secondary">Registrate</h1>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="nombre"
                        id="input_nombre"
                        placeholder="Nombre de usuario"
                        className="form-control"
                        name="nombre"
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                    <Form.Label>Nombre de Usuario</Form.Label>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control
                        type="email"
                        id="input_email"
                        placeholder="Email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Form.Label>Email</Form.Label>
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
                        onClick={hadleSingUp}
                    >
                        Registrarse
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default SignUp
