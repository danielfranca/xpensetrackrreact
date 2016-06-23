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
          <form onSubmit={props.onSubmitCategory}>
              <div className="ui labeled input" style={{marginLeft: 10}}>
                  <div className="ui label">
                    Name
                  </div>
                <input type="text" placeholder="Category name" name="categoryName" id="categoryNameInput"/>
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
