function checkIfISPlaindrome(list) {
    for (i = 0; i < list.length / 2; i++)
        if (list[i] !== list[list.length - 1 - i])
            return "Not Plaindrome";
    return "Plaindrome";
}

const list = [1, 2, 9, 2, 1];
console.log("This list is ", checkIfISPlaindrome(list));
