import React from 'react';

const Rainbow = (WrappedComponent) =>{
    const colours = ['red','yellow','blue','pink','purple','green'];
    const randomColour = colours[ Math.floor(Math.random() * 5) ];
    //console.log(randomColour)
    const className = randomColour + '-text';

    // Return a functional component 
    return (props) => {
        return (
            <div className = {className}>
                <WrappedComponent { ...props }/>
            </div>
        )
    }
}

export default Rainbow;