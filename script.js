function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

let steps = [
    "Kettlebell Swings – 30 seconds",
    "Treadmill Jog – 1 minute",
    "Goblet Squats – 30 seconds",
    "Treadmill Sprint – 20 seconds",
    "Rest – 30 seconds"
];

let currentStepIndex = 0;
let timer;
let timeLeft = 30;

function startWorkout() {
    currentStepIndex = 0;
    loadStep();
}

function loadStep() {
    document.getElementById("currentStep").innerText = steps[currentStepIndex];
    timeLeft = 30;
    updateTimerDisplay();
    startTimer();
    updateProgress();
}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            nextStep();
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById("timeDisplay").innerText =
        "00:" + (timeLeft < 10 ? "0" + timeLeft : timeLeft);
}

function nextStep() {
    currentStepIndex++;
    if (currentStepIndex >= steps.length) {
        document.getElementById("currentStep").innerText = "Workout Complete!";
        clearInterval(timer);
        document.getElementById("progressBar").style.width = "100%";
        return;
    }
    loadStep();
}

function updateProgress() {
    let percent = (currentStepIndex / steps.length) * 100;
    document.getElementById("progressBar").style.width = percent + "%";
}

function resetWorkout() {
    clearInterval(timer);
    currentStepIndex = 0;
    document.getElementById("currentStep").innerText = "Press Start to begin.";
    document.getElementById("timeDisplay").innerText = "00:30";
    document.getElementById("progressBar").style.width = "0%";
}
