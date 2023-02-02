import { AppRegistry } from "react-native";
import App from "./src/script/App";
import { name as appName } from "./src/script/app.json";

const Root = () => {
  return (
    <>
      <App />
    </>
  );
};
AppRegistry.registerComponent(appName, () => Root);
