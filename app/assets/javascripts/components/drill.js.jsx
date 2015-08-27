this.EnglishDrill = React.createClass({
  handleAnswerSubmit: function(answer) {
    var id = this.props.drill.id
    var url = "/drills/" + id + "/check"
    $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: answer
    });
  },
  getInitialState: function() {
    return {
      drill: this.props.drill
    };
  },
  render: function() {
    console.log(this.state.drill);
    return(
<body>
  <div className="container">
    <span className="title">
      <a href="/">English Dril</a>
    </span>
    <hr />
    <ProgressInfo drill={this.state.drill} />
    <AnswerForm drill={this.state.drill} onAnswerSubmit={this.handleAnswerSubmit} />
  </div>
</body>
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

this.AnswerForm = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault()
    var answer = this.refs.answer.getDOMNode().value.trim()
    console.log(answer);
    this.props.onAnswerSubmit({answer: answer})
  },
  render: function() {
    var id = this.props.drill.id
    var japanese = this.props.drill.japanese
    var action = "/drills/" + id + "/check"
    return(
<form action={action} method="post" onSubmit={this.handleSubmit}>
  <div className="sentence-block">
    <label>Japanese</label>
    <div className="japanese">{japanese}</div>
  </div>
  <div className="sentence-block form-group">
    <label>English</label>
    <input type="text" name="answer" className="form-control" ref="answer" />
  </div>
  <input type="submit" value="SEND" className="btn btn-primary btn-large" />
</form>
    )
  }
});