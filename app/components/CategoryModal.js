import React from 'react';

export default function CategoryModal(props) {
    return (
        <div className="ui modal active">
          <i className="close icon"></i>
          <div className="header">
            Add New Category
          </div>
          <h4 className="ui horizontal divider">
          </h4>
          
          <div className="ui centered grid">
              <div className="ui input">
                <input type="text" placeholder="Category name" />
              </div>
          </div>
          <h4 className="ui horizontal divider">
          </h4>
          <div className="actions">
            <div className="ui button">Cancel</div>
            <div className="ui button">OK</div>
          </div>
        </div>
    );
}
