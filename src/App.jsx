//import part
import React from 'react';
import CompB from './Component/CompB/CompB';
import CompA from './Component/CompA/CompA';
import CompC from './Component/CompC/CompC';

const App = () => {
    //js part
    return (
        //html part
        <>
            <h1 id="app">App Component</h1>
            <CompB />
            <CompA />
            <CompC />
        </>
    );
};
//export part
export default App;