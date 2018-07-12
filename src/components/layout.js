import React from 'react';
import Toggle from './toggle';
import { SelectAgency, SelectCategory } from './select';
import DataTable from './table';

class Layout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleState: false,
            selectedAgency: 0,
            selectedCategory: 0,
        };
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleAgencyChange = this.handleAgencyChange.bind(this);    
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
    };

    handleToggleChange(event) {
        this.setState({ toggleState: event.target.checked });        
    };

    handleAgencyChange(event) {
        this.setState({ 
            selectedAgency: event.target.value,
            selectedCategory: 0,
        });        
    };

    handleCategoryChange(event) {
        this.setState({ selectedCategory: event.target.value });
    };

    render() {
        return ( 
            <div class="layout">
                <h1 align="center">PriceMoov Technical Test</h1>
                <SelectAgency handleChange={this.handleAgencyChange} />
                <SelectCategory handleChange={this.handleCategoryChange} chosenAgency={this.state.selectedAgency} />
                <DataTable 
                    toggleState={this.state.toggleState}
                    chosenAgency={this.state.selectedAgency} 
                    chosenCategory={this.state.selectedCategory}
                />
                <Toggle handleChange={this.handleToggleChange} />
            </div>
        );
    };

};

export default Layout;
