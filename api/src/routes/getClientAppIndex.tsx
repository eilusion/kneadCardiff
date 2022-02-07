import * as React from "react";

type TClientEntryProps = {
    jsBundleName: string;
    cssBundleName: string;
};

export const getClientAppIndex = (props: TClientEntryProps): JSX.Element =>
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href={`/dist/${props.cssBundleName}`}></link>
        </head>

        <body>
            <div id="app">Somethings here</div>
            <script src={`/dist/${props.jsBundleName}`}></script>
        </body>
    </html>