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
	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior='padding'>

				<View style={styles.topView}>
					<Image style={styles.img}/>
				</View>
				<View style={styles.bottomView}>
					<TextInput style={styles.input} placeholder='Email' keyboardType={'email-address'} autoCapitalize='none'/>

					<TextInput style={styles.input} placeholder='Password' secureTextEntry={true}/>

					<Button title='Sign In'/>

					<View style={styles.textConteiner}>
						<Text> Not a member? Lets </Text>
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
		flexDirection: 'column' },
	topView: {
		justifyContent: 'center', alignItems: 'center',
		padding: 50
	},
	img: {
		width: 200,
		height: 200
	},
	bottomView: {
		flexDirection: 'column', paddingRight: 20, paddingLeft: 20
	}, input: {
		marginBottom: 20
	}
});
