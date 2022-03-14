import { useTranslation } from "react-i18next";

function Pages(){
    const { t } = useTranslation();

    return (
        <div id='Mainbody'>
            Test content
            <br/>
            {t}
        </div>
    );
}

export default Pages;