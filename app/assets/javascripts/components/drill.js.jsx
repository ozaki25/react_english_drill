this.EnglishDrill = React.createClass({
  getInitialState: function() {
    return {
      drill: this.props.drill,
      action: this.props.action
    };
  },
  setAction: function(action) {
    this.setState({ action: action });
  },
  handleAnswerSubmit: function(answer) {
    var _this = this;
    var id = this.state.drill.id
    var url = "/drills/" + id + "/check"
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: answer
    }).done(function(data) {
      _this.setAction(data.action);
    });
  },
  action: function() {
    switch (this.state.action) {
      case "question" : return <Question />;
      case "correct" : return <Correct />;
      case "inccorect" : return <Incorrect />;
      default : return <Question />;
    };
  },
  render: function() {
    console.log(this.state.drill);
    console.log(this.state.action);
    return(
<body>
  <div className="container">
    <Title />
    <hr />
    <ProgressInfo drill={this.state.drill} />
    <Japanese drill={this.state.drill} />
    <English action={this.action()} drill={this.state.drill} onAnswerSubmit={this.handleAnswerSubmit} />
  </div>
</body>
    )
  }
});

this.Title = React.createClass({
  render: function() {
    return(
<span className="title">
  <a href="/">English Dril</a>
</span>
    )
  }
});

this.ProgressInfo = React.createClass({
  render: function() {
    var id = this.props.drill.id
    return(
<div className="row">
  <div className="col-md-6">
    <h2>SECTION 17</h2>
    <span className="number">No.{id}</span>
  </div>
  <div className="col-md-2">
    <div className="counter-block">
      <div className="counter-text">You Answered</div>
      <div className="counter-number">3</div>
      <div className="counter-text">times.</div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="counter-block">
      <div className="counter-text">You Cleared</div>
      <div className="counter-number">0</div>
      <div className="counter-text">times.</div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="counter-block lastfive">
      <div className="counter-text">Last</div>
      <div className="counter-number">5</div>
      <div className="counter-text">to clear this section.</div>
    </div>
  </div>
</div>
    )
  }
});

this.Japanese = React.createClass({
  render: function() {
    var japanese = this.props.drill.japanese
    return(
<div className="sentence-block">
  <label>Japanese</label>
  <div className="japanese">{japanese}</div>
</div>
    )
  }
});

this.English = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var answer = this.refs.answer.getDOMNode().value.trim()
    console.log(answer);
    this.props.onAnswerSubmit({answer: answer})
  },
  render: function() {
    return(
<form onSubmit={this.handleSubmit}>
  <div className="sentence-block form-group">
    <label>English</label>
    <input type="text" name="answer" className="form-control" ref="answer" />
  </div>
  <input type="submit" value="SEND" className="btn btn-primary btn-large" />
</form>
    )
  }
});

this.Question = React.createClass({
  render: function() {
    return;
  }
});

this.Correnct = React.createClass({
  render: function() {
    return;
  }
});

this.Incorrect = React.createClass({
  render: function() {
    return;
  }
});
