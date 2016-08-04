MasterLayout = React.createClass({
    render(){
        console.log(this);
        return (
            <div className="archimedes-layout master-layout">
                <Header />
                <main>
                    {this.props.content}
                </main>
                <Footer/>
            </div>
        );
    }

});
