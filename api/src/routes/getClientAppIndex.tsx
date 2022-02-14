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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
            <link href="https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Montserrat+Subrayada:wght@400;700&family=Quicksand:wght@300;400;500;600&display=swap" rel="stylesheet"></link>
        </head>

        <body>
            <div id="app">Somethings here</div>
            <script src={`/dist/${props.jsBundleName}`}></script>
        </body>
    </html>