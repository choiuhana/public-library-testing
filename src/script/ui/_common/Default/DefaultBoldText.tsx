import React from "react";
import { Text, TextProps, TextStyle } from "react-native";

interface Props extends TextProps {
    style: undefined | TextStyle;
}

const DefaultBoldText = (props: Props) => {
    const { style, children } = props;

    return (
        <Text
            {...props}
            allowFontScaling={false} // TODO 비율 대로 마크업 했을 때 바뀔 가능성 있음
            style={[
                style,
                {
                    fontFamily: style?.fontFamily || "Pretendard-Bold",
                },
            ]}>
            {children}
        </Text>
    );
};

export default DefaultBoldText;
