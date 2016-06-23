
Storage.prototype.setObject = function(key, value) {
    this.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = this.getItem(key);
    return value && JSON.parse(value);
}

export function loadBudgetItems() {
    return localStorage.getObject('budgetItems') || [];
}

export function saveBudgetItems(budgetItems) {
    localStorage.setObject('budgetItems', budgetItems);
}

export function saveNewCategory(categoryName) {
    console.log("Saving new category: ", categoryName);
    var categories = localStorage.getObject('categories') || [];
    if (categories.indexOf(categoryName) == -1) {
        console.log("It's a new category");
        categories.push(categoryName);
        console.log("New categories object: ", categories);
        localStorage.setObject('categories', categories);
    }
}
