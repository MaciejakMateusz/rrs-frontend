import React from "react";
import {deleteCookie} from "../../utils";

export const RightPanel = () => {

    const logoutHandler = () => {
        deleteCookie("jwt");
        window.location.href = `/login`;
    }

    return (
        <div className="right-column" id="right-column">
            <div className="table-button-list-container" id="table-list-container">
                <div id="l-table-1" className="table-button-list"><span
                    className="l-table-1">Stolik 1</span></div>
                <div id="l-table-2" className="table-button-list"><span
                    className="l-table-2">Stolik 2</span></div>
                <div id="l-table-3" className="table-button-list"><span
                    className="l-table-3">Stolik 3</span></div>
                <div id="l-table-4" className="table-button-list"><span
                    className="l-table-4">Stolik 4</span></div>
                <div id="l-table-5" className="table-button-list"><span
                    className="l-table-5">Stolik 5</span></div>
                <div id="l-table-6" className="table-button-list"><span
                    className="l-table-6">Stolik 6</span></div>
                <div id="l-table-7" className="table-button-list"><span
                    className="l-table-7">Stolik 7</span></div>
                <div id="l-table-8" className="table-button-list"><span
                    className="l-table-8">Stolik 8</span></div>
                <div id="l-table-9" className="table-button-list"><span
                    className="l-table-9">Stolik 9</span></div>
                <div id="l-table-10" className="table-button-list"><span
                    className="l-table-10">Stolik 10</span></div>
                <div id="l-table-11" className="table-button-list"><span
                    className="l-table-11">Stolik 11</span></div>
                <div id="l-table-12" className="table-button-list"><span
                    className="l-table-12">Stolik 12</span></div>
                <div id="l-table-13" className="table-button-list"><span
                    className="l-table-13">Stolik 13</span></div>
                <div id="l-table-14" className="table-button-list"><span
                    className="l-table-14">Stolik 14</span></div>
                <div id="l-table-15" className="table-button-list"><span
                    className="l-table-15">Stolik 15</span></div>
                <div id="l-table-16" className="table-button-list"><span
                    className="l-table-16">Stolik 16</span></div>
                <div id="l-table-17" className="table-button-list"><span
                    className="l-table-17">Stolik 17</span></div>
                <div id="l-table-18" className="table-button-list"><span
                    className="l-table-18">Stolik 18</span></div>
            </div>
            <div className="order-details-panel d-none" id="order-details-panel">
                <div className="grid-container-order-details">
                    <div className="table-number-section">
                        <span id="table-number"></span>
                        <p className="table-number-section-order-id" id="order-id"></p>
                        <p className="table-number-section-order-time" id="order-time"></p>
                    </div>
                    <div className="order-details-section no-button" id="order-details-section">
                        <div className="ordered-items-section" id="order-details">

                        </div>
                        <div id="ordered-total-amount-section">
                            <div className="ordered-total-amount-section">
                                <div className="total-amount">
                                    <span>Do zapłaty:</span>
                                </div>
                                <div className="total-price">
                                    <span className="total-price-span"></span>
                                </div>
                            </div>
                        </div>
                        <div id="bill-requested-finalize-section" className="d-none">
                            <div className="finalize-order-section">
                                <div className="payment-method">
                                    <span>Płatność:</span>
                                </div>
                                <div className="method">
                                    <span id="p-method"></span>
                                </div>
                                <div className="total-amount">
                                    <span>Do zapłaty:</span>
                                </div>
                                <div className="total-price">
                                    <span className="total-price-span"></span>
                                </div>
                                <form
                                    className="finalize-button"
                                    id="finalize-button">
                                    <span>Wystaw rachunek</span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-column-info-container">
                <div id="right-bottom-info-wrapper">
                    <p className="info-container-text" id="free-tables">Wolne: 0</p>
                    <p className="info-container-text" id="occupied-tables">Zajęte: 0</p>
                    <p className="info-container-text" id="booked-tables">Zarezerwowane: 0</p>
                    <div className="logout-button" id="logout-button">
                        <div className="logout-icon" onClick={logoutHandler}></div>
                    </div>
                </div>
                <div id="waiter-call-wrapper" className="d-none">
                    <div className="waiter-call-container">
                        <div className="waiter-call-info">
                            <span className="waiter-call-icon"></span>
                            <div className="waiter-text-area">
                                <span>Oczekuje na kelnera</span>
                            </div>
                            <form className="resolve-call-button"
                                  id="resolve-call-form">
                                <span>Potwierdź</span>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}