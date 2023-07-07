// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isClicked: true}

  onButton = () => {
    this.setState(prevState => ({isClicked: !prevState.isClicked}))
  }

  getButtonText = () => {
    const {isClicked} = this.state
    return isClicked ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you!Happy Learning</p>
        <button onClick={this.onButton} type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}
export default Welcome
