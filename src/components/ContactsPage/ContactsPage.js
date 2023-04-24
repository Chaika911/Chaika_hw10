import React, { useState } from "react";

const ContactsPage = () => {
    const [error, setError] = useState(false);

    const handleError = () => {
        setError(true)
    }
    if(error){
        return new Error('<<\\Error\\>>')
    }
    return(
        <>
            <h1>ContactsPage</h1>
            <br/>
            <button
                onClick={handleError}>
                click for create ERROR
            </button>
        </>
    )

}

export default ContactsPage;