import React, { useState } from "react";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_SLIDER } from "../../navigation/screens";
import Container from "../_common/Container";
import DefaultBoldText from "../_common/Default/DefaultBoldText";
import Slider from "@react-native-community/slider";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_SLIDER>;

const ScreenSlider = ({ route, navigation }: Props) => {
    const { colors } = useTheme();

    const [slideNumber, setSlideNumber] = useState(0);

    return (
        <Container style={styles.container}>
            <DefaultBoldText>{slideNumber}</DefaultBoldText>
            <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={0}
                maximumValue={10}
                minimumTrackTintColor={colors.secondary}
                maximumTrackTintColor={colors.primary}
                onValueChange={(value) => {
                    setSlideNumber(value);
                }}
                value={slideNumber}
                step={5}
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

export default ScreenSlider;
