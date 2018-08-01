import React from "react";
import { StackNavigator } from "react-navigation";
import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";
export const NavigationApp = StackNavigator({
    Home: {
        screen: Home
    },
    Signup: {
        screen: Signup
    },
    Login: {
        screen: Login
    },
});