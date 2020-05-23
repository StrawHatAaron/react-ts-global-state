import React, {useContext} from 'react'
import Child from './Child'
import {ThemeContext, ITheme} from './Context'


export default function Parent() {

    // Accessing context in a child component
    const themeContext = useContext<ITheme>(ThemeContext);

    return (
        <ThemeContext.Consumer>
            {value => value.backgroundColor}        
        </ThemeContext.Consumer>
    )
}
