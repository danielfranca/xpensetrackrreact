import React from 'react';
import BudgetList from '../components/BudgetList';
import {saveNewCategory} from '../utils/persistence';
var PropTypes = React.PropTypes;


class BudgetListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddCategory = this.handleAddCategory.bind(this);
        this.handleSubmitCategory = this.handleSubmitCategory.bind(this);
    }

    handleAddCategory(e) {
        console.log("handleAddCategory - E: ", e);
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

    render() {
        return (
            <BudgetList
                year={this.props.year} month={this.props.month} budgetItems={this.props.budgetItems}
                onAddCategory={this.handleAddCategory} onSubmitCategory={this.handleSubmitCategory}
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
