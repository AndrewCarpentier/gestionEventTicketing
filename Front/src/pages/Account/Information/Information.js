import { useTranslation } from "react-i18next";
import ContactDetail from "./ContactDetail/ContactDetail";
import style from './Information.module.scss';
import ReactGA from "react-ga4";
import { useEffect } from "react";

function Information(){
    const {t} = useTranslation();
    
    useEffect(() => {
        ReactGA.send({hitType : "pageview", page : "account information"})
      }, []);

    return(
        <div className={`${style.container} mt50`}>
            <h1>{t('information')}</h1>
            <div>
                <ContactDetail/>
            </div>
        </div>
    );
};

export default Information;