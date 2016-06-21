import React from 'react';
import BudgetItem from '../components/BudgetItem'
import CheckinAccounts from '../components/CheckinAccounts'

function BudgetList(props) {
    var budgetItems = props.budgetItems;
    var year = props.year;
    var month = props.month;

    return (
        <div>
            <div className="ui grid" style={{marginTop: "10px", marginBottom: "10px"}} id="top-elements">
                <div className="ui buttons right floated">
                    <button className="ui button">
                    <i className="chevron left icon blue"></i>
                    </button>
                    <button className="ui button blue">
                        {year} {month}
                    </button>
                    <button className="ui button">
                    <i className="chevron right icon blue"></i>
                    </button>
                </div>
                <div className="ui left floated">
                    <CheckinAccounts />
                </div>
            </div>
            <div className="ui middle aligned divided list">
                {budgetItems.map(function(budgetItem) {
                  return <div className="item" key={budgetItem.id}>
                        <BudgetItem budgetItem={budgetItem} />
                    </div>
                })}
            </div>
            <div className="ui">
              <button className="ui button blue">Add Category</button>
              <button className="ui button blue">Add Transaction</button>
            </div>
        </div>
    );
}

export default BudgetList;
