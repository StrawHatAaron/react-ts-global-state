import React from 'react'
import {ThemeContext, ITheme} from './Context'

export default function ChildLeaf() {
    return (
        <ThemeContext.Consumer>
            {({darkMode, toggleTheme}) => (
                <button onClick={toggleTheme}>
                    {darkMode}
                </button>
            )}
        </ThemeContext.Consumer>
    )
}
