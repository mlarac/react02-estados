import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [variant, setVariant] = useState("info"); 

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (email === "" || password === "" || confirmPassword === "") {
      setMessage("Todos los campos son obligatorios.");
      setVariant("danger");
    } else if (password.length < 6) {
      setMessage("La contraseña debe tener al menos 6 caracteres.");
      setVariant("danger");
    } else if (password !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      setVariant("danger");
    } else {
      // Aquí puedes agregar más lógica, como enviar los datos a una API
      setMessage("¡Registro exitoso!");
      setVariant("success");
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-3">
      <div className="border p-4 rounded" style={{ maxWidth: '400px', width: '100%' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Dirección de correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Registrarse
          </Button>

          {message && (
            <Alert variant={variant} className="mt-3">
              {message}
            </Alert>
          )}
        </Form>
      </div>
    </Container>
  );
};