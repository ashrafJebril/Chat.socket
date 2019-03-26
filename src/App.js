import React, { Component } from 'react';
import Chat from "./Components/Chat" 
import './App.css';
import SockJS from "sockjs-client"


var sock = new SockJS('https://api.eyeson.team/rt?access_key=5c9a3f9425d9a50010008018/', {headers: {'Access-Control-Allow-Origin':'*'}});
sock.onopen = function() {
    console.log('open');
    sock.send('test');
};

sock.onmessage = function(e) {
    console.log('message', e.data);
    sock.close();
};

sock.onclose = function() {
    console.log('close');
};


class App extends Component {
  render() {
    return (
      <div className="App">
<Chat/>
      </div>
    );
  }
}

export default App;
