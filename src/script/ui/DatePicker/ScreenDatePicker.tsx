import React, { useState } from "react";
import DatePicker from "react-native-date-picker";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NAVIGATOR_TAB_BOTTOM, Params, SCREEN_DATE_PICKER } from "../../navigation/screens";
import { useTheme } from "@react-navigation/native";
import Container from "../_common/Container";
import { StyleSheet } from "react-native";

type Props = NativeStackScreenProps<Params[typeof NAVIGATOR_TAB_BOTTOM], typeof SCREEN_DATE_PICKER>;

const ScreenDatePicker = ({ route, navigation }: Props) => {
    const { colors } = useTheme();

    const [date, setDate] = useState(new Date());

    return (
        <Container style={styles.container}>
            <DatePicker date={date} onDateChange={setDate} />
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

export default ScreenDatePicker;
