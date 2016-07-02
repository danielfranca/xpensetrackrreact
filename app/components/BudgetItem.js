import React from 'react';
import guessBestIcon from "../utils/helpers";
import numeral from 'numeral';
var PropTypes = React.PropTypes;


function BudgetItem(props) {
    var iconClass = "circular " + guessBestIcon(props.budgetItem.category) + " icon blue";
    console.log("onEditBudgetItem: ", props.onEditBudgetItem);
    return  (
        <div className="content">
            <div className="right floated content">
                <div className="ui icon button blue"><i className="icon trash"></i></div>
            </div>
            <div className="header" style={{color: "#555555"}}>
                <i className={iconClass}></i>
                <button className="ui" onClick={props.onEditBudgetItem}>{props.budgetItem.category}</button>
            </div>
            {numeral(15).format('$ 0,0.00')} / {numeral(props.budgetItem.budget).format('$ 0,0.00')}
        </div>
    );
}

BudgetItem.propTypes = {
  onEditBudgetItem: PropTypes.func.isRequired,
  //budgetItem: PropTypes.object.isRequired
}

export default BudgetItem;
