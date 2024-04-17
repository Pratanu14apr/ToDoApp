// navigation.js
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/Login/Login';
import Register from '../auth/Register/Register';

const Stack = createStackNavigator();

const Navigation = () => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
};

export default Navigation;
