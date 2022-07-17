
import React from "react";

function DisplayData (props) {

    return (
        <React.Fragment>
            <h1>FirstName : {props.firstName}</h1>
            <h1>LastName : {props.lastName}</h1>
        </React.Fragment>
    )
}

export default DisplayData;