import React from 'react'
import ChildLeaf from './ChildLeaf'
import {ThemeContext, ITheme} from './Context'

export default function Child() {
    return (
        <ThemeContext.Consumer>
            {({darkMode}) => ( 
                <div>
                    {darkMode}
                    <br/>
                    <ChildLeaf/>
                </div>
            )}
        </ThemeContext.Consumer>
    )
}
