
import React from 'react';
import api from './services';

class SelectAgency extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            agencies: [],
        };
    }

    componentDidMount() {
        api.fetchData(
            'http://5ae97684531a58001414278c.mockapi.io/agencies', 
            response => {
                const agencies = response.data;
                this.setState({ agencies });
        });        
    }

    renderAgency(agency) {
        return (
            <option value={agency.id} key={agency.id}>
                {agency.name} - {agency.code}
            </option>
        );
    }

    render() {
        return (
            <div>
                <label for="agency-select">Agency:</label>
                <select className="form-control" id="agency-select" onChange={this.props.handleChange}>
                    <option value="">Choose agency</option>
                    { this.state.agencies.map(agency => this.renderAgency(agency)) }
                </select>                
            </div>
        );
    }
};

class SelectCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
        };
    }

    fetchData() {
        api.fetchData(
            'http://5ae97684531a58001414278c.mockapi.io/agencies/' + this.props.chosenAgency + '/categories',
            response => {
                const categories = response.data;
                this.setState({ categories });
            }
        );
    }

    componentDidMount() {
        // Once the component is mounted we fetch data from API for the first time
        if (this.props.chosenAgency) {
            this.fetchData();
        }
    }

    componentDidUpdate(prevProps) {
        // If chosen agency prop changes we fetch the data from the API once again
        if (this.props.chosenAgency !== prevProps.chosenAgency) {
            this.fetchData();
        }
    }

    renderCategory(category) {
        return (
            <option value={category.id} key={category.id}>
                {category.name} - {category.code}
            </option>
        );
    }

    render() {
        return (
            <div>
                <label for="category-select">Category:</label>
                <select className="form-control" id="category-select" onChange={this.props.handleChange}>
                    <option value="">Choose category</option>
                    { this.state.categories.map(category => this.renderCategory(category)) }
                </select>  
            </div>
        );
    }
};

export {
    SelectAgency,
    SelectCategory,
};
