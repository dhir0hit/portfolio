'use client'

import { CaretDownOutlined, CloseOutlined, LoadingOutlined, CheckOutlined} from '@ant-design/icons';
import {useRef, useState} from "react";

const Contact = () => {
    const [openDropDown, setOpenDropDown] = useState(false);
    const [purposeOfContact, setPurposeOfContact] = useState("Purpose of contact");

    const [sendMailState, SetSendMailState] = useState("")
    const [error, setError] = useState("");

    const NameRef = useRef();
    const EmailRef = useRef();
    const SubjectRef = useRef();
    const BodyRef = useRef();

    const SendMail = () => {
        SetSendMailState("sending")

        let type = purposeOfContact;
        let name = "";
        let mail = EmailRef.current.value;
        let subject = SubjectRef.current.value;
        let body = BodyRef.current.value;

        if (type !== "Hiring") {
            name = NameRef.current.value;
        }

        /*SEND */
        fetch("http://127.0.0.1:3000/sendmail", {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                type: purposeOfContact,
                name: name,
                mail: mail,
                subject: subject,
                body: body,
            }), headers: {
                'Content-Type': 'application/json'
            }
        }).then(response=>response.json())
            .then(data=> {
                if (data) {
                    SetSendMailState("sent")
                    if (!data.state) {
                        setError(data.log);
                        SetSendMailState("")
                    }
                } else{
                    /*TODO: show error*/
                    setError("Unable to send Mail")
                    SetSendMailState("")
                }
            })

    }

    return <div className={"main container"}>
        <div className={"contact container"}>
            <h1>Contact Me</h1>
            {/*SHOW ERRORS HERE*/}
            <p className={"error"}>{error}</p>
            <form>
                <div className={"Type"}>
                    {/*TODO: change to selection*/}
                    <button
                        type={"button"}
                        onClick={() => {setOpenDropDown((prevState)=>!prevState)}}
                    >
                        <span>{purposeOfContact}</span>
                        {
                            openDropDown
                                ? <CloseOutlined />
                                : <CaretDownOutlined />
                        }
                    </button>
                    {/*hover*/}
                    <div
                        className={`dropdown ${openDropDown ? "active": ""}`}
                    >
                        <button
                            type={"button"}
                            onClick={()=>{
                                setPurposeOfContact("Hiring");
                                setOpenDropDown(false);
                            }}>
                            Hiring
                        </button>
                        <button
                            type={"button"}
                            onClick={()=>{
                                setPurposeOfContact("Contact");
                                setOpenDropDown(false);
                            }}>
                            Contact
                        </button>
                        <button
                            type={"button"}
                            onClick={()=>{
                                setPurposeOfContact("Other");
                                setOpenDropDown(false);
                            }}>
                            Other
                        </button>
                    </div>
                </div>
                <div className={"row"}>
                    <label>
                        <input ref={EmailRef} defaultValue={""} type={"email"} placeholder={"Email"}/>
                    </label>
                    {
                        purposeOfContact == "Hiring"
                            ? <></>
                            : <label>
                                <input ref={NameRef} defaultValue={""} type={"text"} placeholder={"Name (Optional)"}/>
                            </label>

                    }

                </div>
                <label>
                    <input ref={SubjectRef} type={"text"} defaultValue={""} placeholder={`Subject ${purposeOfContact == "Hiring" ? "(Optional)" : ""}`} />
                </label>

                <textarea ref={BodyRef} placeholder={"Body"}></textarea>

                <div className={"row _2"}>
                    <button
                        type={"button"}
                        onClick={SendMail}
                    >
                        {
                            sendMailState == ""
                                ? "Submit"
                                : sendMailState == "sending"
                                    ? <LoadingOutlined />
                                    : <CheckOutlined />
                        }
                    </button>
                    <h2>OR</h2>
                    <a href={"mailto:rohit@dhir0hit.com"}>rohit@dhir0hit.com</a>
                </div>
            </form>
        </div>

        <h1 className={"background_text"}>Contact<br/>Me</h1>
    </div>
}

export default Contact;