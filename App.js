import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigatorContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';

export default function App() {
	return (
		<NavigatorContainer>
			{/* HOC - Higher Order Component */}
			<AuthProvider>
				{/* Passes down the cool auth stuff to children.. */}
				<StackNavigator />
			</AuthProvider>
		</NavigatorContainer>
	);
}
