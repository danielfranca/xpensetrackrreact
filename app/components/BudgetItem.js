import React from 'react';
import guessBestIcon from "../utils/helpers";
import numeral from 'numeral';

function BudgetItem(props) {
    var iconClass = "circular " + guessBestIcon(props.budgetItem.category) + " icon";
    return  <div className="content">
            <div className="right floated content">
                <div className="ui button">Edit</div>
            </div>
            <div className="header">
                <i className={iconClass}></i>
                {props.budgetItem.category}
            </div>
            {numeral(props.budgetItem.budget).format('$ 0,0.00')}
        </div>
}

export default BudgetItem;
