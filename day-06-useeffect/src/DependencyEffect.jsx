import { useEffect, useState } from "react";

const DependencyEffect = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    useEffect(() => {
        console.log("Count Changed");
    }, [count]);

    return (
        <>
        <center>
            <h2>useEffect with Dependency</h2>

            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <h3>Name : {name}</h3>

            <h3>Count : {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
            </center>
        </>
    );
};

export default DependencyEffect;