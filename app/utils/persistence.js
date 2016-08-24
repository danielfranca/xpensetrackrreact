import {currentYearMonthAsString} from '../utils/helpers';

// General
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

// BudgetItems /Load/Edit/Find/Save
// Key: budgetItems-201601
export function loadBudgetItems(date=currentYearMonthAsString()) {
    console.log("Loading data for year/month: ", date);
    return localStorage.getObject('budgetItems-' + date) || [];
}

export function editBudgetItem(category, budget, date=currentYearMonthAsString()) {
        var items = loadBudgetItems(date);
        var oldItem = items.find((item) => {
            return item.category == category;
        });
        //Replace old
        if (oldItem) {
            oldItem.budget = budget;
            saveBudgetItems(items, date);
        }
}

export function saveBudgetItems(budgetItems, date=currentYearMonthAsString()) {
    localStorage.setObject('budgetItems-' + date, budgetItems);
}

export function renameCategory(oldName, newName, date = currentYearMonthAsString(), changeDefault = true) {

    var items = loadBudgetItems(date);
    var newItems = items.map((item) => {
        return {
            id: item.id,
            category: (item.category === oldName)?newName:item.category,
            transactions: [],
            budget: item.budget
        };
    })

    saveBudgetItems(date, newItems);

    if (changeDefault) {
        var defaultCategories = localStorage.getObject('default-categories');
        var newCategories = defaultCategories.map((cat) => {
            return { name: (cat.name === oldName)?newName:cat.name };
        })
    }
}

export function saveNewCategory(categoryName, isPermanent) {
    console.log("Saving new category: ", categoryName);

    //Save it for the current budget month
    var data = loadBudgetItems();
    data.push({
        category: categoryName,
        budget: 0,
        transactions: []
    });
    saveBudgetItems(data);

    //Save it as new default category
    if (isPermanent) {
        var categoriesHash = localStorage.getObject('categories-hash') || [];
        var categories = localStorage.getObject('categories') || [];
        if (!(categoryName in categoriesHash)) {
            console.log("It's a new category");
            categories.push({
                name: categoryName
            });
            categoriesHash[categoryName] = categories.length;
            console.log("New categories object: ", categories);
            localStorage.setObject('categories', categories);
            localStorage.setObject('categories-hash', categoriesHash);
        }
    }
}
