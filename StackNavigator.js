import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator>
			{user ? (
				<>
					<Stack.Screen name="Home" component={HomeScreen} />
					<Stack.Screen name="Chat" component={ChatScreen} />
				</>
			) : (
				<Stack.Screen name="Login" component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};

export default StackNavigator;
