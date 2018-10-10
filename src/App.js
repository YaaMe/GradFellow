import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Home } from 'containers';
import { header } from 'config';
import store from 'store';
import './App.css';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="GradFellow layout">
            <Header items={header}/>
            <Content>
              <Route path="/Home" component={Home} />
            </Content>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
