import React from 'react';
import BudgetItem from '../components/BudgetItem';
var PropTypes = React.PropTypes;


class BudgetItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        this.handleEditBudgetItem = this.handleEditBudgetItem.bind(this);
    }

    handleDeleteItem(e) {
        console.log("handleDeleteItem");
    }

    handleEditBudgetItem(e) {
        console.log("handleEditBudgetItem", $('#EditBudgetModal'));
        $('#budget-category').val(this.props.budgetItem.category);
        $('#budget-value').val(this.props.budgetItem.budget)

        $('#EditBudgetModal').modal('show');
    }

    render() {
        return (
            <BudgetItem budgetItem={this.props.budgetItem} onEditBudgetItem={this.handleEditBudgetItem} onDeleteItem={this.handleDeleteItem} />
        );
    }
}

BudgetItemContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BudgetItemContainer;
