import React from 'react';
import Settings from './components/Settings';
import ImageBG from './components/image/ImageBG';
import './App.css';

let data = {
	image: 'https://picsum.photos/1080/800',
	settings: [
		{
			name: 'contrast',
			value: '100%',
		},
		{
			name: 'hue',
			value: '0deg'
		},
		{
			name: 'brightness',
			value: '100%'
		},
		{
			name: 'saturate',
			value: '100%'
		},
		{
			name: 'sepia',
			value: '0%'
		}
	],
	filters: [
		{
			id: 0,
			name: 'Noir',
			settings: [
				{
					name: 'contrast',
					value: '138%',
				},
				{
					name: 'hue',
					value: '0deg'
				},
				{
					name: 'brightness',
					value: '122%'
				},
				{
					name: 'saturate',
					value: '0%'
				},
				{
					name: 'sepia',
					value: '0%'
				}
			]
		},
		{
			id: 1,
			name: 'Aged',
			settings: [
				{
					name: 'contrast',
					value: '94%',
				},
				{
					name: 'hue',
					value: '-54deg'
				},
				{
					name: 'brightness',
					value: '92%'
				},
				{
					name: 'saturate',
					value: '100%'
				},
				{
					name: 'sepia',
					value: '44%'
				}
			]
		},
		{
			id: 2,
			name: 'Whiteout',
			settings: [
				{
					name: 'contrast',
					value: '32%',
				},
				{
					name: 'hue',
					value: '0deg'
				},
				{
					name: 'brightness',
					value: '173%'
				},
				{
					name: 'saturate',
					value: '0%'
				},
				{
					name: 'sepia',
					value: '0%'
				}
			]
		},
		{
			id: 3,
			name: 'Vintage',
			settings: [
				{
					name: 'contrast',
					value: '164%',
				},
				{
					name: 'hue',
					value: '0deg'
				},
				{
					name: 'brightness',
					value: '47%'
				},
				{
					name: 'saturate',
					value: '0%'
				},
				{
					name: 'sepia',
					value: '100%'
				}
			]
		}
	]
};

class App extends React.Component {
  constructor(props){
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.getDefaultProps = this.getDefaultProps.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getDefaultProps() {
    return(data);
  }

  handleChange(e){
    let value = e.target.value;
		let name = e.target.id;
		switch (name) {
			case 'contrast':
				this.props.settings[0].value = value + '%';
				break;
			case 'hue':
				this.props.settings[1].value = value + 'deg';
				break;
			case 'brightness':
				this.props.settings[2].value = value + '%';
				break;
			case 'saturate':
				this.props.settings[3].value = value + '%';
				break;
			case 'sepia':
				this.props.settings[4].value = value + '%';
				break;
		}
		this.forceUpdate();
  }

  handleClick(e){
    let index = e.target.id.replace('filter-','');
		// console.log(this.props.filters[index].settings);
		this.props.settings[0].value = this.props.filters[index].settings[0].value;
		this.props.settings[1].value = this.props.filters[index].settings[1].value;
		this.props.settings[2].value = this.props.filters[index].settings[2].value;
		this.props.settings[3].value = this.props.filters[index].settings[3].value;
		this.props.settings[4].value = this.props.filters[index].settings[4].value;
		this.forceUpdate();
  }

  render(){
    return (
      <div className="App">
        <ImageBG image={this.props.image} />
        <Settings 
            onClick={this.handleClick} 
            onChange={this.handleChange} 
            data={this.props} 
        />
      </div>
    );
  }
}

export default App;
