import React from "react";

export const NavMenu = () => {
    return (
        <div className="menu">
            <div className="main-buttons-container">
                <div className="main-button selected-button" id="main-view-button">
                    <span className="black-bold">Widok sali</span>
                </div>
                <div className="main-button" id="take-away-button">
                    <span className="black-bold">Na wynos</span>
                </div>
                <div className="inactive-main-button" id="reservations-button">
                    <span className="black-bold">Rezerwacje</span>
                </div>
                <div className="main-button" id="menu-button">
                    <span className="black-bold">Menu</span>
                </div>
                <div className="main-button" id="finalized-orders-button">
                    <span className="black-bold">Historia</span>
                </div>
            </div>
        </div>
    );
}