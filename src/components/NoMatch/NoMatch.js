import React from 'react';

const NoMatch = () => {
    var style ={
        backgroundColor :"red",
        border : "1px solid red",
        textAlign : "center"

    }
    return (
        <div style={style}>
        <h3>Sorry Page Not Found</h3>
        <h4>404 Error</h4>
    </div>
    );
};

export default NoMatch;