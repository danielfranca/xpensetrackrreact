import React from 'react';

export default function Balance(props) {
    return (
        <div className="ui centered grid">
        <div className="ui horizontal list">
          <div className="item">
            <i className="line chart circular blue icon"></i>
            <div className="content">
              <div className="header">Forecast</div>
              $ 0.00
            </div>
          </div>
          <div className="item">
            <i className="shop circular blue icon"></i>
            <div className="content">
              <div className="header">Spent</div>
              $ 0.00
            </div>
          </div>
          <div className="item">
            <i className="dollar circular blue icon"></i>
            <div className="content">
              <div className="header">Balance</div>
              $ 0.00
            </div>
          </div>
        </div>
        </div>
    )
}
