import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session'
import { auth } from './firebaseConfig' // Adjust the path as necessary
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth'
import Constants from 'expo-constants'
import { useEffect, useState } from 'react'
import { Platform } from 'react-native'

WebBrowser.maybeCompleteAuthSession()

export const useLoginWithGoogle = () => {
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const discovery = {
		authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
		tokenEndpoint: 'https://oauth2.googleapis.com/token',
	}

	const platformClientId: string =
		Platform.OS === 'ios'
			? Constants?.expoConfig?.extra?.google_ios_client_id
			: Platform.OS === 'android'
			? Constants?.expoConfig?.extra?.google_android_client_id
			: Constants?.expoConfig?.extra?.google_web_client_id

	const appScheme = Constants?.expoConfig?.scheme?.toString()

	const uri = Google.makeRedirectUri({
		scheme: appScheme,
		preferLocalhost: true,
	})

	console.log(
		`Client ID for this platform: ${platformClientId}\n\nApp's scheme: ${appScheme}\n\nRedirect URI: ${uri}`
	)

	const [request, response, promptAsync] = Google.useAuthRequest(
		{
			clientId: platformClientId,
			redirectUri: uri,
			scopes: ['openid', 'email', 'profile'],
			responseType: 'code',
			usePKCE: true,
		},
		discovery
	)

	useEffect(() => {
		const exchangeCodeForToken = async (code: string) => {
			try {
				const tokenResponse = await fetch(
					'https://oauth2.googleapis.com/token',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/x-www-form-urlencoded',
						},
						body: new URLSearchParams({
							code,
							client_id:
								Constants?.expoConfig?.extra
									?.google_web_client_id, // Web Client ID
							redirect_uri: Google.makeRedirectUri({
								native: 'banking:/oauthredirect',
							}),
							grant_type: 'authorization_code',
							code_verifier: request?.codeVerifier || '',
						}).toString(),
					}
				)

				const tokens = await tokenResponse.json()

				if (tokens.id_token) {
					// Authenticate with Firebase using the ID token
					const credential = GoogleAuthProvider.credential(
						tokens.id_token
					)
					await signInWithCredential(auth, credential)
					console.log('User signed in successfully!')
				} else {
					throw new Error('Failed to obtain ID token')
				}
			} catch (error) {
				console.error('Token exchange error:', error)
				setError('Authentication failed')
			}
		}

		if (response?.type === 'success' && response.params?.code) {
			exchangeCodeForToken(response.params.code)
		} else if (response?.type === 'error') {
			setError('Authentication failed')
		}
	}, [response])

	const handleLoginWithGoogle = async () => {
		setLoading(true)
		await promptAsync()
		setLoading(false)
	}

	return {
		handleLoginWithGoogle,
		loading,
		error,
	}
}
