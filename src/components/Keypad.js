import { useContext } from "react";
import { OperationContext } from "../contexts/OperationContext";
import { ThemesContext } from "../contexts/ThemesContext";

const Keypad = () => {
    // Toggle theme
    const { toggleValue, one, two, three } = useContext(ThemesContext);
    const theme = (toggleValue === "1") ? one : (toggleValue === "2") ? two : (toggleValue === "3") ? three : toggleValue;

    // Calc Operation
    const { prevNumber, currentNumber, operator } = useContext(OperationContext);
    const { handleInput, operatorEvent, calculate, actionDelete, actionReset } = useContext(OperationContext);

    return (
        <div className="calc-function-container">
            <div className={`screen ${theme.class}`}>
                <p className={`operation-value ${theme.class}`}>{(operator !== "") ? prevNumber : currentNumber}</p>
            </div>
            <div className={`key-container ${theme.class}`}>
                <div className="small-box">
                    <input type="button" value="7" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="8" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="9" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="del" className={`box ${theme.class}`} onClick={actionDelete} />
                    <input type="button" value="4" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="5" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="6" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="+" className={`box ${theme.class}`} onClick={(e) => operatorEvent(e.target.value)} />
                    <input type="button" value="1" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="2" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="3" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="-" className={`box ${theme.class}`} onClick={(e) => operatorEvent(e.target.value)} />
                    <input type="button" value="." className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="0" className={`box ${theme.class}`} onClick={(e) => handleInput(e.target.value)} />
                    <input type="button" value="/" className={`box ${theme.class}`} onClick={(e) => operatorEvent(e.target.value)} />
                    <input type="button" value="x" className={`box ${theme.class}`} onClick={(e) => operatorEvent(e.target.value)} />
                </div>
                <div className="medium-box">
                    <input type="button" value="reset" className={`m-box ${theme.class}`} onClick={actionReset} />
                    <input type="button" value="=" className={`m-box ${theme.class}`} onClick={calculate} />
                </div>
            </div>
        </div>
    );
}

export default Keypad;