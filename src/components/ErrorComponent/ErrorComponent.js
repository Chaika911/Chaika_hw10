import React, { useState } from "react";

const ErrorComponent = () => {

    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true)
    }
    if(error){
        return new Error('<<\\Error\\>>')
    }
    return(
        <>
            <h1>ErrorComponent</h1>
            <p>some text...</p>
            <br/>
            <button
                onClick={handleError}>
                click for create ERROR
            </button>
        </>
    )
}

export default ErrorComponent;