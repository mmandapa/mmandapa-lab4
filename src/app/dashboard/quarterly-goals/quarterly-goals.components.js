function addGoal() {
    const newGoalText = prompt("Enter a new quarter goal:");
    if (!newGoalText) {
        alert("Goal cannot be empty!");
        return;
    }

    let newGoalHashtag = prompt("Enter a goal hashtag:");
    if (!newGoalHashtag) {
        alert("Hashtag cannot be empty!");
        return;
    }

    if (!newGoalHashtag.startsWith("#")) {
        newGoalHashtag = "#" + newGoalHashtag;
    }

    const newGoalStatus = prompt("Enter goal completion status:");
    if (!newGoalStatus) {
        alert("Completion status cannot be empty!");
        return;
    }

    const newGoal = document.createElement("div");
    newGoal.classList.add("goal");

    newGoal.innerHTML = `
        <label class="goal-label">
            <input type="checkbox" class="goal-checkbox">
            <span class="goal-text">${newGoalText}</span>
        </label>
        <div class="goal-details">
            <span class="hashtag" style="color: #9b72ee;">${newGoalHashtag}</span>
            <span class="progress">${newGoalStatus}</span>
        </div>
        <div class="line"></div>
    `;

    document.querySelector(".goal-list").appendChild(newGoal);
}

document.getElementById("add-goal-btn").addEventListener("click", addGoal);

document.getElementById("edit-goals-btn").addEventListener("click", addGoal);