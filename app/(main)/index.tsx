import {
	View,
	Text,
	useColorScheme,
	Platform,
	PlatformColor,
	StyleSheet,
	processColor,
	OpaqueColorValue,
} from 'react-native'
import { Colors } from '@/constants/Colors'
import { DynamiInterfaceView as Div } from '@/components/DybamicInterfaceView'

export default function HomeScreen() {
	const theme = useColorScheme() ?? 'light'

	const styles = StyleSheet.create({
		mainWrapper: {
			padding: 10,
			backgroundColor:
				Platform.OS === 'ios'
					? PlatformColor('systemBackground')
					: Colors[theme].primaryColor,
		},
		texts: {
			color:
				Platform.OS === 'ios'
					? PlatformColor('label')
					: Colors[theme].text,
		},
		title: {
			fontSize: 20,
		},
	})

	return (
		<Div style={styles.mainWrapper}>
			<Text style={[styles.texts, styles.title]}>
				Testing PlatformColors
			</Text>
			<Text style={[styles.texts]}>
				<Text style={{ color: PlatformColor('label') }}>
					Label Text
				</Text>
			</Text>
			<Text style={[styles.texts]}>Current theme: {theme}</Text>
		</Div>
	)
}
