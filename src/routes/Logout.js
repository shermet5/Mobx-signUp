import React, {Component} from 'react';
import { observer, inject } from 'mobx-react'

class Logout extends Component {
    render() {
        return (
            <div>
                <input type="button" value="Logout" onClick={this.props.userStore.logout}/>
            </div>
        );
    }
}

export default inject('userStore')(observer(Logout));