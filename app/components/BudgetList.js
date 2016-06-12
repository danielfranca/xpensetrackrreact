import React from 'react';
import BudgetItem from '../components/BudgetItem'

function BudgetList(props) {
    var budgetItems = props.budgetItems;
    return (
        <div>
            <h1>2016 June</h1>
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
