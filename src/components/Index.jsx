import React, { useState } from "react";

function Index() {
    const [count, setCount] = useState(0);

    return (
        <React.Fragment>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Click Here</button>
        </React.Fragment>
    )
}
export default Index;