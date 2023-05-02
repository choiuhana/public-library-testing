import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_MAIN, SCREEN_SLIDER, SCREEN_TOGGLE_SWITCH } from "./screens";
import ScreenMain from "../ui/Main/ScreenMain";
import ScreenSlider from "../ui/Slider/ScreenSlider";
import ScreenToggleSwitch from "../ui/toggle/ScreenToggleSwitch";

const Tab = createBottomTabNavigator<Params[typeof NAVIGATOR_TAB_BOTTOM]>();

const NavigatorBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_MAIN} component={ScreenMain} />
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_SLIDER} component={ScreenSlider} />
            <Tab.Screen options={{ headerShown: false }} name={SCREEN_TOGGLE_SWITCH} component={ScreenToggleSwitch} />
        </Tab.Navigator>
    );
};

export default NavigatorBottomTab;
