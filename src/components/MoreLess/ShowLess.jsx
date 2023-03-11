import { useState, useEffect } from "react";

export function ShowLess({ text, max = 55 }) {

    let [showL, setShowL] = useState(true);

    if (text.length <= 15) {
        return (
            <span>
                {text}
            </span>
        )
    }
    return (
        <span>
            {showL ? text.substring(0, max) : text}
            <a href="#" onClick={(event) => {
                event.preventDefault();
                setShowL(!showL)
            }}>
                {showL ? "more" : "less"}
            </a>
        </span>

    )

}