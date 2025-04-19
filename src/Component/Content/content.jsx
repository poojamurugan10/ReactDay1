import React from 'react';
let name="FSD-WD-B-T-21"
const content = () => {
    const handleSubmit =()=>{
        console.log("Button Clicked");
    }
    return (
        <div>
            {name}
            <h1>Content</h1>
            <button onClick={handleSubmit}>Click me!</button>
            
        </div>
    );
};

export default content;