import React from 'react';
import { Link } from 'react-router';
import BudgetListContainer from '../containers/BudgetListContainer';
import { loadBudgetItems } from '../utils/persistence'
import { yearMonthAsString } from '../utils/helpers'


function loadData(date) {
    let initialData = loadBudgetItems(date);
    if (initialData) {
        return initialData;
    }
    else {
        initialData = [];
        //If there's no data/Create new one with existent categories
        let categories = localStorage.getObject('categories') || [];
        for (var cat of categories) {
            if (cat.name) {
                initialData.push({
                    category: cat.name,
                    budget: 0,
                    transactions: []
                })
            }
        }
    }
    return initialData;
}

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
                    <BudgetListContainer budgetItems={loadData(yearMonthAsString(props.year, props.month))} year={props.year} month={props.month} />
                </div>
            </div>
        </div>
    );
}

export default Home;
