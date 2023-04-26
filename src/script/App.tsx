import React from "react";
import { Button, Text, View } from "react-native";
import NavigatorStack from "./navigation/NavigatorStack";

const App = () => {
    return <NavigatorStack />;
};

// const App = () => {
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
//             <Button title={"Navigate Stack Navigator"} />
//             <Button title={"Navigate Bottom Tab Navigator"} />
//         </View>
//     );
// };

export default App;
