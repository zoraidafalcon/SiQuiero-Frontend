import { ThemeContext } from "@emotion/react";

function OneWedding() {
    const [theme, setTheme] = useState('OneWedding')
}

return (
    <ThemeContext.Provider value={OneWedding}>

        <Home />

    </ThemeContext.Provider>
)