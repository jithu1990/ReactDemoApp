import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home";
import  MarkDown from "./components/MarkDown";
import Attribute from "./components/Attribute";
import BootBox from "./components/BootBox";
import DangerHtml from "./components/DangerHtml";
import noreferrer from "./components/noreferrer";

const MainRouter = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dangerhtml" component={DangerHtml} />
            <Route exact path="/attribute" component={Attribute} />
            <Route exact path="/markdown" component={MarkDown} />
            <Route exact path="/bootbox" component={BootBox} />
            <Route exact path="/noreferrer" component={noreferrer} />

            {/* <Route exact path="/" component={Signin} /> */}
        </Switch>
    </div>
);

export default MainRouter;
