import React, { useState } from 'react';
import { hot } from "react-hot-loader/root";

import Intro from './Intro';
import Credentials from './Credentials';
import Form from './Form';

function App() {
    const [hasLead, setHasLead] = useState(false);
    const [hasClickedButton, setHasClickedButton] = useState(false);

    function updateValues(buttonClick) {
        setHasLead(buttonClick);
        setHasClickedButton(true);
    }

    return(
        <div className="app">
            {!hasClickedButton && (<Intro onBtnClick={updateValues} />)}
            {hasClickedButton ? (
                hasLead ? (
                    <Credentials />
                ) : (
                    <Form />
                )
            ) : null}
        </div>
    )
}

export default hot(App);