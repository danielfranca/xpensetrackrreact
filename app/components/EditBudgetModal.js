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
          <form onSubmit={props.onSubmitBudgetItem}>
              <div className="ui labeled input" style={{marginLeft: 10}}>
                  <div className="ui label">
                    Name
                  </div>
                <input type="text" placeholder="Category name" name="categoryName" id="categoryNameInput" value={props.categoryName}/>
                <input type="text" placeholder="Budget" name="budget" id="budget" value={props.budget}/>
              </div>
              <h4 className="ui horizontal divider">
              </h4>
              <div className="actions">
                <div className="ui button">Cancel</div>
                <button className="ui button" type="submit">OK</button>
              </div>
           </form>
        </div>
    );
}
