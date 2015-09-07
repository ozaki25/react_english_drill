this.EnglishDrill = React.createClass({
  getInitialState: function() {
    return {
      drill: this.props.drill,
      progress: this.props.progress,
      action: this.props.action,
      user: this.props.user,
      cleared: this.props.cleared
    };
  },
  handleAnswerSubmit: function(value) {
    var _this = this;
    var id = this.state.drill.exeid
    var url = "/drills/" + id + "/check"
    var answer = value.answer
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: { answer: answer, current_action: this.state.action }
    }).done(function(data) {
      _this.setState({ progress: data.progress, action: data.action, answer: answer, cleared: data.cleared });
    });
  },
  toNextDrill: function() {
    var _this = this;
    var id = this.state.drill.exeid
    var url = "/drills/" + id + "/next"
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'GET',
    }).done(function(data) {
      _this.setState({ drill: data.drill, progress: data.progress, action: data.action });
    });
  },
  render: function() {
    return(
<body>
  <div className="container">
    <Header user={this.state.user} />
    <Title />
    <hr />
    <ProgressInfo drill={this.state.drill} progress={this.state.progress} cleared={this.state.cleared} />
    <Japanese drill={this.state.drill} />
    <English action={this.state.action} drill={this.state.drill} answer={this.state.answer} onAnswerSubmit={this.handleAnswerSubmit} toNext={this.toNextDrill} />
  </div>
</body>
    )
  }
});

this.Header = React.createClass({
  render: function() {
    var email = this.props.user.email
    return(
<div className="listlink">
  <a href="#">{email}</a>
  ｜
  <a href="/users/sign_out" data-method="delete" >logout</a>
</div>
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
    var id = this.props.drill.exeid;
    var sectionNo = this.props.drill.section_no;
    var answerCount = this.props.progress.answer_count;
    var clearCount = this.props.progress.clear_count;
    var cleared = this.props.cleared;
    return(
<div className="row">
  <div className="col-md-6">
    <h2>SECTION {sectionNo}</h2>
    <span className="number">No.{id}</span>
  </div>
  <div className="col-md-2">
    <div className="counter-block">
      <div className="counter-text">You Answered</div>
      <div className="counter-number">{answerCount}</div>
      <div className="counter-text">times.</div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="counter-block">
      <div className="counter-text">You Cleared</div>
      <div className="counter-number">{clearCount}</div>
      <div className="counter-text">times.</div>
    </div>
  </div>
  <div className="col-md-2">
    <div className="counter-block lastfive">
      <div className="counter-text">Last</div>
      <div className="counter-number">{cleared}</div>
      <div className="counter-text">to clear this section.</div>
    </div>
  </div>
</div>
    )
  }
});

this.Japanese = React.createClass({
  render: function() {
    var japanese = this.props.drill.japanese;
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
      case "correct" : return <Correct answer={this.props.answer} toNext={this.props.toNext} />;
      case "incorrect" : return <Incorrect drill={this.props.drill} answer={this.props.answer} onAnswerSubmit={this.props.onAnswerSubmit} />;
      default : return "Error"
    };
  },
  render: function() {
    return <div>{this.action()}</div>
  }
});

this.Question = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var answer = this.refs.answer.getDOMNode().value.trim()
    if(!answer) return;
    this.props.onAnswerSubmit({answer})
  },
  render: function() {
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
  <a className="btn btn-success btn-large" onClick={this.props.toNext}>NEXT</a>
</div>
    );
  }
});

this.Incorrect = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var answer = this.refs.answer.getDOMNode().value.trim();
    if(!answer) return;
    React.findDOMNode(this.refs.answer).value = "";
    this.props.onAnswerSubmit({answer})
  },
  render: function() {
    var english = this.props.drill.english;
    var answer = this.props.answer;
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
