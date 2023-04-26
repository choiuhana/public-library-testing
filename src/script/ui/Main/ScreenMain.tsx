import React from "react";
import { StyleSheet } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch } from "../../../common/hooks";
import { resetAll } from "../../redux/slice/accountSlice";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_MAIN } from "../../navigation/screens";
import Container from "../_common/Container";
import DefaultText from "../_common/Default/DefaultText";
import DefaultButton from "../_common/Default/DefaultButton";

type ScreenMainProps = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_MAIN>;

const ScreenMain = ({ route, navigation }: ScreenMainProps) => {
    const dispatch = useAppDispatch();
    const { colors } = useTheme();

    return (
        <Container style={styles.container}>
            <DefaultText style={styles.greeting}>Main Screen</DefaultText>
            <DefaultButton
                text={"logout"}
                textStyle={{
                    color: colors.on_primary,
                }}
                style={{ backgroundColor: colors.primary }}
                onPress={() => {
                    dispatch(resetAll());
                }}
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
    greeting: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 16,
    },
});

export default ScreenMain;
