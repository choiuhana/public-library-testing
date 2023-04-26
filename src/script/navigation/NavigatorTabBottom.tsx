import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_MAIN } from "./screens";
import ScreenMain from "../ui/Main/ScreenMain";

const Tab = createBottomTabNavigator<Params[typeof NAVIGATOR_TAB_BOTTOM]>();

const NavigatorBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_MAIN} component={ScreenMain} />
        </Tab.Navigator>
    );
};

export default NavigatorBottomTab;
