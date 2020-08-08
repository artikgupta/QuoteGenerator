import React, { Component } from "react";

class QuoteGenerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      quote:
        "I love deadlines. I like the whooshing sound they make as they fly by.",
      author: "Douglas Adams",
    };
  }

  quoteGenerationHandler = () => {
    this.setState({
      loading: true,
    });
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          loading: false,
          quote: data.quote,
          author: data.author,
        })
      );
  };

  render() {
    const { quote, author } = this.state;

    return (
      <div className="main-container">
        <h1>Random Quote Generator</h1>
        <div className="container">
          <div className="btn">
            <button onClick={this.quoteGenerationHandler}>
              Generate Quote
            </button>
          </div>
          <div className="flex quote">
            {this.state.loading === true ? (
              <div className="center">
                <i className="fa fa-cog fa-spin" />
              </div>
            ) : (
              `${quote} - ${author}`
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default QuoteGenerator;
