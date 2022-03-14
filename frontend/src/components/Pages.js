import { useTranslation } from "react-i18next";
import AboutSite from './pages/AboutSite';
import AboutMe from './pages/AboutMe';

function Pages(){
    const { t } = useTranslation();

    return (
        <div id='Mainbody'>
            <AboutSite />
            <AboutMe />
        </div>
    );
}

export default Pages;