'use client'

import { usePathname } from 'next/navigation'
const Error = (props) => {
    let location = usePathname();
    return <div className={"main container"}>
        <div className={"error container"}>
            <h1>Error: Page Not Found</h1>
            <h2>LOG:</h2>
            <div className={"log"}>
                <p className={"code"}>console.error( <span>&quot;Playground is Under construction&quot;</span> )</p>
                <p className={"code"}>Nothing found on <span>{location.pathname}</span></p>
                <p className={"code"}>project exited with error code 1</p>
                <p className={"code"}>...</p>
            </div>
            <a href={"/"}>Return to Home</a>
        </div>

        <h1 className={"background_text"}>404</h1>
    </div>
}

export default Error;