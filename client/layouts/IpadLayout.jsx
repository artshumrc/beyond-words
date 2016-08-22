IPadLayout = React.createClass({
    render(){
        console.log(this);
        return (
            <div className="archimedes-layout ipad-layout">
                <main>
                    {this.props.content}
                </main>
            </div>
        );
    }

});
