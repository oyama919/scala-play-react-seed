import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Client from "./Client";

import './App.css';

const Home = () => <div>Current Route: index page</div>;

const Tech = ({match}) => {
  return match.params.id
    ? <div>Current path: { match.path + match.params.id }</div> : <div>Current path: { match.url }</div>
};

const NoMatch = ({match}) => {
  console.log(match); // matchが「/」になるのはなぜなのか window.location.pathname で暫定対応
  return <div><p><b>404</b> url: "{ window.location.pathname }" is Not found</p></div>
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  async componentDidMount() {
    Client.getSummary(summary => {
      this.setState({
        title: summary.title,
        content: summary.content
      });
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <p><b>Welcome to {this.state.title}</b></p>
          <nav>
            <Link to="/">home</Link>
            <Link to="tech">tech</Link>
            <Link to="tech:10">tech10</Link>
            <Link to="wrongpage">wrong page</Link>
          </nav>
          <p>{this.state.content}</p>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/tech" exact component={Tech}/>
            <Route path="/tech:id" exact component={Tech}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
