CatalogLayout = React.createClass({


  getInitialState(){
    return {
			catalogTitleText: "Illuminated Manuscripts in Boston Collections, Catalog, 2016.",
			catalogLayout: "grid",
      filters: [],
			skip: 0,
			limit: 12
    };
  },

	loadMoreObjects(){
		console.log("CatalogLayout.loadMoreObjects", this.state.skip + this.state.limit);
	    this.setState({
	      skip : this.state.skip + this.state.limit
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

				if(filter.values.indexOf(value) >= 0){
					valueIsInFilter = true;
					filterValueToRemove = filter.values.indexOf(value);
				}

				if(valueIsInFilter){
					filter.values.splice(filterValueToRemove, 1);
					if(filter.values.length === 0){
						filterToRemove = i;
					}
				}else {
					filter.values.push(value);
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

	handleChangeDate(e){

		var filters = this.state.filters;

		if(e.from > 600){
			var dateFromInFilters = false;

			filters.forEach(function(filter, i){
				if(filter.key === "dateFrom"){
					filter.values = [e.from];
					dateFromInFilters = true;
				}
			});

			if(!dateFromInFilters){
				filters.push({
					key:"dateFrom",
					values:[e.from]
				})
			}

		}else {
			var filterToRemove;

			filters.forEach(function(filter, i){
				if(filter.key === "dateFrom"){
					filterToRemove = i;
				}

			});

			if(typeof filterToRemove !== "undefined"){
				filters.splice(filterToRemove, 1);
			}

		}

		if(e.to < 1700){
			var dateToInFilters = false;

			filters.forEach(function(filter, i){
				if(filter.key === "dateTo"){
					filter.values = [e.to];
					dateToInFilters = true;
				}
			});

			if(!dateToInFilters){
				filters.push({
					key:"dateTo",
					values:[e.to]
				})
			}

		}else {
			var filterToRemove;

			filters.forEach(function(filter, i){
				if(filter.key === "dateTo"){
					filterToRemove = i;
				}

			});

			if(typeof filterToRemove !== "undefined"){
				filters.splice(filterToRemove, 1);
			}

		}


		this.setState({
			filters: filters
		});

	},

	toggleCatalogLayout(layout){
		this.setState({
			catalogLayout: layout
		});
	},

	render(){
		console.log("CatalogLayout.filters", this.state.filters);
		return(
			<div className="archimedes-layout catalog-layout">

				<HeaderCatalog
					toggleSearchTerm={this.toggleSearchTerm}
					handleChangeDate={this.handleChangeDate}
					handleChangeTextsearch={this.handleChangeTextsearch}
					catalogTitleText={this.state.catalogTitleText}
					toggleCatalogLayout={this.toggleCatalogLayout}
					catalogLayout={this.state.catalogLayout}
					/>

				<ObjectsList
					filters={this.state.filters}
					toggleSearchTerm={this.toggleSearchTerm}
					loadMoreObjects={this.loadMoreObjects}
					skip={this.state.skip}
					limit={this.state.limit}
					catalogLayout={this.state.catalogLayout}
					/>

			</div>
			);
		}

});
