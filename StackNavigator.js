import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import useAuth from './hooks/useAuth';
import ChatScreen from './Screens/ChatScreen';
import HomeScreen from './Screens/HomeScreen';
import LoginScreen from './Screens/LoginScreen';
import MatchedScreen from './Screens/MatchedScreen';
import ModalScreen from './Screens/ModalScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
	const { user } = useAuth();

	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false
			}}
		>
			{user ? (
				<>
					<Stack.Group>
						<Stack.Screen name="Home" component={HomeScreen} />
						<Stack.Screen name="Chat" component={ChatScreen} />
					</Stack.Group>
					<Stack.Group screenOptions={{ presentation: 'modal' }}>
						<Stack.Screen name="Modal" component={ModalScreen} />
					</Stack.Group>
					<Stack.Group
						screenOptions={{ presentation: 'transparentModal' }}
					>
						<Stack.Screen name="Match" component={MatchedScreen} />
					</Stack.Group>
				</>
			) : (
				<Stack.Screen name="Login" component={LoginScreen} />
			)}
		</Stack.Navigator>
	);
};

export default StackNavigator;
