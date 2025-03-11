import { DynamiInterfaceView as Div } from '@/components/DybamicInterfaceView'
import React, { useState } from 'react'
import {
	View,
	TextInput,
	TouchableOpacity,
	Text,
	useColorScheme,
	Platform,
	PlatformColor,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import useStyles from './authStyles'

export default function SignupScreen() {
	const theme = useColorScheme() ?? 'light'

	const styles = useStyles(theme)

	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	const [confirmation, setConfirmation] = useState('')
	const [showPassword, setShowPassword] = useState(false)
	const [showConfirmation, setShowConfirmation] = useState(false)

	return (
		<Div style={styles.mainContainer}>
			<Text style={[styles.text, { fontSize: 35, marginBottom: 0 }]}>
				Sign Up
			</Text>

			<TextInput
				placeholder='Name'
				placeholderTextColor={
					Platform.OS === 'ios' ? PlatformColor('systemGray') : 'gray'
				}
				value={name}
				onChangeText={setName}
				style={styles.input}
			/>
			<TextInput
				placeholder='Email'
				placeholderTextColor={
					Platform.OS === 'ios' ? PlatformColor('systemGray') : 'gray'
				}
				value={email}
				onChangeText={setEmail}
				style={styles.input}
			/>
			<View style={styles.input}>
				<TextInput
					placeholder='Password'
					placeholderTextColor={
						Platform.OS === 'ios'
							? PlatformColor('systemGray')
							: 'gray'
					}
					value={password}
					onChangeText={setPassword}
					secureTextEntry={!showPassword}
					style={{
						fontSize: styles.text.fontSize,
						color: styles.input.color,
						width: '90%',
					}}
				/>
				<TouchableOpacity
					onPress={() => setShowPassword(!showPassword)}>
					<Ionicons
						name={showPassword ? 'eye-off' : 'eye'}
						size={28}
						color={
							Platform.OS === 'ios'
								? PlatformColor('systemGray')
								: 'gray'
						}
					/>
				</TouchableOpacity>
			</View>
			<View style={styles.input}>
				<TextInput
					placeholder='Confirm Password'
					style={{
						fontSize: styles.text.fontSize,
						color: styles.input.color,
						width: '90%',
					}}
					placeholderTextColor={
						Platform.OS === 'ios'
							? PlatformColor('systemGray')
							: 'gray'
					}
					value={confirmation}
					onChangeText={setConfirmation}
					secureTextEntry={!showConfirmation}
				/>
				<TouchableOpacity
					onPress={() => setShowConfirmation(!showConfirmation)}>
					<Ionicons
						name={showConfirmation ? 'eye-off' : 'eye'}
						size={28}
						color={
							Platform.OS === 'ios'
								? PlatformColor('systemGray')
								: 'gray'
						}
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.separator}>
				<View style={styles.separatorLines} />
				<Text style={[styles.text, styles.separatorText]}>OR</Text>
				<View style={styles.separatorLines} />
			</View>

			<Ionicons.Button
				name='logo-google'
				style={styles.button}>
				<Text style={styles.text}>Continue with Google</Text>
			</Ionicons.Button>
		</Div>
	)
}
