ComingSoonHomeLayout = React.createClass({
	componentDidMount(){
		if(typeof location.hash !== "undefined" && location.hash.length > 0){
			setTimeout(function(){
				$("html, body").animate({ scrollTop: $(location.hash).offset().top - 100 }, 300);

			}, 1000);

		}
	},
	render(){
		return(
			<div className="archimedes-layout home-layout">
				<Header/>
				<HomeContent />
				<Footer/>
			</div>
			);
		}

});
