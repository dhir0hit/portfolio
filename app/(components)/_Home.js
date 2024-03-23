import banner from "@/public/media/dhir0hit.svg";
import Image from "next/image";

const _Home = () => {
    return <div id={"home"} className={"container"}>
        {/*Scroll Button*/}
        {/*<a
          href={'#about-me'}
          className={'scroll'}
      >
          <div>
              <span>&larr;</span>
          </div>
      </a>*/}

        {/*BACKGROUND*/}
        <div className={"background_image"}>
            <div></div>
            <Image src={banner} alt={'banner'}/>
        </div>
        {/*FOREGROUND*/}
        <div className={"foreground"}>
            <div>
                <h1>Full Stack Developer</h1>
            </div>
            <div>
                <h1>Error: <span>404</span></h1>
                <h1>Log: Quote Missing</h1>
            </div>
        </div>
    </div>
}

export default _Home;
