import { Component, createContext } from "react";

export const OperationContext = createContext();

class OperationContextProvider extends Component {
    state = {
        prevNumber: 0,
        currentNumber: "",
        operator: ""
    }

    handleInput = (event) => {
        this.setState({ currentNumber: this.state.currentNumber + event });
    }

    operatorEvent = (event) => {
        if (event) {
            switch (this.state.operator) {
                case "+":
                    this.setState({ prevNumber: this.state.prevNumber + Number(this.state.currentNumber) });
                    break;
                case "-":
                    this.setState({ prevNumber: this.state.prevNumber - Number(this.state.currentNumber) });
                    break;
                case "x":
                    this.setState({ prevNumber: this.state.prevNumber * Number(this.state.currentNumber) });
                    break;
                case "/":
                    this.setState({ prevNumber: this.state.prevNumber / Number(this.state.currentNumber) });
                    break
                default:
                    this.setState({ prevNumber: Number(this.state.currentNumber) });
                    break;
            }
        }
        this.setState({
            currentNumber: "",
            operator: event
        })
    }

    calculate = () => {
        switch (this.state.operator) {
            case "+":
                this.setState({ currentNumber: `${this.state.prevNumber + Number(this.state.currentNumber)}` });
                break;
            case "-":
                this.setState({ currentNumber: `${this.state.prevNumber - Number(this.state.currentNumber)}` });
                break;
            case "x":
                this.setState({ currentNumber: `${this.state.prevNumber * Number(this.state.currentNumber)}` });
                break;
            case "/":
                this.setState({ currentNumber: `${this.state.prevNumber / Number(this.state.currentNumber)}` })
                break;
            default:
                console.log("invalid operation");
                break;
        }
        this.setState({
            prevNumber: 0,
            operator: ""
        })
    }

    actionDelete = () => {
        if (this.state.currentNumber === "") return;
        this.setState({
            currentNumber: this.state.currentNumber.slice(0, this.state.currentNumber.length - 1)
        })
    }

    actionReset = () => {
        if (this.state.prevNumber === 0 && this.state.currentNumber === "" && this.state.operator === "") return;
        this.setState({
            prevNumber: 0,
            currentNumber: "",
            operator: ""
        })
    }

    render() {
        return (
            <OperationContext.Provider value={{ ...this.state, handleInput: this.handleInput, operatorEvent: this.operatorEvent, calculate: this.calculate, actionDelete: this.actionDelete, actionReset: this.actionReset }}>
                {this.props.children}
            </OperationContext.Provider>
        )
    }
}

export default OperationContextProvider;