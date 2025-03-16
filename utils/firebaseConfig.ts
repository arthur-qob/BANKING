import { initializeApp } from 'firebase/app'
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signInWithEmailAndPassword,
} from 'firebase/auth'
import Constants from 'expo-constants'

// For future reference when implementing AsyncStorage and firebase persistance (native modules)

// npx expo install @react-native-async-storage/async-storage

// import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
	apiKey: Constants?.expoConfig?.extra?.apiKey,
	authDomain: Constants?.expoConfig?.extra?.authDomain,
	projectId: Constants?.expoConfig?.extra?.projectId,
	storageBucket: Constants?.expoConfig?.extra?.storageBucket,
	messagingSenderId: Constants?.expoConfig?.extra?.messagingSenderId,
	appId: Constants?.expoConfig?.extra?.appId,
	measurementId: Constants?.expoConfig?.extra?.measurementId,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { app, auth, provider }
