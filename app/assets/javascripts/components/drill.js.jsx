this.EnglishDrill = React.createClass({
  getInitialState: function() {
    return {
      drill: this.props.drill,
      action: this.props.action
    };
  },
  setDrill: function(drill) {
    this.setState({ drill: drill });
  },
  setAction: function(action) {
    this.setState({ action: action });
  },
  setAnswer: function(answer) {
    this.setState({ answer: answer });
  },
  handleAnswerSubmit: function(answer) {
    var _this = this;
    var id = this.state.drill.id
    var url = "/drills/" + id + "/check"
    this.setAnswer(answer);
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: answer
    }).done(function(data) {
      _this.setAction(data.action);
      console.log("ajax done, action : " + _this.state.action);
    });
  },
  toNextDrill: function() {
    var _this = this;
    var id = this.state.drill.id
    var url = "/drills/" + id + "/next"
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
    }).done(function(data) {
      _this.setDrill(data.drill);
      _this.setAction(data.action);
      console.log("ajax done, next id  : " + _this.state.drill.id);
      console.log("ajax done, action : " + _this.state.action);
    });
  },
  render: function() {
    console.log(this.state.drill);
    return(
<body>
  <div className="container">
    <Title />
    <hr />
    <ProgressInfo drill={this.state.drill} />
    <Japanese drill={this.state.drill} />
    <English action={this.state.action} drill={this.state.drill} answer={this.state.answer} onAnswerSubmit={this.handleAnswerSubmit} next={this.toNextDrill} />
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
  action: function() {
    switch (this.props.action) {
      case "question" : return <Question onAnswerSubmit={this.props.onAnswerSubmit} />;
      case "correct" : return <Correct answer={this.props.answer} next={this.props.next} />;
      case "incorrect" : return <Incorrect drill={this.props.drill} answer={this.props.answer} onAnswerSubmit={this.props.onAnswerSubmit} />;
      default : return "Error"
    };
  },
  render: function() {
    console.log("current action : " + this.props.action);
    return <div>{this.action()}</div>
  }
});

this.Question = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var answer = this.refs.answer.getDOMNode().value.trim()
    if (!answer) return;
    console.log("answer : " + answer);
    this.props.onAnswerSubmit({answer: answer})
  },
  render: function() {
    console.log("action : Question");
    return(
<form onSubmit={this.handleSubmit}>
  <div className="sentence-block form-group">
    <label>English</label>
    <input type="text" name="answer" className="form-control" defaultValue="" ref="answer" />
  </div>
  <input type="submit" value="SEND" className="btn btn-primary btn-large" />
</form>
    );
  }
});

this.Correct = React.createClass({
  render: function() {
    console.log("action : Correct");
    var answer = this.props.answer;
    return(
<div>
  <div className="sentence-block">
    <label>English</label>
    <div className="form-group has-success">
      <label className="control-label">Correct!</label>
      <div className="english-sentence help-block">{answer}</div>
    </div>
  </div>
  <a className="btn btn-success btn-large" onClick={this.props.next}>NEXT</a>
</div>
    );
  }
});

this.Incorrect = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var answer = this.refs.answer.getDOMNode().value.trim();
    if (!answer) return;
    React.findDOMNode(this.refs.answer).value = "";
    console.log(answer);
    this.props.onAnswerSubmit({answer: answer})
  },
  render: function() {
    console.log("action : Incorrect");
    var english = this.props.drill.english;
    var answer = this.props.answer;
    console.log("answer : " + answer);
    return(
<form onSubmit={this.handleSubmit}>
  <div className="sentence-block">
    <label>English</label>
    <div className="form-group has-error">
      <label className="control-label">You wrote :</label>
      <div className="english-sentence help-block">{answer}</div>
    </div>
    <div className="has-success">
      <label className="control-label">Answer :</label>
      <div className="english-sentence help-block">{english}</div>
    </div>
    <input type="text" name="answer" className="form-control" defaultValue="" ref="answer" />
  </div>
  <input type="submit" value="RETRY" className="btn btn-danger btn-large" />
</form>
    );
  }
});
