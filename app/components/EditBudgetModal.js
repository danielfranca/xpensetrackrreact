import React from 'react';

export default function EditBudgetModal(props) {
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
              <input type="text" name="category" placeholder="Category" value={props.category} />
            </div>
            <div className="field">
              <label>Budget</label>
              <input type="text" name="budget" placeholder="Budget" value={props.budget} />
            </div>
            <button className="ui button" type="submit">Save</button>
          </form>
        </div>
    );
}
