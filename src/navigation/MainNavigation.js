import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";


const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName=""
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
