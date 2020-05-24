import React, {useContext} from 'react'
import Child from './Child'
import {ThemeContext, ITheme} from './Context'


export default function Parent() {

    // Accessing context in a child component
    const themeContext = useContext<ITheme>(ThemeContext);
    console.log(themeContext);

    return (
        <ThemeContext.Consumer>
            {({darkMode, toggleTheme}) => (
                <div>
                    <button onClick={toggleTheme}>
                        {darkMode}
                    </button>
                    <Child/>
                </div>
            )}        
        </ThemeContext.Consumer>
    )
}
