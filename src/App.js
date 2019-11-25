import React from 'react';
import './App.css';
import './Styles/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
      counter: 1,
      open: [],
      guessedPictureCount: 0,
    }
  }

  loadButtons = () => {
    const shuffle = require('shuffle-array');
    let buttons = [];
    let images = ["1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "1.jpg", "2.jpg", "3.jpg", "4.png", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
    let style = {
      display: "none",
    }
    // shuffle(images);
    for (let i = 0; i < images.length; i++) {
      buttons.push(
        <button onClick={() => this.startGame(i)} key={i} >
          <img id={i} style={style} alt="pictures-for guess" src={require('./Images/' + images[i])} />
        </button>
      )
    }
    return buttons;
  }

  // need to add argument for knwoing which id button is clicked
  startGame = (id) => {
    if (document.getElementById(id).style.display == "block") {
      document.getElementById(id).style.display = "none";
    }
    else {
      document.getElementById(id).style.display = "block";
      this.state.open.push(document.getElementById(id).src);
      this.setState({
        counter: this.state.counter + 1,
      })
      if (this.state.counter == 2) {
        for (let i = 0; i < this.state.open.length; i++) {
          if (this.state.open[i] == this.state.open[i + 1]) {
            alert("krecir");
            document.getElementById(id).style.display = "none";
            this.setState({
              guessedPictureCount: this.state.guessedPictureCount + 1,
            })
          }
          this.setState({
            counter: 1,
            open: [],
          })
        }
      }
    }
    console.log(this.state.counter);
    console.log(this.state.open);
  }

  render() {
    return (
      <div className="game-wrapper" >
        <h1>Pictures Matched count {this.state.guessedPictureCount}</h1>
        {this.loadButtons()}
      </div>
    )
  }
}

export default App;
