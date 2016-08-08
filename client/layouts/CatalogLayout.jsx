CatalogLayout = React.createClass({

  getInitialState(){
    return {
      filters: [],
			skip: 0
    };
  },

	loadMoreObjects(){
	    this.setState({
	      skip : this.state.skip + 10
	    });

	},

	toggleSearchTerm(key, value){
		var self = this,
				filters = this.state.filters;
		var keyIsInFilter = false,
				valueIsInFilter = false,
				filterValueToRemove,
				filterToRemove;

		filters.forEach(function(filter, i){
			if(filter.key === key){
				keyIsInFilter = true;

				filter.values.forEach(function(filterValue, j){
						if(filterValue._id === value._id){
							valueIsInFilter = true;
							filterValueToRemove = j;
						}
				})

				if(valueIsInFilter){
					filter.values.splice(filterValueToRemove, 1);
					if(filter.values.length === 0){
						filterToRemove = i;
					}
				}else {
					if(key === "works"){
						filter.values = [value];
					}else {
						filter.values.push(value);
					}
				}

			}

		});


		if(typeof filterToRemove !== "undefined"){
			filters.splice(filterToRemove, 1);
		}

		if(!keyIsInFilter){
			filters.push({
									key: key,
									values: [value]
								});

		}

		this.setState({
			filters: filters,
			skip: 0
		});

	},

	handleChangeTextsearch(e){

		var filters = this.state.filters;
		var textsearch = $(".text-search input").val();

		if(textsearch && textsearch.length){
			var textsearchInFilters = false;

			filters.forEach(function(filter, i){
				if(filter.key === "textsearch"){
					filter.values = [textsearch];
					textsearchInFilters = true;
				}
			});

			if(!textsearchInFilters){
				filters.push({
					key:"textsearch",
					values:[textsearch]
				})
			}

		}else {
			var filterToRemove;

			filters.forEach(function(filter, i){
				if(filter.key === "textsearch"){
					filterToRemove = i;
				}

			});

			if(typeof filterToRemove !== "undefined"){
				filters.splice(filterToRemove, 1);
			}


		}

		this.setState({
			filters: filters
		})

	},

	handleChangeLineN(e){

		var filters = this.state.filters;

		if(e.from > 1){
			var lineFromInFilters = false;

			filters.forEach(function(filter, i){
				if(filter.key === "lineFrom"){
					filter.values = [e.from];
					lineFromInFilters = true;
				}
			});

			if(!lineFromInFilters){
				filters.push({
					key:"lineFrom",
					values:[e.from]
				})
			}

		}else {
			var filterToRemove;

			filters.forEach(function(filter, i){
				if(filter.key === "lineFrom"){
					filterToRemove = i;
				}

			});

			if(typeof filterToRemove !== "undefined"){
				filters.splice(filterToRemove, 1);
			}

		}

		if(e.to < 2100){
			var lineToInFilters = false;

			filters.forEach(function(filter, i){
				if(filter.key === "lineTo"){
					filter.values = [e.to];
					lineToInFilters = true;
				}
			});

			if(!lineToInFilters){
				filters.push({
					key:"lineTo",
					values:[e.to]
				})
			}

		}else {
			var filterToRemove;

			filters.forEach(function(filter, i){
				if(filter.key === "lineTo"){
					filterToRemove = i;
				}

			});

			if(typeof filterToRemove !== "undefined"){
				filters.splice(filterToRemove, 1);
			}

		}


		this.setState({
			filters: filters
		})

	},

	render(){
		console.log("CatalogLayout.filters", this.state.filters);
		return(
			<div className="archimedes-layout catalog-layout">

				<Header
					toggleSearchTerm={this.toggleSearchTerm}
					handleChangeLineN={this.handleChangeLineN}
					handleChangeTextsearch={this.handleChangeTextsearch}
					/>

				<ObjectsList
					filters={this.state.filters}
					toggleSearchTerm={this.toggleSearchTerm}
					loadMoreObjects={this.loadMoreObjects}
					skip={this.state.skip}
					/>


				<FilterWidget filters={this.state.filters}/>
			  {/*<ModalLogin />
				<ModalSignup />*/}

			</div>
			);
		}

});
