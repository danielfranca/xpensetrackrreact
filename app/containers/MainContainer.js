import React from 'react';
import { currentMonth, currentYear, isValidYear, isValidMonth } from '../utils/helpers'

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            month: currentMonth(),
            year: currentYear(),
        }
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
