import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";

import ImageSliderScreen from "screens/ImageSliderScreen";


const Stack = createStackNavigator();

function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="ImageSliderScreen"
                screenOptions={{
                    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
                }}>

                <Stack.Screen
                    name="ImageSliderScreen"
                    component={ImageSliderScreen}
                    options={{
                        headerShown: false,
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigator;
