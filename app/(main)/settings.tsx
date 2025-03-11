import {
	View,
	Text,
	useColorScheme,
	Platform,
	PlatformColor,
	TouchableOpacity,
} from 'react-native'
import { Colors } from '@/constants/Colors'
import { DynamiInterfaceView as Div } from '@/components/DybamicInterfaceView'
import { useRouter } from 'expo-router'

export default function SettingsScreen() {
	const theme = useColorScheme() ?? 'light'

	const router = useRouter()

	return (
		<Div
			style={{
				backgroundColor:
					Platform.OS === 'ios'
						? PlatformColor('systemBackground')
						: Colors[theme].primaryColor,
			}}>
			<View
				style={{
					padding: 10,
					flex: 1,
				}}>
				<Text
					style={{
						color:
							Platform.OS === 'ios'
								? PlatformColor('label')
								: Colors[theme].text,
					}}>
					Settings
				</Text>
				<Text
					style={{
						color:
							Platform.OS === 'ios'
								? PlatformColor('label')
								: Colors[theme].text,
					}}>
					Current theme: {theme}
				</Text>
				<TouchableOpacity onPress={() => router.replace('/(auth)')}>
					<Text
						style={{
							color: 'white',
						}}>
						Sign Out
					</Text>
				</TouchableOpacity>
			</View>
		</Div>
	)
}
