import React from 'react';

const Film = ({name, children, url}) => {

    return(
        <>
            <h4>{children}</h4>
            <p>{name}</p>
            <p>{url}</p>
        </>
    )

}

export default Film;