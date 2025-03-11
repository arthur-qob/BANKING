import { Colors } from '@/constants/Colors'
import { Stack } from 'expo-router'
import { StatusBar, useColorScheme } from 'react-native'

export default function RootLayout() {
	const theme = useColorScheme() ?? 'light'

	return (
		<>
			<Stack>
				<Stack.Screen
					name='(auth)'
					options={{
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name='(main)'
					options={{
						headerShown: false,
					}}
				/>
			</Stack>
			<StatusBar
				barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
				backgroundColor={Colors[theme].primaryColor}
				hidden={false}
				translucent={true}
			/>
		</>
	)
}
