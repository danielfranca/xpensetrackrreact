import {currentYearMonthAsString} from '../utils/helpers';

Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

export function loadBudgetItems(date=currentYearMonthAsString()) {
    return localStorage.getObject('budgetItems-' + date) || [];
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
        var categories = localStorage.getObject('categories') || [];
        if (categories.indexOf(categoryName) == -1) {
            console.log("It's a new category");
            categories.push(categoryName);
            console.log("New categories object: ", categories);
            localStorage.setObject('categories', categories);
        }
    }
}
