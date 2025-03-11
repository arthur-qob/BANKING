import { Colors } from '@/constants/Colors'
import { BlurView } from 'expo-blur'
import { Tabs } from 'expo-router'
import {
	OpaqueColorValue,
	PlatformColor,
	processColor,
	StyleSheet,
} from 'react-native'
import { Platform, useColorScheme, View } from 'react-native'

export default function TabsLayout() {
	const theme = useColorScheme() ?? 'light'

	return (
		<Tabs
			screenOptions={{
				tabBarStyle: {
					position: 'absolute',
					borderTopWidth: 0,
				},
				tabBarInactiveTintColor:
					Platform.OS === 'ios' || Platform.OS === 'macos'
						? (processColor(PlatformColor('systemGray2')) as
								| string
								| undefined) // ✅ Convert to string
						: Platform.OS === 'android'
						? (processColor(
								PlatformColor('@android:color/darker_gray')
						  ) as string | undefined)
						: 'gray',

				tabBarActiveTintColor:
					Platform.OS === 'ios' || Platform.OS === 'macos'
						? (processColor(PlatformColor('label')) as
								| string
								| undefined) // ✅ Convert to string
						: theme === 'light'
						? 'black'
						: 'white',

				tabBarBackground: () =>
					Platform.OS === 'ios' ? (
						<BlurView
							intensity={100}
							tint={
								theme === 'light'
									? 'systemUltraThinMaterialLight'
									: 'systemUltraThinMaterialDark'
							}
							style={StyleSheet.absoluteFill}
						/>
					) : (
						<View
							style={{
								flex: 1,
								backgroundColor: Colors[theme].tabBarBackground,
							}}></View>
					),
			}}>
			<Tabs.Screen
				name='index'
				options={{
					headerShown: false,
					tabBarLabel: 'Dashboard',
				}}
			/>

			<Tabs.Screen
				name='settings'
				options={{
					headerShown: false,
					tabBarLabel: 'Settings',
				}}
			/>
		</Tabs>
	)
}
