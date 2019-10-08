import React from 'react';
import { hot } from 'react-hot-loader';
import axios from 'axios';
import Cookies from 'js-cookie';
/* eslint-disable no-alert */
const Main = () => (
  <div>
    <h1 className="title">Script</h1>
    <p>
      Scripting page template in `/client/script/index.jsx`, visit via url
      `/script`
    </p>
    <p>CSS file serves at `/build/script.css`</p>
    <p>JS file serves at `/build/script.js`</p>
    <hr />
    <button onClick={() => alert('it works!')}>click me</button>
  </div>
);

class App extends React.Component {
  componentDidMount() {
    axios({
      url: '/ping',
      data: {
        text: 'hello word',
      },
      headers: {
        'x-csrf-token': Cookies.get('csrfToken'),
      },
    });
  }

  render() {
    return <Main />;
  }
}


export default hot(module)(App);
