import React from 'react';

function AuthLayout(props : {
    children : React.ReactNode
}) {
    return (
        <div> {props.children} </div>
    );
}

export default AuthLayout;