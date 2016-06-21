import React from 'react';
import { currentMonth, currentYear, isValidYear, isValidMonth } from '../utils/helpers';
import { saveBudgetItems } from '../utils/persistence';

class MainContainer extends React.Component {

    createFakeData() {
        var data = [
                {
                    id: 1,
                    category: "Pablo/Food",
                    budget: 30
                },
                {
                    id: 2,
                    category: "Groceries",
                    budget: 160
                },
                {
                    id: 3,
                    category: "Restaurants/Deliveries",
                    budget: 140
                },
                {
                    id: 4,
                    category: "Fun&Games",
                    budget: 280
                },
                {
                    id: 5,
                    category: "Internet/Telephone/Tv",
                    budget: 112
                },
                {
                    id: 6,
                    category: "House",
                    budget: 945
                }
        ];
        saveBudgetItems(data);
    }

    constructor() {
        super();
        this.state = {
            month: currentMonth(),
            year: currentYear(),
        }
        this.createFakeData();
    }

    componentDidMount() {
        if (this.props.params.year && this.props.params.month &&
            isValidYear(this.props.params.year) && isValidMonth(this.props.params.month)) {
            this.setState({
                year: this.props.params.year,
                month: this.props.params.month
            });
        }
    }

    render() {
        return (
            <div>
            {React.cloneElement(this.props.children, { year: this.state.year, month: this.state.month })}
            </div>
        );
    }
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer;
