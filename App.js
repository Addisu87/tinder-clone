import React from 'react';
import StackNavigator from './StackNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs(); // Ignore log notification by message
import { AuthProvider } from './hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
	return (
		<NavigationContainer>
			<AuthProvider>
				<StackNavigator />
			</AuthProvider>
		</NavigationContainer>
	);
}
