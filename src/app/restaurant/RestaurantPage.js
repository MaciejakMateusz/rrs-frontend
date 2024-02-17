import React from "react";
import {DateTime} from "./DateTime";
import {NavMenu} from "./NavMenu";
import {MainTablesView} from "./MainTablesView";
import {RightPanel} from "./RightPanel";

export const RestaurantPage = () => {

    return (
        <>
            <div className="global-container">
                <div className="global-grid-container">
                    <DateTime/>
                    <NavMenu/>
                    <MainTablesView/>
                    <RightPanel/>
                </div>
            </div>
        </>
    );
}
