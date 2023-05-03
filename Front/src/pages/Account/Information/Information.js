import { useTranslation } from "react-i18next";
import ContactDetail from "./ContactDetail/ContactDetail";
import style from './Information.module.scss';

function Information(){
    const {t} = useTranslation();
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