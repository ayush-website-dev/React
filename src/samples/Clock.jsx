import React, { useState } from "react";

function Clock(){

    let date1 = new Date().toLocaleTimeString();
    const [data, setData] = useState(date1);


    setInterval(() => {
        let date1 = new Date().toLocaleTimeString();
        setData(date1);
    }, 1000);

    return (
        <>
            <h1>{data}</h1>

           

        </>
    );
}

export default Clock;