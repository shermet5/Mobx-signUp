import React, {useState} from 'react';
import { observer, inject } from 'mobx-react'

const Login = props => {
    const { userStore } = props;
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const loginHandler = () => {
        userStore.login(login , pass);
        setLogin("");
        setPass("");
    }

    return (
        <div className="login">
            <div>
                <input value={login} type="text" placeholder="login" onChange={({ target: { value }  }) => setLogin(value)}/>
            </div>
            <div>
                <input value={pass} type="password" placeholder="password" onChange={({ target: { value }  }) => setPass(value)}/>
            </div>
            <div>
                <input type="submit" value="Login" onClick={loginHandler}/>
            </div>
        </div>
    );
}

export default inject('userStore')(observer(Login));