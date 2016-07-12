import React from 'react';

export default function CategoryModal(props) {
    return (
        <div className="ui modal" id="categoryModal">
          <i className="close icon"></i>
          <div className="header">
            Add New Category
          </div>
          <h4 className="ui horizontal divider">
          </h4>
          <form className="ui form" onSubmit={props.onSubmitCategory} style={{marginLeft:"10px", marginRight: "10px"}}>
              <div className="field">
                <label>Category</label>
                <input type="text" name="categoryName" placeholder="Name" value={props.category} />
              </div>
              <div className="ui toggle checkbox">
                <input type="checkbox" name="isPermanent" />
                <label> Make it permanent</label>
              </div>
              <h4 className="ui horizontal divider">
              </h4>
              <div className="actions">
                <div className="ui button" style={{marginBottom: "10px"}}>Cancel</div>
                <button className="ui button" type="submit">OK</button>
              </div>
           </form>
        </div>
    );
}
