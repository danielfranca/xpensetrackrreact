import React from 'react';
import Main from '../components/Main'
import { currentMonth, currentYear } from '../utils/helpers'

class MainContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            month: currentMonth(),
            year: currentYear(),
        }
    }

    componentDidMount() {
        console.log("ROUTE PARAMS: ", this.props.routeParams);
        if (this.props.routeParams.year && this.props.routeParams.month) {
            this.setState({
                year: this.props.routeParams.year,
                month: this.props.routeParams.month
            });
        }
    }

    render() {
        return <Main year={this.state.year} month={this.state.month}/>;
    }
}

MainContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default MainContainer;
