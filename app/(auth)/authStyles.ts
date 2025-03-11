import { Colors } from '@/constants/Colors'
import { Platform, PlatformColor, StyleSheet } from 'react-native'

const useStyles = (theme?: string) => {
	return StyleSheet.create({
		mainContainer: {
			padding: 25,
			justifyContent: 'flex-start',
			alignItems: 'center',
			gap: 50,
		},
		input: {
			width: '100%',
			paddingVertical: 10,
			borderBottomWidth: 1,
			borderBottomColor:
				Platform.OS === 'ios'
					? PlatformColor('label')
					: theme === 'light'
					? 'rgb(0, 0, 0)'
					: 'rgb(255, 255, 255)',
			color:
				Platform.OS === 'ios'
					? PlatformColor('label')
					: theme === 'light'
					? 'rgb(0, 0, 0)'
					: 'rgb(255, 255, 255)',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			fontSize: 20,
		},
		title: {
			marginBottom: '50%',
		},
		button: {
			padding: 10,
			minWidth: '100%',
			borderRadius: 10,
			backgroundColor:
				Platform.OS === 'ios'
					? PlatformColor('systemBlue')
					: 'rgb(10, 132, 255)',
		},
		text: {
			fontSize: 20,
			textAlign: 'center',
			color:
				Platform.OS === 'ios'
					? PlatformColor('label')
					: theme === 'light'
					? 'black'
					: 'white',
		},
		separator: {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			gap: 10,
		},
		separatorLines: {
			width: '35%',
			borderBottomWidth: 1.5,
			borderBottomColor:
				Platform.OS === 'ios'
					? PlatformColor('label')
					: Colors[theme as 'light' | 'dark'].contrastPrimaryColor,
		},
		separatorText: {},
	})
}

export default useStyles
