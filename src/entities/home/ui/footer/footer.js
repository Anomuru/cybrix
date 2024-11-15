import cls from "./footer.module.sass"
import {useContext, useEffect, useRef} from "react";
import {Context} from "../../../../pages/homePage/ui/homePage";

const data = {
    phone: "+998993656845",
    userName: "@begzod_jumaniyozov",
    location: "Chirchiq"
}
export const Footer = () => {

    const sectionRef = useRef()
    const {setSectionTop} = useContext(Context)
    useEffect(() => {
        setSectionTop(cur => ({...cur, contact: sectionRef?.current?.offsetTop}))
    }, [setSectionTop])

    return (
        <div className={cls.footer} ref={sectionRef}>

            <ul>
                <a href={`tel:${data.phone}`}>
                    <li>
                        <i className="fas fa-phone-alt" style={{color: "#ffffff"}}/> {data.phone}
                    </li>
                </a>
                <a  href="https://t.me/begzod_jumaniyozov">
                    <li>
                        <i className="fab fa-telegram" style={{color: "#ffffff"}}/>
                        {data.userName}
                    </li>
                </a>
                <a target={"_blank"} href="https://maps.app.goo.gl/FeVXnG2kXHzmiYo26">
                    <li>
                        <i className="fas fa-map-marker-alt" style={{color: "#ffffff"}}/>{data.location}
                    </li>
                </a>
            </ul>
            <hr className={cls.footer__hr}/>
        </div>
    );
};

