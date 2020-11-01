import React from 'react'
import { observer, inject } from 'mobx-react'
import { Redirect, Route, Switch } from 'react-router-dom'

import Logout from './routes/Logout'
import Authorize from './routes/Authorize'
import Login from './routes/Login'
import './App.css'
import Register from './routes/Register'

class App extends React.Component {
    render() {
        const { userStore } = this.props
        return (
            <div className='App'>
                {userStore.auth
                    ? <Redirect to='/Logout' />
                    : <Redirect to='/Authorize' />
                }
                <Switch>
                    <Route path='/Logout' component={Logout} />
                    <Route path='/Authorize' component={Authorize} />
                    <Route path='/Login' component={Login} />
                    <Route path='/register' component={Register}/>
                </Switch>
            </div>
        );
    }
}

export default inject('userStore')(observer(App));