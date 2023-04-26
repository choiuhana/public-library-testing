import React from "react";
import { Text, TextProps } from "react-native";

const DefaultText = (props: TextProps) => {
    const { style, children } = props;

    return (
        <Text
            {...props}
            allowFontScaling={false} // TODO 비율 대로 마크업 했을 때 바뀔 가능성 있음
            style={[
                style,
                {
                    //  TODO 폰트 적용
                    // fontFamily: style?.fontFamily || 'Pretendard-Regular',
                },
            ]}>
            {children}
        </Text>
    );
};

export default DefaultText;
