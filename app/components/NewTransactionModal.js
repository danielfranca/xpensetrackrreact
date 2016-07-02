import React from 'react';

export default function NewTransactionModal(props) {
    return (
        <div className="ui modal" id="newTransactionModal">
          <i className="close icon"></i>
          <div className="header">
            Add New Transaction
          </div>
          <h4 className="ui horizontal divider">
          </h4>
          <form onSubmit={props.onSubmitCategory}>
                  <div className="ui search" id="searchCategory">
                    <div className="ui icon input">
                      <input className="prompt" type="text" placeholder="Category..."/>
                    </div>
                    <div className="results"></div>
                  </div>
                  <div className="ui labeled input" style={{marginLeft: 10}}>
                  <div className="ui label">
                    Description
                  </div>
                <input type="text" placeholder="Description" name="description" id="newTransactionDescription"/>
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
