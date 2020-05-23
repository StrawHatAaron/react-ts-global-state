import React from 'react';
import {ThemeContext, ITheme} from './Context'
import Parent from './Parent'

class App extends React.Component<{}, ITheme>{

  constructor(props: ITheme){
    super(props);
    
    
  }



  render() {
    return (
      <div>
        <ThemeContext.Provider value={{backgroundColor:"#000", color:"#FFF", toggleTheme: () => {}}}>
          Hey App What do you see? 
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
