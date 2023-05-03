import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    NAVIGATOR_TAB_BOTTOM,
    Params,
    SCREEN_DATE_PICKER,
    SCREEN_MAIN,
    SCREEN_SLIDER,
    SCREEN_TOGGLE_SWITCH,
} from "./screens";
import ScreenMain from "../ui/Main/ScreenMain";
import ScreenSlider from "../ui/Slider/ScreenSlider";
import ScreenToggleSwitch from "../ui/Toggle/ScreenToggleSwitch";
import ScreenDatePicker from "../ui/DatePicker/ScreenDatePicker";

const Tab = createBottomTabNavigator<Params[typeof NAVIGATOR_TAB_BOTTOM]>();

const NavigatorBottomTab = () => {
    return (
        <Tab.Navigator>
            <Tab.Group screenOptions={{ headerShown: false }}>
                <Tab.Screen name={SCREEN_MAIN} component={ScreenMain} />
                <Tab.Screen name={SCREEN_SLIDER} component={ScreenSlider} />
                <Tab.Screen name={SCREEN_TOGGLE_SWITCH} component={ScreenToggleSwitch} />
                <Tab.Screen name={SCREEN_DATE_PICKER} component={ScreenDatePicker} />
            </Tab.Group>
        </Tab.Navigator>
    );
};

export default NavigatorBottomTab;
