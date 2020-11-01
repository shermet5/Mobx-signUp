import React, {useState} from 'react';
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'


const Register = props => {
    const { userStore, history } = props;
    const [login, setLogin] = useState("");
    const [pass, setPass] = useState("");

    const registerHandler = () => {
        userStore.addUser(login, pass);
        setLogin("");
        setPass("");
        history.push('/Authorize')
    }

    return (
        <div className="register">
            <div>
                <input value={login} type="text" placeholder="login" onChange={({ target: { value }  }) => setLogin(value)}/>
            </div>
            <div>
                <input value={pass} type="password" placeholder="password" onChange={({ target: { value }  }) => setPass(value)}/>
            </div>
            <div>
                <input type="submit" value="Sign up" onClick={registerHandler}/>
            </div>
        </div>
    );
}

export default inject('userStore')(observer(Register));