import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items:  [
        "Buy milk",
        "Go to the dentist"
      ]
    }
  }
  render() {
    return(
      <div className="container mt-3">
        
        <div className="row">
          <div className="col-md-6 offset-3">
        <h1>Shopping List</h1>
          <ul>
            { this.state.items.map(item => {
                return(<li>{item}</li>)
              })
            }
          </ul>
          </div>
        </div>      
      </div>
    );
  }
}

export default App;