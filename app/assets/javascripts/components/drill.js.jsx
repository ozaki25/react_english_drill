this.Drill = React.createClass({
  render: function() {
    return(
<NavigationBar />
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