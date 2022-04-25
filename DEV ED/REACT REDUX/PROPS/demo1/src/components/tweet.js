import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
    return (
        <>
            <h2>Name: {props.name}</h2>
            <h3>Message: {props.message}</h3>
            <button>Delete</button>
            <button>Like</button>
        </>
    );
}

Tweet.propTypes = {};

export default Tweet;
