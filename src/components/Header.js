import { useContext } from "react";
import { ThemesContext } from "../contexts/ThemesContext";

const Header = () => {
    const { toggleValue, one, two, three } = useContext(ThemesContext);
    const { toggleTheme } = useContext(ThemesContext);
    const theme = (toggleValue === "1") ? one : (toggleValue === "2") ? two : (toggleValue === "3") ? three : toggleValue;

    return (
        <div className="header">
            <h3 className={theme.class}>calc</h3>
            <div className="theme">
                <p className={theme.class}>Theme</p>
                <div className="slide-container">
                    <label htmlFor="switch" className={theme.class}>
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                    </label>
                    <input className={theme.class} type="range" min={1} max={3} id="switch" onChange={(e) => toggleTheme(e.target.value)} value={toggleValue} />
                </div>
            </div>
        </div>
    );
}

export default Header;