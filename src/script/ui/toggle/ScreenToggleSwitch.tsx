import React, { useState } from "react";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_TOGGLE_SWITCH } from "../../navigation/screens";
import Container from "../_common/Container";
import DefaultBoldText from "../_common/Default/DefaultBoldText";
import ToggleSwitch from "toggle-switch-react-native";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_TOGGLE_SWITCH>;

const ScreenToggleSwitch = ({ route, navigation }: Props) => {
    const { colors } = useTheme();

    const [isOn, setOn] = useState(false);

    return (
        <Container style={styles.container}>
            <DefaultBoldText>{isOn}</DefaultBoldText>
            <ToggleSwitch
                isOn={isOn}
                onColor="green"
                offColor="red"
                label="Example label"
                labelStyle={{ color: "black", fontWeight: "900" }}
                size="large"
                onToggle={(_isOn) => setOn(_isOn)}
            />
        </Container>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ScreenToggleSwitch;
