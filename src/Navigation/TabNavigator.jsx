import {
    StyleSheet,
    View,
} from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import ShopStack from "./ShopStack";
import CartStack from "./CartStack";

import {
    AntDesign,
    Ionicons,
    MaterialIcons,
    Octicons
} from "@expo/vector-icons";
import OrderStack from "./OrderStack";
import MyProfileStack from "./MyProfileStack";
import { colors } from "../Global/Colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
        }}
    >
        <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <AntDesign
                                name="home"
                                size={27}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <MaterialIcons
                                name="shopping-cart"
                                size={28}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View>
                            <Ionicons
                                name="ios-list-circle-outline"
                                size={29}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
        <Tab.Screen
            name="MyProfile"
            component={MyProfileStack}
            options={{
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={styles.item}>
                            <Octicons
                                name="person"
                                size={28}
                                color={
                                    focused ? "black" : "gray"
                                }
                            />
                        </View>
                    );
                },
            }}
        />
    </Tab.Navigator>
)
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.cyanBeltive,
        shadowColor: "black",
        height: 60,
    }
})