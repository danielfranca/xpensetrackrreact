import React from 'react';
import BudgetItem from '../components/BudgetItem'

function BudgetList(props) {
    var budgetItems = props.budgetItems;
    var year = props.year;
    var month = props.month;

    return (
        <div>
            <div className="ui buttons">
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
            <div className="ui middle aligned divided list">
                {budgetItems.map(function(budgetItem) {
                  return <div className="item" key={budgetItem.id}>
                        <BudgetItem budgetItem={budgetItem} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default BudgetList;
