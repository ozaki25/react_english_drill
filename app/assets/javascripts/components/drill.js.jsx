this.EnglishDrill = React.createClass({
  render: function() {
    return(
<body>
  <div className="container">
    <span className="title">
      <a href="/">English Dril</a>
    </span>
    <Drill />
  </div>
</body>
    )
  }
});

this.Drill = React.createClass({
  render: function() {
    return(
<div className="row">
  <div className="col-md-6">
    <h2>SECTION 17</h2>
    <span className="number">No.86</span>
  </div>
  <div className="col-md-2 counter-block">
    <div className="counter-text">You Answered</div>
    <div className="counter-number">3</div>
    <div className="counter-text">times.</div>
  </div>
  <div className="col-md-2 counter-block">
    <div className="counter-text">You Cleared</div>
    <div className="counter-number">0</div>
    <div className="counter-text">times.</div>
  </div>
  <div className="col-md-2 counter-block lastfive">
    <div className="counter-text">Last</div>
    <div className="counter-number">5</div>
    <div className="counter-text">to clear this section.</div>
  </div>
</div>
    )
  }
});