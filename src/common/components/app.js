import React from 'react';
import SpinningIcon from 'grommet/components/icons/Spinning';

class App extends React.Component {
  componentDidMount() {
    this.props.initApp();
  }

  render() {
    if (this.props.loading) {
      return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
          <SpinningIcon />
          <p>
            Loading..
          </p>
        </div>
      );
    }

    return this.props.children;
  }
};

export default App;
