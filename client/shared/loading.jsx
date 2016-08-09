Loading = React.createClass({
    render(){
        return (
          <div className="loading">
              <section className="page-head fullscreen bg-dark">
                  <div className="background-screen cyan">
                  </div>
                  <div className="container v-align-transform">
                      <div className="row">
                          <div className="col-sm-10 col-sm-offset-1 text-center">
                              <h1 className="mb40 mb-xs-16 large">
                                  <i className="fa fa-spin fa-spinner"></i> Loading
                              </h1>
                          </div>
                      </div>

                  </div>

              </section>

          </div>
        );
    }
});