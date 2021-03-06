const React = require('react');
const Tweet = require('./Tweet');

class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  componentWillMount(){
    this.setState({
      tweets: this.props.newTweets
    });
  }
  // TODO: componentWillMount()

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.newTweets.length > 0;
  }

  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps){
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    });
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}

module.exports = TweetWall;
