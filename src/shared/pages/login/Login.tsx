import { useState } from "react";
import { Row, Col, Input, Button } from 'antd';

export const Login = () => {
    const [dataForm, setDataForm] = useState({
        username: '',
        password: ''
    });
    const handleLogin = () => {
        // Lógica para realizar o login
    };
    const handleInputChange = (event: { target: { name: string; value: string; }; }) => {
        const { name, value } = event.target;
        setDataForm({ ...dataForm, [name]: value });
    };
    return (
        <>
            <Row justify="center" align="middle" style={{ height: '100vh' }}>
                <Col span={6}>
                    <div style={{ textAlign: 'center' }}>
                        <h1>Login</h1>
                        <Input
                            placeholder="Username"
                            name="username"
                            value={dataForm.username}
                            onChange={handleInputChange}
                            style={{ marginBottom: 10 }}
                        />
                        <Input.Password
                            placeholder="Password"
                            name="password"
                            value={dataForm.password}
                            onChange={handleInputChange}
                            style={{ marginBottom: 10 }}
                        />
                        <Button type="primary" onClick={handleLogin}>
                            Login
                        </Button>
                    </div>
                </Col>
            </Row>
            );
        </>
    )
}