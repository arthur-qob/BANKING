import { DynamiInterfaceView as Div } from '@/components/DybamicInterfaceView'
import { useRouter } from 'expo-router'
import { Text, useColorScheme, TouchableOpacity } from 'react-native'
import useStyles from './authStyles'

export default function WelcomeScreen() {
	const theme = useColorScheme() ?? 'light'

	const styles = useStyles(theme)

	const router = useRouter()

	return (
		<Div style={styles.mainContainer}>
			<Text style={[styles.title, styles.text, { fontSize: 50 }]}>
				Welcome to BANKING
			</Text>

			<TouchableOpacity
				style={styles.button}
				onPress={() => router.navigate('/login')}>
				<Text style={styles.btnText}>Log In</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => router.navigate('/signup')}>
				<Text style={styles.btnText}>Sign Up</Text>
			</TouchableOpacity>
		</Div>
	)
}
