import cls from "./footer.module.sass"

const data = {
    phone: "+998993656845",
    userName: "@begzod_jumaniyozov",
    location: "Chirchiq"
}
export const Footer = () => {
    return (
        <div className={cls.footer}>

                <ul>
                    <li>
                        <i className="fas fa-phone-alt" style={{color: "#ffffff"}}/> {data.phone}
                    </li>
                    <li>
                        <i className="fab fa-telegram" style={{color: "#ffffff"}}/>{data.userName}
                    </li>
                    <li>
                        <i className="fas fa-map-marker-alt" style={{color: "#ffffff"}}/>{data.location}

                    </li>
                </ul>
            <hr className={cls.footer__hr}/>
        </div>
    );
};

