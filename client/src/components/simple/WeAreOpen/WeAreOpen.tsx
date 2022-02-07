import React from "react";
import "./WeAreOpen.css";

type TWeAreOpenProps = {
    openText: string,
    availableText: string
}

export const WeAreOpen = (props: TWeAreOpenProps) => {
    return (
        <div className="WeAreOpen">
            <h1 className="OpenText">{props.openText}</h1>
            <h2 className="AvailableText">{props.availableText}</h2>
        </div>
    )
}