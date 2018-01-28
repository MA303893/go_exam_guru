import React, {Component} from 'react';
// import './App.css';
import Header from './components/Header'
import Content from './components/MainContentComponent'
import Footer from './components/FooterComponent'
import {Layout} from 'antd';

const X = {
    minHeight: '100%'
};

class App extends Component {

    render() {
        return (
            <Layout style={X}>
                <Header/>
                <Content/>
                <Footer/>
            </Layout>
        );
    }
}

export default App;
