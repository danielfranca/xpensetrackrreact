import React from 'react';
import { currentYearMonthAsString, currentMonthAsString, currentYear, isValidYear, isValidMonth } from '../utils/helpers';
import { saveBudgetItems } from '../utils/persistence';

class MainContainer extends React.Component {

    createFakeCategories() {
        var curDateYearMonth = currentYearMonthAsString();
        var data = [
            {
                category: "Pablo/Food",
                budget: 100,
                transactions: []
            },
            {
                category: "Groceries",
                budget: 200,
                transactions: []
            },
            {
                category: "Restaurants/Deliveries",
                budget: 160,
                transactions: []
            },
            {
                category: "Fun&Games",
                budget: 320,
                transactions: []
            },
            {
                category: "Internet/Telephone/Tv",
                budget: 112,
                transactions: []
            },
            {
                category: "House",
                transactions: []
            }
        ];
        saveBudgetItems(curDateYearMonth, data);
    }

    constructor() {
        super();
        this.state = {
            month: currentMonthAsString(),
            year: currentYear(),
        }
        //this.createFakeCategories();
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
            {React.cloneElement(this.props.children, { year: parseInt(this.state.year), month: this.state.month })}
            </div>
        );
    }
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer;
