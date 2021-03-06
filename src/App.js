import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import { Header, Home, StoriesCard, Story, ShareStory } from 'containers';
import { header } from 'config';
import { getCountries } from 'actions/country';
import { getPositions } from 'actions/position';
import store from 'store';
import './App.css';

const { Content } = Layout;

class App extends Component {
  componentDidMount() {
    store.dispatch(getCountries());
    store.dispatch(getPositions());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout className="GradFellow layout">
            <Header items={header}/>
            <Content>
              <Switch>
                <Route path="/Home" component={Home} />
                <Route path="/StoriesCard" component={StoriesCard} />
                <Route path="/Stories/:id" component={Story} />
                <Route path="/Share" component={ShareStory} />
                <Redirect to="/Home" />
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
