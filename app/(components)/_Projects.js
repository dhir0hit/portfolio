// Importing _Projects
import { default as ProjectDao } from "@/app/utils/Projects.js";
import React, {useEffect, useMemo, useRef, useState} from "react";

const _Projects = () => {
    const [ProjectInfo, setProjectInfo] = useState({
        detail      : ProjectDao["Personal Server"].detail,
        frameworks   : ProjectDao["Personal Server"].frameworks,
        link        : ProjectDao["Personal Server"].link,
    });

    const Frameworks = useMemo(() => {
        let _list = [];
        for (const framework of ProjectInfo.frameworks) {
            _list.push(<li>{framework}</li>)
        }
        return <ul>{_list}</ul>;
    }, [ProjectInfo.frameworks])

    return <div id={"projects"} className={"container"}>
        <h1>Projects</h1>
        <div className={"carousel"}>
            <div className={"info"}>
                <a href={ProjectInfo.link} target={"_blank"}>{ProjectInfo.link}</a>
                <p>{ProjectInfo.detail}</p>
                {Frameworks}
            </div>
            <div className={"nav"}>
                <CarouselNav setProject={setProjectInfo} />
            </div>
        </div>

        <h1 className={"background_text"}>Projects</h1>
    </div>
}


/*TODO: change max width of containers*/
const CarouselNav = (props) => {
    let _list = [];
    for (const Element in ProjectDao) {
        _list.push(
            <label
                key={Element}
                onClick={() => {
                    props.setProject(() => {
                        // @ts-ignore
                        return ProjectDao[Element];
                    })
                }}>
                <input checked type={"radio"} name={"projects"}/>
                <li>{Element}</li>
            </label>);
    }
    /*for (const Element in JSON.parse(ProjectInfo)) {

    }*/
    return <>{_list}</>;
}

export default _Projects;