
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
