import { DynamiInterfaceView as Div } from '@/components/DybamicInterfaceView'
import React, { useState } from 'react'
import {
	View,
	TextInput,
	TouchableOpacity,
	Platform,
	PlatformColor,
	useColorScheme,
	Text,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import useStyles from './authStyles'
import { useRouter } from 'expo-router'

export default function LoginScreen() {
	const theme = useColorScheme() ?? 'light'
	const styles = useStyles(theme)

	const router = useRouter()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPassword, setShowPassword] = useState(false)

	return (
		<Div style={styles.mainContainer}>
			<Text style={[styles.text, { fontSize: 35, marginBottom: 0 }]}>
				Log In
			</Text>

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

			<TouchableOpacity
				style={styles.button}
				onPress={() => router.replace('/(main)')}>
				<Text style={styles.text}>Log In</Text>
			</TouchableOpacity>

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
