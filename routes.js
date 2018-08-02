import React from "react";
import { Router,Scene,Stack } from "react-native-router-flux";
import Signup from "./components/signup";
import Login from "./components/login";
import Main from "./components";
import Mobile from "./components/items/mobile";
export default class Routes extends React.Component{
    render(){
        return (
            <Router>
                <Stack key="root">
                    <Scene key="main" component={Main} initial/>
                    <Scene key="signup" component={Signup} title="Sign Up Here"/>
                    <Scene key="login" component={Login} title="Login to Your Account"/>
                    <Scene key="mobiles" component={Mobile} title="Mobile Phones" />
                </Stack>
            </Router>
        )
    }
}