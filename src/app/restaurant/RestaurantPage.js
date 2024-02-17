import React from "react";

export const RestaurantPage = () => {

    return (
        <>
            <div className="global-container">
                <div className="global-grid-container">

                    <div className="date-time">
                        <div className="date-time-container-wrapper">
                            <div className="date-time-container">
                                <div className="date">
                                    <span id="date"></span>
                                </div>
                                <div className="time">
                                    <span id="time"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu">
                        <div className="main-buttons-container">
                            <div className="main-button selected-button" id="main-view-button">
                                <span className="black-bold">Widok sali</span>
                            </div>
                            <div className="main-button" id="take-away-button">
                    <span className="black-bold">
                        Na wynos
                    </span>
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

                    <div className="content">
                        <div className="door-element">
                            <span className="info-text">Wejście</span>
                        </div>
                        <div className="tables-box" id="tables-box">
                            <div className="grid-container-tables">
                                <div id="r-table-1" className="table-icon table-default left-side-1 r-table-1">
                                    <span className="table-number r-table-1">1</span>
                                </div>
                                <div id="r-table-2" className="table-icon table-default left-side-2 r-table-2">
                                    <span className="table-number r-table-2">2</span>
                                </div>
                                <div id="r-table-3" className="table-icon table-default left-side-3 r-table-3">
                                    <span className="table-number r-table-3">3</span>
                                </div>
                                <div id="r-table-4" className="table-icon table-default left-side-4 r-table-4">
                                    <span className="table-number r-table-4">4</span>
                                </div>
                                <div id="r-table-5" className="s-table-icon s-table-default left-side-5 r-table-5">
                                    <span className="table-number r-table-5">5</span>
                                </div>
                                <div id="r-table-6" className="s-table-icon s-table-default middle-row-5 r-table-6">
                                    <span className="table-number r-table-6">6</span>
                                </div>
                                <div id="r-table-7" className="table-icon table-default middle-row-4 r-table-7">
                                    <span className="table-number r-table-7">7</span>
                                </div>
                                <div id="r-table-8" className="table-icon table-default middle-row-3 r-table-8">
                                    <span className="table-number r-table-8">8</span>
                                </div>
                                <div id="r-table-9" className="table-icon table-default middle-row-2 r-table-9">
                                    <span className="table-number r-table-9">9</span>
                                </div>
                                <div id="r-table-10" className="table-icon table-default middle-row-1 r-table-10">
                                    <span className="table-number r-table-10">10</span>
                                </div>
                                <div id="r-table-11" className="s-table-icon s-table-default middle-row-10 r-table-11">
                                    <span className="table-number r-table-11">11</span>
                                </div>
                                <div id="r-table-12" className="table-icon table-default middle-row-9 r-table-12">
                                    <span className="table-number r-table-12">12</span>
                                </div>
                                <div id="r-table-13" className="table-icon table-default middle-row-8 r-table-13">
                                    <span className="table-number r-table-13">13</span>
                                </div>
                                <div id="r-table-14" className="table-icon table-default middle-row-7 r-table-14">
                                    <span className="table-number r-table-14">14</span>
                                </div>
                                <div id="r-table-15" className="s-table-icon s-table-default right-side-5 r-table-15">
                                    <span className="table-number r-table-15">15</span>
                                </div>
                                <div id="r-table-16" className="table-icon table-default right-side-4 r-table-16">
                                    <span className="table-number r-table-16">16</span>
                                </div>
                                <div id="r-table-17" className="table-icon table-default right-side-3 r-table-17">
                                    <span className="table-number r-table-17">17</span>
                                </div>
                                <div id="r-table-18" className="table-icon table-default right-side-2 r-table-18">
                                    <span className="table-number r-table-18">18</span>
                                </div>
                                <div className="bar-element middle-row-6">
                                    <span className="info-text">Kasa</span>
                                </div>
                                <div className="column-element right-side-1">
                                </div>
                                <div className="kitchen-element">
                                    <span className="info-text">Kuchnia</span>
                                </div>
                            </div>
                        </div>
                    </div>

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
                                    <div className="logout-icon"></div>
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

                </div>
            </div>
        </>
    );
}
