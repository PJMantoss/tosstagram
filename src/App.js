import React from 'react';
import Settings from './components/Settings';
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
		  image: 'https://picsum.photos/1080/800'
		}
	  }

	  render(){
		return (
		  <div className="App">
			<div className="imageBG" style={{backgroundImage: 'url('+ this.state.image + ')'}}></div>
			<Settings image={this.state.image} />
		  </div>
		);
	  }
}

export default App;