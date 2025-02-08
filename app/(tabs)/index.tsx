import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import library from "../library";
import liked from "../liked";
import suggested from "../suggested";

const Tab = createMaterialTopTabNavigator();

export default function () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={suggested} />
      <Tab.Screen name="Liked" component={liked} />
      <Tab.Screen name="Library" component={library} />
    </Tab.Navigator>
  );
}
