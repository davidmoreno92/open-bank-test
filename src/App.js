import React from 'react'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.scss';

class App extends React.Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="main-app">
                    <main className="main-content">
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default App
