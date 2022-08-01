import { useContext } from "react";
import { ThemesContext } from "../contexts/ThemesContext";

const Footer = () => {
    // Toggle theme
    const { toggleValue, one, two, three } = useContext(ThemesContext);
    const theme = (toggleValue === "1") ? one : (toggleValue === "2") ? two : (toggleValue === "3") ? three : toggleValue;
    return (
        <div className="footer">
            <span className={theme.class}>Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel='noreferrer'>Frontend Mentor</a>.
                Coded by Dinapp.</span>
        </div>
    );
}

export default Footer;