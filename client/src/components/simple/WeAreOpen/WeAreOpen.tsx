import React from "react";
import "./WeAreOpen.css";

type TWeAreOpenProps = {
    openText: string,
    availableText: string
}

export const WeAreOpen = (props: TWeAreOpenProps) => {
    return (
        <div className="WeAreOpen">
            <h1 className="WeAreOpen__openText">{props.openText}</h1>
            <h2 className="WeAreOpen__availableText">{props.availableText}</h2>
        </div>
    )
}