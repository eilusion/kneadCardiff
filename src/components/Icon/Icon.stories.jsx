import React from "react";
import * as R from "ramda";
import { Icon } from "./Icon";
import { Icons } from "./../../icons/Icons";

export default {
    component: Icon,
    title: "Components/Icon",
};

export const Default = () => {
    return (
        <div>
            {R.pipe(
                R.toPairs,
                R.map(([key, value]) => (
                    <Icon key={key} IconElement={value} />
                )),
            )(Icons)}
        </div>
    );
};
