// Human age to dog years
function ageInDogYears(humanAge) {
    if (typeof humanAge !== 'number' || humanAge < 0) {
        return "Please provide a valid age.";
    }
    return humanAge * 7;
}

// The result
function showDogYears() {
    const age = parseInt(document.getElementById("ageInput").value);
    const result = ageInDogYears(age);
    document.getElementById("result").textContent = 
        typeof result === 'number' ? `Your age in dog years is: ${result}` : result;
}
