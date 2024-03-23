'use client'

import {useState} from "react";
import {LinkedinFilled, TwitterOutlined, GithubOutlined, MailFilled} from '@ant-design/icons'
import Link from "next/link";
function NavigationBar() {
    const [isShow, setShow] = useState(false);

    return (
        <>
            <nav>
                <div>
                    <div >
                        <button
                            onClick={() => {setShow((current) => !current)}}
                            className={`hamburger ${isShow ? 'active':''}`}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                        {/*<h1>hamburger</h1>*/}
                    </div>

                    <a href={''} className={"resume"}>
                        <h1>Resume</h1>
                    </a>
                </div>
            </nav>

            <div className={`sideBar ${isShow ? 'active':''}`}>
                <ul>
                    <li onClick={() => {setShow(false)}}><Link href="/">
                        <h2>01</h2><h2>//&nbsp;home</h2>
                    </Link></li>
                    <li onClick={() => {setShow(false)}}><Link href="/#projects">
                        <h2>02</h2><h2>//&nbsp;projects</h2>
                    </Link></li>
                    <li onClick={() => {setShow(false)}}><Link href="/playground">
                        <h2>03</h2><h2>//&nbsp;playground</h2>
                    </Link></li>
                    <li onClick={() => {setShow(false)}}><Link href="/contact">
                        <h2>04</h2><h2>//&nbsp;contact</h2>
                    </Link></li>
                </ul>

                <div className={'contact-icons'}>
                    <div>
                        <a href={"https://linkedin.com/in/dhir0hit"} target={"_blank"}>
                            <LinkedinFilled />
                        </a>
                        <a href={"https://twitter.com/dhir0hit"} target={"_blank"}>
                            <TwitterOutlined />
                        </a>
                        <a href={"https://github.com/dhir0hit"} target={"_blank"}>
                            <GithubOutlined />
                        </a>
                        <a href={"mailto:dhir0hit.com"} target={"_blank"}>
                            <MailFilled />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar;




