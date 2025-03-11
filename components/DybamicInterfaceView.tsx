import { ReactNode, useState } from 'react'
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	PlatformColor,
	RefreshControl,
	TouchableWithoutFeedback,
	useColorScheme,
	View,
	ViewProps,
} from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '@/constants/Colors'
import { ScrollView } from 'react-native'

interface DynamiInterfaceViewProps {
	children?: ReactNode | null
	style?: ViewProps['style'] | null
	scrollRefresh?: boolean | null
	onScrollRefresh?: ((...params: any[]) => any) | null
}

export function DynamiInterfaceView({
	children,
	style,
	scrollRefresh,
	onScrollRefresh,
}: DynamiInterfaceViewProps) {
	const theme = useColorScheme() ?? 'light'

	const [refreshing, setRefreshing] = useState(false)

	const onRefresh = async () => {
		setRefreshing(true)

		if (onScrollRefresh) {
			const result = onScrollRefresh()
			if (result instanceof Promise) {
				await result
			}

			result.finally(() => {
				setRefreshing(false)
				console.log(result)
			})
			return
		}
	}

	return (
		<SafeAreaProvider
			style={{
				flex: 1,
				backgroundColor:
					Platform.OS === 'ios'
						? PlatformColor('systemBackground')
						: Colors[theme].primaryColor,
			}}>
			<SafeAreaView style={{ flex: 1 }}>
				<TouchableWithoutFeedback
					onPress={Keyboard.dismiss}
					accessible={false}>
					<KeyboardAvoidingView
						style={{ flex: 1 }}
						behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
						keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>
						<ScrollView
							contentContainerStyle={{ flexGrow: 1 }}
							keyboardShouldPersistTaps='always'
							keyboardDismissMode='on-drag'
							overScrollMode='always'
							pinchGestureEnabled={false}
							refreshControl={
								scrollRefresh && onScrollRefresh ? (
									<RefreshControl
										refreshing={refreshing}
										onRefresh={onRefresh}
									/>
								) : undefined
							}>
							<View style={[{ flex: 1 }, style]}>{children}</View>
						</ScrollView>
					</KeyboardAvoidingView>
				</TouchableWithoutFeedback>
			</SafeAreaView>
		</SafeAreaProvider>
	)
}
