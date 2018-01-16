import React, { Component } from 'react';
import './global/styles.css';
import Button from './components/Button';
import Text from './components/Text';
import Notification from './components/Notification';
import Form from './components/Form';
import Input from './components/Input';
import LoginForm from './components/LoginForm';

class App extends Component {

	state = {
		buttonMessages: '',
		inputMessages: ''
	}

	handleButtonClick = () => {
		this.setState({ buttonMessages: 'Button clicked' });
	}

	handleInputChange = (event, name) => {
		this.setState({
			inputMessages: `Input '${name}' changed,
				current value '${event.target.value}'`
		});
	}

	handleLoginSubmit = (email, password) => {
		console.log(email, password);
	}

	render() {
		const formConfig = [
			{ type: 'text', name: "name", placeholder: 'Name' },
			{ type: 'text', name: "surname", placeholder: 'Surname' },
			{ type: 'email', name: "email", placeholder: 'Email' },
		];

		return (
			<div>
				<div className="row">
					<div className="cell">
						<Text heading>Accusantium doloremque laudantium</Text>
					</div>
				</div>
				<div className="row">
					<div className="cell">
						<Text size="small">Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo. Nam libero.</Text>
					</div>
					<div className="cell">
						<Text size="medium">Qui officia deserunt mollit anim id est laborum. Quia consequuntur magni dolores eos qui.</Text>
					</div>
					<div className="cell">
						<Text size="large">Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</Text>
					</div>
				</div>
				<div className="row">
					<div className="cell"><Button onButtonClick={this.handleButtonClick}>Hello</Button></div>
					<div className="cell"><Button type="secondary" onButtonClick={this.handleButtonClick}>Hello</Button></div>
					<div className="cell"><Button disabled type="disabled" onButtonClick={this.handleButtonClick}>Hello</Button></div>
					<div className="cell">{this.state.buttonMessages ? this.state.buttonMessages : ''}</div>
				</div>
				<div className="row">
					<div className="cell"><Notification>Quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Ut enim ad minima veniam</Notification></div>
					<div className="cell"><Notification type="success">Et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</Notification></div>
					<div className="cell"><Notification type="danger">Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</Notification></div>
				</div>
				<div className="row">
					<div className="cell"><Input size="small" name="text" placeholder="Text" onInputChange={this.handleInputChange} value="asda" /></div>
					<div className="cell"><Input size="medium" name="email" type="email" placeholder="Email" onInputChange={this.handleInputChange} /></div>
					<div className="cell"><Input size="large" name="phone" type="phone" placeholder="Phone" onInputChange={this.handleInputChange} /></div>
					<div className="cell"><Input name="password" type="password" placeholder="Password" onInputChange={this.handleInputChange} error="Invalid password" /></div>
					<div className="cell"><Input name="textarea" type="textarea" onInputChange={this.handleInputChange} value="initial value" /></div>
					<div className="cell">{this.state.inputMessages ? this.state.inputMessages : ''}</div>
				</div>
				<div className="row">
					<div className="cell">
						<LoginForm onSubmit={this.handleLoginSubmit} />
					</div>
					<div className="cell">
						<Form config={formConfig} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
