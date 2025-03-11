import { Ionicons } from '@expo/vector-icons'
import { Stack, useRouter } from 'expo-router'
import {
	Platform,
	PlatformColor,
	processColor,
	TouchableOpacity,
} from 'react-native'

export default function AuthLayout() {
	const router = useRouter()

	return (
		<Stack
			screenOptions={({ route }) => ({
				animation: 'default',
				headerTransparent: true,
				headerLeft: ({ tintColor }) =>
					route.name !== 'index' ? (
						<TouchableOpacity onPress={() => router.back()}>
							<Ionicons
								name='chevron-back'
								color={tintColor}
								size={28}
							/>
						</TouchableOpacity>
					) : null,
			})}>
			<Stack.Screen
				name='index'
				options={{
					headerTitle: '',
					gestureEnabled: false,
				}}
			/>
			<Stack.Screen
				name='login'
				options={{
					headerTitle: '',
				}}
			/>
			<Stack.Screen
				name='signup'
				options={{
					headerTitle: '',
				}}
			/>
		</Stack>
	)
}
