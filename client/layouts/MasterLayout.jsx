MasterLayout = React.createClass({

	render(){
		return(
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
