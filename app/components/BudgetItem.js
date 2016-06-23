import React from 'react';
import guessBestIcon from "../utils/helpers";
import numeral from 'numeral';

function BudgetItem(props) {
    var iconClass = "circular " + guessBestIcon(props.budgetItem.category) + " icon blue";
    return  <div className="content">
            <div className="right floated content">
                <div className="ui icon button blue"><i className="icon edit"></i></div>
                <div className="ui icon button blue"><i className="icon trash"></i></div>
            </div>
            <div className="header" style={{color: "#555555"}}>
                <i className={iconClass}></i>
                {props.budgetItem.category}
            </div>
            {numeral(15).format('$ 0,0.00')} / {numeral(props.budgetItem.budget).format('$ 0,0.00')}
        </div>
}

export default BudgetItem;
