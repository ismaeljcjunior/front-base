import { useState } from 'react';
import { Row, Col, Input, Button, Typography } from 'antd';

export const Login = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [email, setEmail] = useState('');
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
    const handleForgotPassword = () => {
        setShowLoginForm(false);
        // Lógica para lidar com o esquecimento da senha
    };

    const handleEmailChange = (event: { target: { value: string; }; }) => {
         // Lógica para armazenar email 
        setEmail(event.target.value);
    };

    const handleSendEmail = () => {
        // Lógica para enviar o email de recuperação de senha
    };

    return (
        <Row justify="center" align="middle" style={{ height: '100vh' }}>
            <Col span={6}>
                <div style={{ textAlign: 'center' }}>
                    <h1>Login</h1>
                    {showLoginForm ? (
                        <>
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
                            <Typography.Link onClick={handleForgotPassword} style={{ marginLeft: 10 }}>
                                Esqueci minha senha
                            </Typography.Link>
                        </>
                    ) : (
                        <>
                            <Input
                                placeholder="Email"
                                value={email}
                                onChange={handleEmailChange}
                                style={{ marginBottom: 10 }}
                            />
                            <Button type="primary" onClick={handleSendEmail}>
                                Recuperar Senha
                            </Button>
                            <Typography.Link onClick={() => setShowLoginForm(true)} style={{ marginLeft: 10 }}>
                                Voltar ao login
                            </Typography.Link>
                        </>
                    )}
                </div>
            </Col>
        </Row>
    );
};
