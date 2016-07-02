import React from 'react';
import BudgetList from '../components/BudgetList';
import {saveNewCategory} from '../utils/persistence';
var PropTypes = React.PropTypes;


class BudgetListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.handleAddNewTransaction = this.handleAddNewTransaction.bind(this);
        this.handleEditBudgetItem = this.handleEditBudgetItem.bind(this);
        this.handleSubmitCategory = this.handleSubmitCategory.bind(this);
        this.handleSubmitBudgetItem = this.handleSubmitBudgetItem.bind(this);
    }

    handleAddCategory(e) {
        console.log("handleAddCategory - E: ", e);
        $('#categoryNameInput').val("");
        $('#categoryModal')
          .modal({
            closable  : false,
            onDeny    : function(){
              console.log('Wait not yet!');
              return false;
            },
            onApprove : function() {
              console.log('Approved!');
            }
          })
          .modal('show')
        ;
    }

    handleSubmitCategory(e) {
        saveNewCategory(e.target.categoryName.value);
    }

    handleSubmitBudgetItem(e) {
        console.log("Saving Budget Item...");
    }

    handleAddNewTransaction(e) {
        console.log("Clicked to add new transaction")
        $('#newTransactionCategory').val("");
        $('#newTransactionDescription').val("");
        $('#newTransactionModal')
          .modal({
            closable  : false,
            onDeny    : function(){
              console.log('Wait not yet!');
              return false;
            },
            onApprove : function() {
              console.log('Approved!');
            }
          })
          .modal('show')
        ;
    }

    handleEditBudgetItem(e) {
        $('#EditBudgetModal')
          .modal({
            closable  : false,
            onDeny    : function(){
              console.log('Wait not yet!');
              return false;
            },
            onApprove : function() {
              console.log('Approved!');
            }
          })
          .modal('show')
        ;

    }

    render() {
        return (
            <BudgetList
                year={this.props.year} month={this.props.month} budgetItems={this.props.budgetItems}
                onAddCategory={this.handleAddCategory}
                onAddNewTransaction={this.handleAddNewTransaction}
                onSubmitCategory={this.handleSubmitCategory}
                onSubmitBudgetItem={this.handleSubmitBudgetItem}
                onEditBudgetItem={this.handleEditBudgetItem}
            />
        );
    }
}

BudgetListContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

BudgetList.propTypes = {
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  budgetItems: PropTypes.array.isRequired,
}

export default BudgetListContainer;
