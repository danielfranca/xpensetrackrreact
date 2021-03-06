import React from 'react';
import { Link } from 'react-router';
import BudgetListContainer from '../containers/BudgetListContainer';


function Home(props) {
    return (
        <div>
            <div className="ui container">
                <h2 className="ui header center aligned" style={{marginTop: '5px', color: "#2E9AFE"}}>
                    <div className="content">
                        <i className="circular dollar icon"></i>
                        Xpense Trackr
                    </div>
                </h2>
                <div className="ui center aligned">
                    <BudgetListContainer year={props.year} month={props.month} />
                </div>
            </div>
        </div>
    );
}

export default Home;
