(function () {
    const LOADING_DURATION_MS = 3200;

    const QUESTIONS = [
        {
            id: "age",
            text: "How old are you?",
            type: "number",
            min: 0,
            max: 120,
            default: 25,
        },
        {
            id: "height",
            text: "How tall are you?",
            type: "number",
            min: 50,
            max: 250,
            default: 170,
            unit: "cm",
        },
        {
            id: "languages",
            text: "Which languages do you speak?",
            type: "multi",
            options: ["Polish", "English", "Spanish", "Irrelevant/Other"],
        },
        {
            id: "music",
            text: "Do you like music?",
            type: "yesno",
        },
        {
            id: "money",
            text: "If you won 10 million złoty today, how would you spend it?",
            type: "single",
            options: [
                "Travel",
                "Luxury items",
                "Investment",
                "House",
                "Knowledge",
                "Other",
            ],
        },
        {
            id: "loveLanguage",
            text: "What is your love language?",
            type: "single",
            options: [
                "Words of affirmation",
                "Quality time",
                "Receiving gifts",
                "Acts of service",
                "Physical touch",
            ],
        },
        {
            id: "internet",
            text: "What do you use the internet for?",
            type: "multi",
            options: [
                "Sports scores",
                "Chatting with women",
                "Taxes",
                "Chatting with men about football",
                "Egyptian literature",
                "Sending electronic mail",
            ],
        },
        {
            id: "supernatural",
            text: "Which supernatural ability would you want?",
            type: "single",
            options: [
                "Shapeshifting into something cool",
                "Seeing the future",
                "Reading minds",
                "Being completely indestructible",
                "Being immune to other people's powers",
                "None - I just want a quiet, vampire-free life",
            ],
            submitLabel: true,
        },
    ];

    const introScreen = document.getElementById("intro-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const loadingScreen = document.getElementById("loading-screen");
    const resultScreen = document.getElementById("result-screen");
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const exitBtn = document.getElementById("exit-btn");
    const progressFillEl = document.getElementById("progress-fill");
    const questionTextEl = document.getElementById("question-text");
    const answerAreaEl = document.getElementById("answer-area");
    let currentIndex = 0;
    const answers = {};

    function fadeOut(el, onDone) {
        el.classList.add("is-fading-out");
        setTimeout(function () {
            el.classList.add("is-hidden");
            el.classList.remove("is-fading-out");
            onDone();
        }, 500);
    }

    function showScreen(el) {
        el.classList.remove("is-hidden");
        el.style.opacity = "0";
        requestAnimationFrame(function () {
            el.style.opacity = "1";
        });
    }

    function isQuestionComplete(question) {
        const value = answers[question.id];
        switch (question.type) {
            case "number":
                return (
                    value !== undefined &&
                    value >= question.min &&
                    value <= question.max
                );
            case "multi":
                return Array.isArray(value) && value.length > 0;
            case "yesno":
            case "single":
                return value !== undefined && value !== "";
            default:
                return false;
        }
    }

    function updateProgressBar() {
        const pct =
            ((currentIndex + 1) / QUESTIONS.length) * 100;
        progressFillEl.style.width = pct + "%";
    }

    function updateNextButton() {
        const question = QUESTIONS[currentIndex];
        const complete = isQuestionComplete(question);
        nextBtn.disabled = !complete;
        nextBtn.textContent =
            question.submitLabel && currentIndex === QUESTIONS.length - 1
                ? "Submit application"
                : "Next";
    }

    function createOptionButton(opt, mode) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
            "option-btn option-btn--" + (mode === "multi" ? "multi" : "single");

        const indicator = document.createElement("span");
        indicator.className = "option-indicator";
        indicator.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.className = "option-label";
        label.textContent = opt;

        btn.appendChild(indicator);
        btn.appendChild(label);
        return btn;
    }

    function renderNumber(question) {
        const wrap = document.createElement("div");
        wrap.className = "number-field";

        const input = document.createElement("input");
        input.type = "number";
        input.min = String(question.min);
        input.max = String(question.max);
        input.step = "1";
        input.inputMode = "numeric";
        input.value = String(answers[question.id] ?? question.default);
        answers[question.id] = Number(input.value);

        input.addEventListener("input", function () {
            let n = parseInt(input.value, 10);
            if (Number.isNaN(n)) {
                delete answers[question.id];
            } else {
                n = Math.min(question.max, Math.max(question.min, n));
                answers[question.id] = n;
            }
            updateNextButton();
        });

        wrap.appendChild(input);
        if (question.unit) {
            const label = document.createElement("label");
            label.textContent = question.unit;
            wrap.appendChild(label);
        }
        answerAreaEl.appendChild(wrap);
    }

    function renderOptions(question, multi) {
        const list = document.createElement("div");
        list.className = "option-list";

        if (question.type === "yesno") {
            const row = document.createElement("div");
            row.className = "yes-no-row";
            ["Yes", "No"].forEach(function (opt) {
                const btn = createOptionButton(opt, "single");
                if (answers[question.id] === opt) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    answers[question.id] = opt;
                    row.querySelectorAll(".option-btn").forEach(function (b) {
                        b.classList.remove("selected");
                    });
                    btn.classList.add("selected");
                    updateNextButton();
                });
                row.appendChild(btn);
            });
            answerAreaEl.appendChild(row);
            return;
        }

        if (multi && !Array.isArray(answers[question.id])) {
            answers[question.id] = [];
        }

        question.options.forEach(function (opt) {
            const btn = createOptionButton(opt, multi ? "multi" : "single");

            if (multi) {
                if (answers[question.id].includes(opt)) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    const arr = answers[question.id];
                    const idx = arr.indexOf(opt);
                    if (idx === -1) {
                        arr.push(opt);
                        btn.classList.add("selected");
                    } else {
                        arr.splice(idx, 1);
                        btn.classList.remove("selected");
                    }
                    updateNextButton();
                });
            } else {
                if (answers[question.id] === opt) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    answers[question.id] = opt;
                    list.querySelectorAll(".option-btn").forEach(function (b) {
                        b.classList.remove("selected");
                    });
                    btn.classList.add("selected");
                    updateNextButton();
                });
            }

            list.appendChild(btn);
        });

        answerAreaEl.appendChild(list);
    }

    function renderQuestion() {
        const question = QUESTIONS[currentIndex];
        updateProgressBar();

        questionTextEl.textContent = question.text;
        answerAreaEl.innerHTML = "";

        switch (question.type) {
            case "number":
                renderNumber(question);
                break;
            case "multi":
                renderOptions(question, true);
                break;
            case "yesno":
            case "single":
                renderOptions(question, false);
                break;
        }

        updateNextButton();
    }

    function runLoadingSequence(onDone) {
        setTimeout(onDone, LOADING_DURATION_MS);
    }

    startBtn.addEventListener("click", function () {
        fadeOut(introScreen, function () {
            showScreen(quizScreen);
            renderQuestion();
        });
    });

    nextBtn.addEventListener("click", function () {
        if (!isQuestionComplete(QUESTIONS[currentIndex])) {
            return;
        }

        if (currentIndex >= QUESTIONS.length - 1) {
            fadeOut(quizScreen, function () {
                showScreen(loadingScreen);
                runLoadingSequence(function () {
                    fadeOut(loadingScreen, function () {
                        showScreen(resultScreen);
                    });
                });
            });
            return;
        }

        quizScreen.style.opacity = "0";
        setTimeout(function () {
            currentIndex += 1;
            renderQuestion();
            quizScreen.style.opacity = "1";
        }, 300);
    });

    exitBtn.addEventListener("click", function () {
        window.close();
        setTimeout(function () {
            if (typeof history.length === "number" && history.length > 1) {
                history.back();
            } else {
                window.location.href = "bathroom.html";
            }
        }, 150);
    });
})();
