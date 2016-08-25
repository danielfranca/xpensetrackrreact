import React from 'react';
import BudgetItem from '../components/BudgetItem';
import CheckinAccounts from '../components/CheckinAccounts';
import Balance from '../components/Balance';
import CategoryModal from '../components/CategoryModal';
import EditBudgetModal from '../components/EditBudgetModal';
import NewTransactionModal from '../components/NewTransactionModal';
import BudgetItemContainer from '../containers/BudgetItemContainer';
var PropTypes = React.PropTypes;


function BudgetList(props) {
    var budgetItems = props.budgetItems;
    var year = props.year;
    var month = props.month;

    return (
        <div>
            <div className="ui grid" style={{marginTop: "10px", marginBottom: "10px"}} id="top-elements">
                <div className="ui buttons right floated mini">
                    <button className="ui button">
                    <i className="chevron left icon blue" onClick={props.onPrevButtonClicked}></i>
                    </button>
                    <button className="ui button blue">
                        {year} {month}
                    </button>
                    <button className="ui button" onClick={props.onNextButtonClicked}>
                    <i className="chevron right icon blue"></i>
                    </button>
                </div>
                <div className="ui left floated">
                    <CheckinAccounts />
                </div>
            </div>
            <div className="ui middle aligned divided list">
                {budgetItems.map(function(budgetItem) {
                  return <div className="item" key={budgetItem.category}>
                        <BudgetItemContainer budgetItem={budgetItem} onEditBudgetItem={props.onEditBudgetItem} />
                    </div>
                })}
            </div>
            <h4 className="ui horizontal divider">
            </h4>
            <div className="ui centered grid">
              <button className="ui button blue" onClick={props.onAddCategory}>Add Category</button>
              <button className="ui button blue" onClick={props.onAddNewTransaction}>Add Transaction</button>
            </div>
            <h4 className="ui horizontal divider header">
              <i className="bar chart icon"></i>
              Results
            </h4>
            <Balance />
            <CategoryModal onSubmitCategory={props.onSubmitCategory} />
            <EditBudgetModal
                onSubmitBudgetItem={props.onSubmitBudgetItem}
                category={'__'}
                budget={10}
                transactions={[]}
            />
            <NewTransactionModal />
        </div>
    );
}

BudgetList.propTypes = {
  onAddCategory: PropTypes.func.isRequired,
  onAddNewTransaction: PropTypes.func.isRequired,
  onSubmitCategory: PropTypes.func.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  budgetItems: PropTypes.array.isRequired,
}

export default BudgetList;
