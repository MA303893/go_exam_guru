import React, {Component} from 'react';
import Login from './Login';
import {Layout} from 'antd'
import '../css/login.css'

const {Content} = Layout;

const MainCSS = {
    padding: '50px',
    marginTop: '30px',
};

class LoginForm extends Component {
    render() {
        return (
            <div className='center-div'>
                <h3>Login Here</h3>
                <Login/>
            </div>
        );
    }
}

class MainContentComponent extends Component {
    render() {
        return (
            <Content style={MainCSS}>
                <LoginForm />
            </Content>
        );
    }
}

export default MainContentComponent;