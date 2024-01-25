import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import './errorPage.css';

function ErrorPage() {
    const error = useRouteError();
    const navigate = useNavigate();
    return (
        <div id="error-page">
            <div className="OppsAndSorryholderErrorPage">
                <h1 className="OppsWordErrorPage">OOPS!</h1>
                <div className="SorryWordsErrorPage">
                    Sorry, an unexpected error has occurred.
                </div>
            </div>
            <div className="explainfromRouter">
                <i>
                    {
                        error.statusText || error.message
                    }
                </i>
            </div>
            <button className="gotoHomePageErrorPage" onClick={() => navigate('/')}>Go Home</button>
        </div>
    );
}

export default ErrorPage;
