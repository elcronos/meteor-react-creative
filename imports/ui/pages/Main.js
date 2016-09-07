import React from 'react'

export default class Main extends React.Component{
  constructor(){
    super()
  }

  render(){
    var styleCover = {
      backgroundImage: 'url(/images/cover_4.jpg)'
    };
    var styleCoverBlur = {
      backgroundImage: 'url(/images/cover_4_blur.jpg)'
    };

    var styleBg={
      backgroundImage: 'url(/images/bg.jpg)'
    }

    var styleWidth60={
      width: '60%'
    }
    var styleWidth35={
      width: '35%'
    }
    var styleWidth20={
      width: '20%'
    }
    var styleWidth10={
      width: '10%'
    }
    var styleBg2={
      backgroundImage: 'url(http://get-shit-done-pro.herokuapp.com//images/bg6.jpg)'
    }
    return(
      <div>
      <div id="navbar-full">
         <div className="container">
            <nav className="navbar navbar-ct-blue navbar-transparent navbar-fixed-top" role="navigation">
               <div className="container">
                  <div className="navbar-header">
                     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                     <span className="sr-only">Toggle navigation</span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     <span className="icon-bar"></span>
                     </button>
                     <a href="http://creative-tim.com">
                        <div className="logo-container">
                           <div className="logo">
                              <img src="/images/new_logo.png"/>
                           </div>
                           <div className="brand">
                              Creative Tim
                           </div>
                        </div>
                     </a>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                     <ul className="nav navbar-nav navbar-right">
                        <li><a href="components.html">Components</a></li>
                        <li><a href="http://www.creative-tim.com/product/get-shit-done-kit" className="btn btn-round btn-default">Download</a></li>
                     </ul>
                  </div>

               </div>
            </nav>
         </div>
         <div className="blurred-container">
            <div className="motto">
               <div>Get</div>
               <div className="border no-right-border">Sh</div>
               <div className="border">it</div>
               <div>Done</div>
            </div>
            <div className="img-src" style={styleCover}></div>
            <div className="img-src blur" style={styleCoverBlur}></div>
         </div>
      </div>
      <div className="main">
         <div className="container tim-container">
            <div className="tim-title">
               <h2>Basic Elements</h2>
            </div>
            <div id="buttons">
               <div className="tim-title">
                  <h3>Buttons <small> Pick your className </small></h3>
               </div>
               <div className="row tim-row">
                  <div className="col-md-6">
                     <div className="pick-className">
                        <span className="pick-className-label label-default label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Default" new-className="btn-default"> </span>
                        <span className="pick-className-label label-primary label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Primary" new-className="btn-primary"> </span>
                        <span className="pick-className-label label-info label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Info" new-className="btn-info"> </span>
                        <span className="pick-className-label label-success label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Success" new-className="btn-success"> </span>
                        <span className="pick-className-label label-warning label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Warning" new-className="btn-warning"> </span>
                        <span className="pick-className-label label-danger label-fill label-tooltip" data-toggle="tooltip" data-placement="top" title="Danger" new-className="btn-danger"> </span>
                     </div>
                  </div>
               </div>
               <div className="row tim-row" id="display-buttons" data-className="btn-info">
                  <div className="col-md-3 col-sm-6">
                     <button href="#fakelink" className="btn btn-block btn-lg btn-info">Default Button</button>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-fill">Filled Button</button>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-round">Rounded Button</button>
                  </div>
                  <div className="col-md-3 col-sm-6">
                     <button href="#fakelink" className="btn btn-block btn-lg btn-info btn-simple">Simple Button</button>
                  </div>
               </div>
            </div>
            <div id="inputs">
               <div className="tim-title">
                  <h3>Inputs</h3>
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="form-group">
                        <input type="text"  placeholder="Inactive" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="form-group has-success">
                        <input type="text" value="Success" className="form-control" />
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="form-group has-error has-feedback">
                        <input type="text" value="Error" className="form-control" />
                        <span className="glyphicon glyphicon-remove form-control-feedback"></span>
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <div className="input-group">
                        <input type="text" value="Group Addon" className="form-control"/>
                        <span className="input-group-addon"><i className="fa fa-group"></i></span>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-sm-3">
                     <div className="tim-title">
                        <h3>Checkboxes</h3>
                     </div>
                     <label className="checkbox" for="checkbox1">
                     <input type="checkbox"  id="checkbox1" data-toggle="checkbox"/>
                     Unchecked
                     </label>
                     <label className="checkbox" for="checkbox2">
                     <input type="checkbox"  id="checkbox2" data-toggle="checkbox" checked/>
                     Checked
                     </label>
                     <label className="checkbox" for="checkbox3">
                     <input type="checkbox"  id="checkbox3" data-toggle="checkbox" disabled/>
                     Disabled unchecked
                     </label>
                     <label className="checkbox" for="checkbox4">
                     <input type="checkbox"  id="checkbox4" data-toggle="checkbox" disabled checked/>
                     Disabled checked
                     </label>
                  </div>
                  <div className="col-sm-3">
                     <div className="tim-title">
                        <h3>Radio Buttons</h3>
                     </div>
                     <label className="radio">
                     <input type="radio" name="optionsRadios" data-toggle="radio" id="optionsRadios1" value="option1"/>
                     <i></i>Radio is off
                     </label>
                     <label className="radio">
                     <input type="radio" name="optionsRadios" data-toggle="radio" id="optionsRadios2" value="option1" checked/>
                     <i></i>Radio is on
                     </label>
                     <label className="radio">
                     <input type="radio" name="optionsRadiosDisabled" data-toggle="radio" id="optionsRadios3" value="option2" disabled/>
                     <i></i>Disabled radio is off
                     </label>
                     <label className="radio">
                     <input type="radio" name="optionsRadiosDisabled" data-toggle="radio" id="optionsRadios4" value="option2" checked disabled/>
                     <i></i>Disabled radio is on
                     </label>
                  </div>
                  <div className="col-sm-3">
                     <div className="tim-title">
                        <h3>Switches</h3>
                        <input type="checkbox" checked data-toggle="switch" className="ct-info"/>
                        <input type="checkbox" data-toggle="switch" />
                        <h3>Switches with icons</h3>
                        <div className="switch"
                           data-on-label="<i className=fa fa-check></i>"
                           data-off-label="<i className=fa fa-times></i>">
                           <input type="checkbox" checked/>
                        </div>
                        <div className="switch"
                           data-on-label="<i className=fa fa-check></i>"
                           data-off-label="<i className=fa fa-times></i>">
                           <input type="checkbox"/>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-3">
                  </div>
               </div>
            </div>
            <div id="menu-dropdown">
               <div className="row">
                  <div className="col-md-7">
                     <div className="tim-title">
                        <h3>Menu & Dropdown</h3>
                     </div>
                     <div id="navbar">
                        <nav className="navbar navbar-default">
                           <div className="container-fluid">
                              <div className="navbar-header">
                                 <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                 <span className="sr-only">Toggle navigation</span>
                                 <span className="icon-bar"></span>
                                 <span className="icon-bar"></span>
                                 <span className="icon-bar"></span>
                                 </button>
                                 <a className="navbar-brand" href="#gsdk">Brand</a>
                              </div>

                              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                 <ul className="nav navbar-nav">
                                    <li className="active"><a href="#gsdk">Link</a></li>
                                    <li><a href="#gsdk">Link</a></li>
                                    <li className="dropdown">
                                       <a href="#gsdk" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                                       <ul className="dropdown-menu">
                                          <li><a href="#gsdk">Action</a></li>
                                          <li><a href="#gsdk">Another action</a></li>
                                          <li><a href="#gsdk">Something else here</a></li>
                                          <li className="divider"></li>
                                          <li><a href="#gsdk">Separated link</a></li>
                                          <li className="divider"></li>
                                          <li><a href="#gsdk">One more separated link</a></li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </nav>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tim-title">
               <h3>Transparent Navigation
                  <a href="navbar-transparent.html" target="_blank" className="btn btn-info btn-fill">Live Preview</a>
               </h3>
            </div>
         </div>
      </div>
      <div id="navbar-full">
         <div id="navbar">
            <div className="navigation-example">
               <nav className="navbar navbar-default navbar-transparent" role="navigation-demo">
                  <div className="container">
                     <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#gsdk">GSDKit</a>
                     </div>
                     <div className="collapse navbar-collapse" id="navigation-example-2">
                        <ul className="nav navbar-nav">
                           <li className="active"><a href="#gsdk">Link</a></li>
                           <li className="dropdown">
                              <a href="#gsdk" className="dropdown-toggle" data-toggle="dropdown">Dropdown <b className="caret"></b></a>
                              <ul className="dropdown-menu">
                                 <li><a href="#gsdk">Action</a></li>
                                 <li><a href="#gsdk">Another action</a></li>
                                 <li><a href="#gsdk">Something</a></li>
                                 <li><a href="#gsdk">Another action</a></li>
                                 <li><a href="#gsdk">Something</a></li>
                                 <li className="divider"></li>
                                 <li><a href="#gsdk">Separated link</a></li>
                              </ul>
                           </li>
                           <li>
                              <a href="javascript:void(0);" data-toggle="search" className="hidden-xs"><i className="fa fa-search"></i></a>
                           </li>
                        </ul>
                        <form className="navbar-form navbar-left navbar-search-form" role="search">
                           <div className="form-group">
                              <input type="text"  className="form-control" placeholder="Search..."/>
                           </div>
                        </form>
                        <ul className="nav navbar-nav navbar-right">
                           <li><a href="#gsdk">Register</a></li>
                           <li><button href="#gsdk" className="btn btn-round btn-default">Sign in</button></li>
                        </ul>
                     </div>

                  </div>

               </nav>
               <div className="img-src" style={styleBg}></div>
            </div>
         </div>

      </div>
      <div className="main">
         <div className="container tim-container">
            <div id="sliders-navigation">
               <div className="row">
                  <div className="col-md-6 ">
                     <div className="tim-title">
                        <h3>Progress Bars</h3>
                     </div>
                     <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={styleWidth60}>
                           <span className="sr-only">60% Complete</span>
                        </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={styleWidth60}>
                           <span className="sr-only">60% Complete</span>
                        </div>
                     </div>
                     <div className="progress">
                        <div className="progress-bar progress-bar-success" style={styleWidth35}>
                           <span className="sr-only">35% Complete (success)</span>
                        </div>
                        <div className="progress-bar progress-bar-warning" style={styleWidth20}>
                           <span className="sr-only">20% Complete (warning)</span>
                        </div>
                        <div className="progress-bar progress-bar-danger" style={styleWidth10}>
                           <span className="sr-only">10% Complete (danger)</span>
                        </div>
                     </div>
                     <div className="tim-title">
                        <h3>Sliders</h3>
                     </div>
                     <div id="slider-default" className="slider-info"></div>
                     <br/>
                     <div id="slider-range" className="slider-success"></div>
                  </div>
                  <div className="col-md-6">
                     <div className="tim-title">
                        <h3>Navigation Menu</h3>
                     </div>
                     <ul className="nav nav-tabs">
                        <li className="active"><a href="#Bla">Home</a></li>
                        <li><a href="#nice">Profile</a></li>
                        <li><a href="#best">Messages</a></li>
                     </ul>
                     <br />
                     <ul className="nav nav-pills">
                        <li className="active"><a href="#gsdk">Home</a></li>
                        <li><a href="#gsdk"> Profile</a></li>
                        <li><a href="#gsdk">Messages</a></li>
                     </ul>
                     <div className="tim-title">
                        <h3>Pagination</h3>
                     </div>
                     <ul className="pagination">

                        <li><a href="#gsdk">&laquo;</a></li>
                        <li><a href="#gsdk">1</a></li>
                        <li><a href="#gsdk">2</a></li>
                        <li className="active"><a href="#gsdk">3</a></li>
                        <li><a href="#gsdk">4</a></li>
                        <li><a href="#gsdk">5</a></li>
                        <li><a href="#gsdk">&raquo;</a></li>
                     </ul>
                  </div>
               </div>
            </div>
            <div id="labels-badges">
               <div className="row">
                  <div className="col-md-6">
                     <div className="tim-title">
                        <h3>Labels</h3>
                        <span className="label label-default">Default</span>
                        <span className="label label-primary">Primary</span>
                        <span className="label label-success">Success</span>
                        <span className="label label-info">Info</span>
                        <span className="label label-warning">Warning</span>
                        <span className="label label-danger">Danger</span>
                     </div>
                  </div>
                  <div className="col-md-6">
                  </div>
               </div>
            </div>
            <div className="tim-title">
               <h3>Notifications</h3>
            </div>
         </div>
      </div>
      <div id="notifications">
         <div className="alert alert-success">
            <div className="container">
               <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
         </div>
         <div className="alert alert-info">
            <div className="container">
               <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
         </div>
         <div className="alert alert-warning">
            <div className="container">
               <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
         </div>
         <div className="alert alert-danger">
            <div className="container">
               <b>Lorem ipsum</b> dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
            </div>
         </div>
         <div className="clearfix"></div>
      </div>
      <div className="main">
         <div className="container tim-container">
            <div className="tim-title">
               <h2>Typography</h2>
            </div>
            <div id="typography">
               <div className="row">
                  <div className="tim-typo">
                     <h1><span className="tim-note">Header 1</span>Awesome looking header </h1>
                  </div>
                  <div className="tim-typo">
                     <h2><span className="tim-note">Header 2</span>Awesome looking header</h2>
                  </div>
                  <div className="tim-typo">
                     <h3><span className="tim-note">Header 3</span>Awesome looking header</h3>
                  </div>
                  <div className="tim-typo">
                     <h4><span className="tim-note">Header 4</span>Awesome looking header</h4>
                  </div>
                  <div className="tim-typo">
                     <h5><span className="tim-note">Header 5</span>Awesome looking header</h5>
                  </div>
                  <div className="tim-typo">
                     <h6><span className="tim-note">Header 6</span>Awesome looking header</h6>
                  </div>
                  <div className="tim-typo">
                     <p><span className="tim-note">Paragraph</span>            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.</p>
                  </div>
                  <div className="tim-typo">
                     <span className="tim-note">Quote</span>
                     <blockquote>
                        <p>
                           Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam.
                        </p>
                        <small>
                        Steve Jobs, CEO Apple
                        </small>
                     </blockquote>
                  </div>
                  <div className="tim-typo">
                     <span className="tim-note">Muted Text</span>
                     <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                     </p>
                  </div>
                  <div className="tim-typo">
                     <span className="tim-note">Primary Text</span>
                     <p className="text-primary">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.
                     </p>
                  </div>
                  <div className="tim-typo">
                     <h1><span className="tim-note">Special Header</span>Header with special subtitle <small className="subtitle">".subtitle" is a special className for h1 title</small> </h1>
                  </div>
                  <div className="tim-typo">
                     <h2><span className="tim-note">Small Tag</span>Header with small subtitle <br/><small>".small" is a tag for the headers</small></h2>
                  </div>
               </div>
            </div>
            <div className="space"></div>
            <div id="images">
               <div className="tim-title">
                  <h2>Images</h2>
               </div>
               <br/>
               <div className="row">
                  <div className="col-md-4 col-sm-6">
                     <h4>Rounded Image</h4>
                     <img src="/images/mockup.png" alt="Rounded Image" className="img-rounded"/>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <h4>Circle Image</h4>
                     <img src="/images/mockup.png" alt="Circle Image" className="img-circle"/>
                  </div>
                  <div className="col-md-4 col-sm-6">
                     <h4>Thumbnail Image</h4>
                     <img src="/images/mockup.png" alt="Thumbnail Image" className="img-thumbnail"/>
                  </div>
               </div>
               <div className="row">
               </div>
            </div>
            <div className="tim-title">
               <h2>Javascript components</h2>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <div className="tim-title">
                     <h3>Modal</h3>
                  </div>
                  <button className="btn btn-primary" data-toggle="modal" data-target="#myModal">
                  Launch demo modal
                  </button>
                  <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                     <div className="modal-dialog">
                        <div className="modal-content">
                           <div className="modal-header">
                              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                              <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                           </div>
                           <div className="modal-body">
                              ...
                           </div>
                           <div className="modal-footer">
                              <button type="button" className="btn btn-default btn-simple" data-dismiss="modal">Close</button>
                              <div className="divider"></div>
                              <button type="button" className="btn btn-info btn-simple">Save</button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6">
                  <div id="tooltips">
                     <div className="tim-title">
                        <h3>Tooltips</h3>
                     </div>
                     <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
                     <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
                     <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
                     <button type="button" className="btn btn-default btn-tooltip" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>
                  </div>
               </div>
               <div className="clearfix"></div>
               <br/><br/>
            </div>
            <div className="tim-title">
               <h3>Collapse</h3>
            </div>
            <div id="acordeon">
               <div className="panel-group" id="accordion">
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h4 className="panel-title">
                           <a data-target="#collapseOne" href="#collapseOne" data-toggle="gsdk-collapse">
                           GSDK Collapsible Item 1
                           </a>
                        </h4>
                     </div>
                     <div id="collapseOne" className="panel-collapse collapse">
                        <div className="panel-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h4 className="panel-title">
                           <a data-target="#collapseTwo" href="#collapseTwo" data-toggle="gsdk-collapse">
                           GSDK Collapsible Item 2
                           </a>
                        </h4>
                     </div>
                     <div id="collapseTwo" className="panel-collapse collapse">
                        <div className="panel-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h4 className="panel-title">
                           <a data-target="#collapseThree" href="#collapseTwo" data-toggle="gsdk-collapse">
                           GSDK Collapsible Item 3
                           </a>
                        </h4>
                     </div>
                     <div id="collapseThree" className="panel-collapse collapse">
                        <div className="panel-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h4 className="panel-title">
                           <a data-toggle="collapse" href="#collapseFour">
                           Default Collapsible Item 1
                           </a>
                        </h4>
                     </div>
                     <div id="collapseFour" className="panel-collapse collapse">
                        <div className="panel-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
                  <div className="panel panel-default">
                     <div className="panel-heading">
                        <h4 className="panel-title">
                           <a data-toggle="collapse" href="#collapseFive">
                           Default Collapsible Item 2
                           </a>
                        </h4>
                     </div>
                     <div id="collapseFive" className="panel-collapse collapse">
                        <div className="panel-body">
                           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="space"></div>
            <div className="tim-title">
               <h3>Carousel</h3>
            </div>
         </div>
      </div>
      <div id="carousel">
         <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
               <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
               <li data-target="#carousel-example-generic" data-slide-to="1"></li>
               <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
               <div className="item active">
                  <img src="/images/carousel_blue.png" alt="Awesome Image"/>
               </div>
               <div className="item">
                  <img src="/images/carousel_green.png" alt="Awesome Image"/>
               </div>
               <div className="item">
                  <img src="/images/carousel_red.png" alt="Awesome Image"/>
               </div>
            </div>
            <a className="left carousel-control" href="#carousel-example-generic" data-slide="prev">
            <span className="fa fa-angle-left"></span>
            </a>
            <a className="right carousel-control" href="#carousel-example-generic" data-slide="next">
            <span className="fa fa-angle-right"></span>
            </a>
         </div>
      </div>
      <div className="main">
         <div className="container tim-container">
            <div id="extras">
               <div className="space"></div>
               <div className="row">
                  <div className="col-md-7 col-md-offset-0 col-sm-10 col-sm-offset-1">
                     <div className="text-center">
                        <img src="/images/dulau.jpg" alt="Rounded Image" className="img-rounded img-responsive img-dog"/>
                     </div>
                  </div>
                  <div className="col-md-5 col-sm-12">
                     <h1 className="text-center">About Creative Tim
                        <small className="subtitle">Get to know us</small>
                     </h1>
                     <hr/>
                     <p>
                        Creative Tim offers Bootstrap based design elements that speed up your development work. From plugins to complex kits, we have everything you need.
                     </p>
                     <p>
                        We love the web and care deeply for how users interact with a digital product. The idea behind Creative Tim was creating a standard of things we actually need and would personally use inside our web projects. We power businesses and individuals to create better looking web projects around the world.
                     </p>
                     <p>
                        We take great interest in how our customers use our resources and offer strong support and unlimited updates. We are constantly thinking about how to make our products intuitive, beautiful and extremely easy to understand, so feel free to tell us your thoughts!
                     </p>
                  </div>
               </div>
            </div>
         </div>
         <div className="space-30"></div>
      </div>
      <div className="parallax-pro">
         <div className="img-src" style={styleBg2}></div>
         <div className="container">
            <div className="row">
               <div className="col-md-12 text-center">
                  <h1>
                     <small>
                        Dont forget to check our latest release:
                     </small>
                  </h1>
               </div>
               <div className="col-md-6 col-md-offset-3 col-md-12 text-center">
               <h1 className="hello text-center">
               <a href="http://gsdk.creative-tim.com">Get Shit Done Kit <span className="label label-warning"> Pro</span></a>
               <small>
               <ul className="list-unstyled">
               <li>50+ new elements</li>
               <li>LESS and SASS files</li>
               <li>PSD for designers</li>
               <li>New Font Icons </li>
               </ul>
               </small>
               </h1>
               <div className="actions">
               <a className="btn btn-lg btn-warning btn-fill" href="http://gsdk.creative-tim.com/?ref=get-shit-done">Live Preview Kit</a>
               </div>
               </div>
            </div>
            <div className="space-30"></div>
            <div className="row">
               <div className="col-md-12 text-center">
                  <div className="credits">
                     &copy; <script>document.write(new Date().getFullYear())</script> Get Shit Done Kit by <a href="http://creative-tim.com"> Creative Tim</a>, made with <i className="fa fa-heart heart" alt="love"></i> for a better web.
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
    )
  }
}
