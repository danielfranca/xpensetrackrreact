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
]

export default function guessBestIcon(word) {
    word = word.toLowerCase();

    /*icons.map(function(icon) {
        if (word.includes(icon)) {
            return icon;
        }
    })*/
    for (var i=0; i < icons.length; i++) {
        if (word.includes(icons[i])) {
            return icons[i];
        }
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
