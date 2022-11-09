import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const AuthNav = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='login' component={loginScreen} />
            <Stack.Screen name='sighnUp' component={signUpScreen} />
        </Stack.Navigator>
    )
}

export default AuthNav