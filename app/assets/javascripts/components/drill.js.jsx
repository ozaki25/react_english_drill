this.EnglishDrill = React.createClass({
  render: function() {
    return(
<body>
  <NavigationBar />
  <div className="container">
    <Drill />
  </div>
</body>
    )
  }
});

this.NavigationBar = React.createClass({
  render: function() {
    return(
<div className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </button>
      <a className="navbar-brand" href="/">React English Drill</a>
    </div>
    <div className='collapse navbar-collapse'>
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <li><a href="#">テストユーザ</a></li>
        </li>
      </ul>
    </div>
  </div>
</div>
    )
  }
});

this.Drill = React.createClass({
  render: function() {
    return(
<div className="panel panel-primary">
  <div className="panel-heading">問題</div>
  <div className="panel-body">
    <form className="form-horizontal">
      <div className="form-group">
        <label className="control-label col-sm-2">日本語：</label>
        <div className="col-sm-10 question-japanese-sentense">これはペンです</div>
      </div>
      <div className="form-group">
        <label className="control-label col-sm-2">English：</label>
        <div className="col-sm-10">
          <input className="form-control" type="text" />
        </div>
      </div>
    </form>
  </div>
  <div className="panel-footer">
    <a href="#" className="btn btn-primary">送信</a>
  </div>
</div>
    )
  }
});