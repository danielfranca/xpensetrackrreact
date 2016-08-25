const icons = [
    "doctor",
    "treatment",
    "legal",
    "gift",
    "plane",
    "travel",
    "building",
    "car",
    "call",
    "coffee",
    "emergency",
    "food",
    "hospital",
    "paw",
    "taxi",
    "american express",
    "mastercard",
    "visa",
    "paypal",
    "payment",
    "soccer",
    "shop"
];

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export default function guessBestIcon(word) {
    word = word.toLowerCase();

    var iconsMatch = icons.filter((icon) => {
        return (word.includes(icon));
    })

    if (iconsMatch.length > 0) {
        return iconsMatch[0];
    }

    if (word.includes("sport") || word.includes("football") || word.includes("games")) {
        return "soccer";
    }
    if (word.includes("credit") || word.includes("credit")) {
        return "payment";
    }
    if (word.includes("restaurants")) {
        return "food";
    }
    if (word.includes("health")) {
        return "treatment";
    }
    if (word.includes("holidays")) {
        return "travel";
    }
    if (word.includes("mobile") || word.includes("phone")) {
        return "call";
    }
    if (word.includes("uber")) {
        return "taxi";
    }
    if (word.includes("house") || word.includes("housing")) {
        return "building";
    }
    if (word.includes("pet") || word.includes("dog") || word.includes("cat")) {
        return "paw";
    }
    if (word.includes("groceries") || word.includes("market") || word.includes("buy")) {
        return "shop";
    }

    return "dollar";
}

export function currentYear() {
    return new Date().getFullYear();
}

export function currentMonthAsString() {
    return months[new Date().getMonth()];
}

export function currentMonth() {
    return new Date().getMonth();
}

export function currentYearMonthAsString() {
    return currentYear + '/' + currentMonth;
}

export function yearMonthAsString(year, month) {
    return year + '/' + month;
}

export function navYearMonth(year, month, direction) {

    var monthIdx = months.indexOf(month);

    if (direction == 'prev') {
        if (month == 0) {
            year--;
            monthIdx=11;
        } else {
            monthIdx--;
        }
    } else {
        if (monthIdx == 11) {
            monthIdx = 0;
            year++;
        } else {
            monthIdx++;
        }
    }

    return year, months[monthIdx];
}

export function isValidYear(year) {
    var curYear = currentYear();
    return (year > curYear - 20 && year < curYear + 20 );
}

export function isValidMonth(month) {
    return months.indexOf(month) > -1;
}
