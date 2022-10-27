import { useState } from "react";
import './Login.css'

const user = [
    {
        id: 1,
        userName: 'Nguyen Uy Dinh',
        email: 'test@gmail.com',
        password: '123456',
    }
]

function Login({ onSetLogin }) {
    const [errorMessages, setErrorMessages] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        var { uname, pass } = document.forms[0];

        const userData = user.find((user) => user.email === uname.value );


        if (userData) {
            if (userData.password !== pass.value) {
              // Invalid password
              setErrorMessages({ name: "pass", message: 'Invalid password' });
            } else {
                onSetLogin(true);
            }
        } else {
            // Email not found
            setErrorMessages({ name: "uname", message: 'Email not found' });
        }
    }

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
    );

    return (
        <div className="modal-login">
            <div className="box-text">
                <div className="text">
                    <h2>"Bệ phóng mới" cho thị trường kỳ hạn Việt nam</h2>
                    <p>Text cho  login</p>
                </div>
            </div>


            <div className="box-login">
                <h2>ĐĂNG NHẬP TÀI KHOẢN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="box-text2">
                        <div>Email</div>
                        <input className="input-box" type='email' name='uname' placeholder="Email"></input>
                        {renderErrorMessage("uname")}
                    </div>
                    <div className="input-container">
                        <div>Mật khẩu</div>
                        <input className="input-box" type='password' name='pass' placeholder="Password"></input>
                        {renderErrorMessage("pass")}
                    </div>
                    <div className="button-container">
                        <input className="button-submit" type="submit" value='Đăng nhập'></input>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default Login;