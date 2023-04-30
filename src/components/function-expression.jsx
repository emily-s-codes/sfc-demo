import { useState } from "react";
import './component.css'

const FunctionExpression = function ({ data }) {
    const [selected, setSelected] = useState(false)
    return (
        <div className={selected ? 'selected data' : 'data'} onClick={() => setSelected(!selected)}>
            <h1>{data.name} {data.last}</h1>
            <p>{data.email}</p>
            <p>{data.job}</p>
        </div>
    )
};

export default FunctionExpression