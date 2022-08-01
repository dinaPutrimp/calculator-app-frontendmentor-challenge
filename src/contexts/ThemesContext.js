import { Component, createContext } from "react";

export const ThemesContext = createContext();

class ThemesContextProvider extends Component {
    state = {
        toggleValue: "1",
        one: { class: "" },
        two: { class: "two" },
        three: { class: "three" }
    }

    toggleTheme = (event) => {
        this.setState({ toggleValue: event })
    }

    render() {
        return (
            <ThemesContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>
                {this.props.children}
            </ThemesContext.Provider>
        )
    }
}

export default ThemesContextProvider;