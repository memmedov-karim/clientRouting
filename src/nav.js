import React from 'react';

import {Link} from "react-router-dom";

export default function Nav(){
    return (
        <div>
            <Link to = "/">Haqqında</Link>
            <Link to = "/contact">Əlaqə məlumatları</Link>
            <Link to = "/contact:id">Əlaqə id</Link>
            <Link to= "/ish">İş nümunələri</Link>
        </div>
       
    )
}
