import React from 'react';
import MyEditor from './MyEditor.react.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageLimit: 4,
      currentPage: 1
    };
    this.onLinePull = () => this._onLinePull();
  }

  _onLinePull() {
    console.log('pull');
    if (this.state.currentPage < this.state.pageLimit) {
      this.setState({ currentPage: this.state.currentPage + 1 });
    }
  }

  render() {
    let editors = [];
    for (let i = 0; i < this.state.currentPage; i++) {
      editors.push(<MyEditor onLinePull={this.onLinePull} key={i}/>);
    }
    return (
      <div>{editors}</div>
    );
  }
}

export default App;
