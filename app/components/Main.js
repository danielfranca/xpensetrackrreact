import React from 'react';
import { Link } from 'react-router';
import BudgetList from '../components/BudgetList';

function fakeData() {
    return [
            {
                id: 1,
                category: "Pablo/Food",
                budget: 30
            },
            {
                id: 2,
                category: "Groceries",
                budget: 160
            },
            {
                id: 3,
                category: "Restaurants/Deliveries",
                budget: 140
            },
            {
                id: 4,
                category: "Fun&Games",
                budget: 280
            },
            {
                id: 5,
                category: "Internet/Telephone/Tv",
                budget: 112
            },
            {
                id: 6,
                category: "House",
                budget: 945
            }
    ];
}


function Main(props) {
    return (
        <div>
            <div className="ui container">
                <h2 className="ui header center aligned" style={{marginTop: '5px'}}>
                    <div className="content">
                        <i className="circular dollar icon"></i>
                        Xpense Trackr
                    </div>
                </h2>
                <div className="ui center aligned">
                    <BudgetList budgetItems={fakeData()} />
                </div>
            </div>
        </div>
    );
}

export default Main;
