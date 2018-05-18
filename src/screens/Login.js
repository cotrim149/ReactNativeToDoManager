import React, {Component} from 'react';
import {
	KeyboardAvoidingView,
	View,
	Image,
	TextInput,
	Button,
	Text,
	StyleSheet,
} from 'react-native';

export default class Login extends Component {

	constructor(props){
		super(props);
		this.state = {email: '', password: ''};
	}

	render() {
		const img = require('../assets/logo_to_do_list.png');

		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>
				<View style={styles.topView}>
					<Image style={styles.img} source = {img}/>
				</View>

				<View style={styles.bottomView}>
					<TextInput style={styles.input}
					placeholder='Email'
					keyboardType={'email-address'}
					autoCapitalize='none'
					value = {this.props.email}
					onChangeText = {(text) =>
						this.setState({email: text})
					}/>

					<TextInput style={styles.input} placeholder='Password' secureTextEntry={true} autoCapitalize='none'
					onChangeText = {(text) =>
						this.setState({password: text})
					}/>

					<Button title='Sign In'
					onPress = {() =>
						alert(this.state.email + '\n' + this.state.password)
					}/>

					<View style={styles.textConteiner}>
						<Text>Not a member? Lets </Text>
						<Text style={styles.textRegister}>Register.</Text>
					</View>

				</View>
			</KeyboardAvoidingView>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	topView: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 50
	},
	img: {
		width: 350,
		height: 200
	},
	bottomView: {
		flexDirection: 'column',
		paddingRight: 20,
		paddingLeft: 20
	},
	input: {
		marginBottom: 20
	},
	textConteiner: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginTop: 20
	},
	textRegister: {
		fontWeight: 'bold'
	}
});
