import React from "react";
import {Link} from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <h2>Welcome!</h2>
            <p>Choose an option:</p>
            <Link to = "/accounts">Accounts</Link>
            <br/><br/>
            <Link to = "/customers">Customers</Link>
        </div>
    );
};
export default Landing;