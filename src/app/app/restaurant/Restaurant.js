import React from "react";

export const Restaurant = () => {

    return (
        <>
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Witaj, zaloguj się!</h1>
            </div>
            <form className="user">
                <button className="btn btn-primary btn-user btn-block" style={{fontSize: '1.1rem'}}>
                    Gratulacje, jesteś w panelu restauracji! :)
                </button>
            </form>
            <hr/>
        </>
    );
}
