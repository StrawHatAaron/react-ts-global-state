import React from 'react';
import {ThemeContext} from './Context'
import Parent from './Parent'

class App extends React.Component{

  constructor(props){
    super(props);
    
    this.toggleTheme = () => {
      this.setState(state => ({
        darkMode: state.darkMode === 'on' ? 'off' : 'on'
      }));
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      darkMode: 'on',
      toggleTheme: this.toggleTheme,
    };
  }



  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          Hey App What do you see?
          <ThemeContext.Consumer>
          {({darkMode, }) => (    
            <div>{darkMode}</div>
          )}
          </ThemeContext.Consumer>
          <Parent/>
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
