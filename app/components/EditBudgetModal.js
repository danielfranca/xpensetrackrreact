import React from 'react';
var PropTypes = React.PropTypes;


function EditBudgetModal(props) {
    return (
        <div className="ui modal" id="EditBudgetModal">
          <i className="close icon"></i>
          <div className="header">
            Edit Budget
          </div>
          <h4 className="ui horizontal divider">
          </h4>
          <form className="ui centered form" onSubmit={props.onSubmitBudgetItem} style={{marginLeft: "10px", marginRight: "10px", marginBottom: "10px"}}>
            <div className="field">
              <label>Category</label>
              <input type="text" name="category" placeholder="Category" defaultValue={props.category} />
            </div>
            <div className="field">
              <label>Budget</label>
              <input type="text" name="budget" placeholder="Budget" defaultValue={props.budget} />
            </div>


            <div className="ui middle aligned divided list">
            {
                props.transactions.map(function(transaction){
                    return <div className="item">
                             <div className="right floated content">
                                <div className="ui tag">{props.value}</div>
                             </div>
                             <i className="ui money circular {props.icon}" />
                             <div className="content">
                                {props.category}: {transaction.description}
                             </div>
                           </div>;
                })
            }
            </div>


            <button className="ui button" type="submit">Save</button>
          </form>
        </div>
    );
}

EditBudgetModal.propTypes = {
  onSubmitBudgetItem: PropTypes.func.isRequired,
  budget: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  transactions: PropTypes.array.isRequired,
}

export default EditBudgetModal;
