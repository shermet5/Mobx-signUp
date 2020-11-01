import {action, makeObservable, observable} from 'mobx';

class UserStore{
    users = [];
    auth = false;
    addUser = (login, password) => {
        if (this.users.filter(user =>
            user.login === login && user.password === password).length == 0)
            this.users.push(new User(login, password));
    }
    login = (login, password) => {
        this.auth = this.users.filter(user =>
            user.login === login && user.password === password).length > 0
    }
    logout = () => {
        this.auth = false;
    }

    constructor() {
        makeObservable(this, {
            users: observable,
            auth: observable,
            addUser: action,
            logout: action
        })
    }
}

class User {
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    login;
    password;
}

export default new UserStore();