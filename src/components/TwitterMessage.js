import React from "react";

class TwitterMessage extends React.Component {
  // props maxChars: number

  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  remainingCharacters = () => {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {/* give input value that receives from this state */}
        {/* give input an onChange callback function that updates state*/}
        <input onChange={this.handleChange} type="text" name="message" id="message" value={this.state.message} />
        {/* display remaining characters */}
    <p>Characters left: {this.remainingCharacters()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
