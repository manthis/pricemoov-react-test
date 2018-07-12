
import React from 'react';
import api from './services';

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        };
    }

    fetchData() {
        if (this.props.chosenCategory) {
            const url = 'http://5ae97684531a58001414278c.mockapi.io/agencies/' +
                this.props.chosenAgency + '/categories/' + 
                this.props.chosenCategory + '/prices';

            api.fetchData(
                url, response => {
                    const data = response.data;
                    data.sort((a, b) => {
                        // We sort epoch dates in a ascending way
                        return a.startDate - b.startDate;
                    });
                    this.setState({ data });
                }
            );
        }
    }

    componentDidMount() {
        // Once the component is mounted we fetch data from API for the first time
        if (this.props.chosenCategory) {
            this.fetchData();
        }
    }

    componentDidUpdate(prevProps) {
        // If chosenCategory changes
        if (this.props.chosenCategory !== prevProps.chosenCategory) {
            // If chosen category is zero
            if (!this.props.chosenCategory) {
                this.setState({data:[]});
            } else {
                this.fetchData();
            }
        } 
    }

    renderTableLine(line) {
        if (!line.isValidated && !this.props.toggleState) {
            return;
        }
        return (
            <tr key={line.id}>
                <td>{line.startDate}</td>
                <td>{line.price}</td>
                <td>{line.suggestedPrice}</td>
                <td hidden="true">{line.isValidated.toString()}</td>
            </tr>
        );
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Suggested Price</th>
                            <th hidden="true">isValidated</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.state.data.map(line => this.renderTableLine(line)) }
                    </tbody>
                </table>
            </div>
        );
    }
};

export default DataTable;
