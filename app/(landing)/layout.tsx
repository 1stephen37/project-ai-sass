import React from 'react';

function LandingLayout(props : {children: React.ReactNode}) {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default LandingLayout;