import React from 'react';

class QInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: ''
    };
  }
  handleText = e => {
    const txt = e.target.value;
    this.setState(
      {
        txt
      },
      () => {
        this.props.handleSub(txt);
      }
    );
  };
  render() {
    return <textarea onChange={this.handleText} />;
  }
}

export default QInput;
