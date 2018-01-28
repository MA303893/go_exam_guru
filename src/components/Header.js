import React, {Component} from 'react';
import {Layout} from 'antd';

const {Header} = Layout;

const HeadStyle = {
    background: 'linear-gradient(to bottom, #1890ff, #00b8ff)'
}

class HeaderComponent extends Component {
    render() {
        return (
            <Header style={HeadStyle}>
                <div>
                    <h1>Header</h1>
                </div>
            </Header>
        );
    }
}

export default HeaderComponent;