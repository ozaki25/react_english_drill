this.EnglishDrill = React.createClass({
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
    <ProgressInfo />
    <Drill drill={this.state.drill} />
  </div>
</body>
    )
  }
});

this.ProgressInfo = React.createClass({
  render: function() {
    return(
<div className="row">
  <div className="col-md-6">
    <h2>SECTION 17</h2>
    <span className="number">No.86</span>
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

this.Drill = React.createClass({
  render: function() {
    var japanese = this.props.drill.japanese
    return(
<form action="/drills" method="post">
  <div className="sentence-block">
    <label>Japanese</label>
    <div className="japanese">{japanese}</div>
  </div>
  <div className="sentence-block form-group">
    <label>English</label>
    <input id="inTxi" type="text" name="input" className="form-control" />
  </div>
  <input type="submit" value="SEND" className="btn btn-primary btn-large" />
</form>
    )
  }
});