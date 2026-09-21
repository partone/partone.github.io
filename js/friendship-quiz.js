(function () {
    const LOADING_DURATION_MS = 1600;
    const KOREAN_SWITCH_MS = 2800;
    const KOREAN_OPTION = "Korean";

    const QUESTIONS = [
        {
            id: "age",
            type: "number",
            min: 0,
            max: 120,
            default: 25,
        },
        {
            id: "height",
            type: "number",
            min: 50,
            max: 250,
            default: 170,
            unit: "cm",
        },
        {
            id: "languages",
            type: "multi",
            options: [
                "Polish",
                "English",
                "Spanish",
                KOREAN_OPTION,
                "Irrelevant/Other",
            ],
        },
        {
            id: "music",
            type: "yesno",
        },
        {
            id: "money",
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

    const COPY = {
        en: {
            ui: {
                next: "Next",
                submit: "Submit application",
                exit: "Exit",
                changingToKorean: "Switching to Korean…",
                changingToKoreanNative: "한국어로 전환 중…",
                loading: "Loading",
            },
            yes: "Yes",
            no: "No",
            questions: {
                age: { text: "How old are you?" },
                height: { text: "How tall are you?" },
                languages: {
                    text: "Which languages do you speak?",
                    options: {
                        Polish: "Polish",
                        English: "English",
                        Spanish: "Spanish",
                        Korean: "Korean",
                        "Irrelevant/Other": "Irrelevant/Other",
                    },
                },
                music: { text: "Do you like music?" },
                money: {
                    text: "If you won 10 million złoty today, how would you spend it?",
                    options: {
                        Travel: "Travel",
                        "Luxury items": "Luxury items",
                        Investment: "Investment",
                        House: "House",
                        Knowledge: "Knowledge",
                        Other: "Other",
                    },
                },
                loveLanguage: {
                    text: "What is your love language?",
                    options: {
                        "Words of affirmation": "Words of affirmation",
                        "Quality time": "Quality time",
                        "Receiving gifts": "Receiving gifts",
                        "Acts of service": "Acts of service",
                        "Physical touch": "Physical touch",
                    },
                },
                internet: {
                    text: "What do you use the internet for?",
                    options: {
                        "Sports scores": "Sports scores",
                        "Chatting with women": "Chatting with women",
                        Taxes: "Taxes",
                        "Chatting with men about football":
                            "Chatting with men about football",
                        "Egyptian literature": "Egyptian literature",
                        "Sending electronic mail": "Sending electronic mail",
                    },
                },
                supernatural: {
                    text: "Which supernatural ability would you want?",
                    options: {
                        "Shapeshifting into something cool":
                            "Shapeshifting into something cool",
                        "Seeing the future": "Seeing the future",
                        "Reading minds": "Reading minds",
                        "Being completely indestructible":
                            "Being completely indestructible",
                        "Being immune to other people's powers":
                            "Being immune to other people's powers",
                        "None - I just want a quiet, vampire-free life":
                            "None - I just want a quiet, vampire-free life",
                    },
                },
            },
            result: {
                body:
                    "Hi!<br><br>" +
                    "Thank you for your interest in becoming <em>our friend</em>, and for taking the time to submit your application.<br><br>" +
                    "After careful consideration, we’re sorry to let you know that <span class=\"result-rejection\">we will not be progressing your application on this occasion.</span><br><br>" +
                    "We received a strong number of applications and have decided to move forward with candidates whose experience more closely matches the current requirements of the role.<br><br>" +
                    "Thank you again for your time and interest, and we wish you all the best in your job search.",
                signoff: "Warm regards,<br>Kasia and Eric",
            },
        },
        ko: {
            ui: {
                next: "다음",
                submit: "지원서 제출",
                exit: "나가기",
                changingToKorean: "Switching to Korean…",
                changingToKoreanNative: "한국어로 전환 중…",
                loading: "로딩 중",
            },
            yes: "예",
            no: "아니요",
            questions: {
                age: { text: "몇 살이에요?" },
                height: { text: "키가 어떻게 되세요?" },
                languages: {
                    text: "어떤 언어를 할 수 있나요?",
                    options: {
                        Polish: "폴란드어",
                        English: "영어",
                        Spanish: "스페인어",
                        Korean: "한국어",
                        "Irrelevant/Other": "해당 없음/기타",
                    },
                },
                music: { text: "음악 좋아해요?" },
                money: {
                    text: "오늘 1000만 złoty를 따면 어떻게 쓸 거예요?",
                    options: {
                        Travel: "여행",
                        "Luxury items": "명품",
                        Investment: "투자",
                        House: "집",
                        Knowledge: "지식",
                        Other: "기타",
                    },
                },
                loveLanguage: {
                    text: "당신의 사랑의 언어는 무엇인가요?",
                    options: {
                        "Words of affirmation": "인정의 말",
                        "Quality time": "함께하는 시간",
                        "Receiving gifts": "선물",
                        "Acts of service": "봉사",
                        "Physical touch": "스킨십",
                    },
                },
                internet: {
                    text: "인터넷을 주로 무엇에 쓰나요?",
                    options: {
                        "Sports scores": "스포츠 점수",
                        "Chatting with women": "여성과 채팅",
                        Taxes: "세금",
                        "Chatting with men about football":
                            "남성과 축구 이야기",
                        "Egyptian literature": "이집트 문학",
                        "Sending electronic mail": "전자 우편 보내기",
                    },
                },
                supernatural: {
                    text: "어떤 초자연적 능력을 갖고 싶나요?",
                    options: {
                        "Shapeshifting into something cool":
                            "멋진 것으로 변신하기",
                        "Seeing the future": "미래 보기",
                        "Reading minds": "마음 읽기",
                        "Being completely indestructible": "완전한 불멸",
                        "Being immune to other people's powers":
                            "다른 사람의 능력에 면역",
                        "None - I just want a quiet, vampire-free life":
                            "없음 - 조용하고 뱀파이어 없는 삶이면 충분해요",
                    },
                },
            },
            result: {
                body:
                    "안녕하세요!<br><br>" +
                    "<em>우리의 친구</em>가 되고 싶다는 관심과 지원서를 작성해 주셔서 감사합니다.<br><br>" +
                    "신중히 검토한 결과, 이번에는 <span class=\"result-rejection\">귀하의 지원을 진행하지 않게 되었음</span>을 알려 드립니다.<br><br>" +
                    "많은 지원을 받았으며, 현재 역할 요건에 더 잘 맞는 후보와 함께 진행하기로 결정했습니다.<br><br>" +
                    "시간을 내어 지원해 주셔서 다시 한번 감사드리며, 앞으로 좋은 일만 가득하시길 바랍니다.",
                signoff: "진심을 담아,<br>카시아와 에릭",
            },
        },
    };

    const introScreen = document.getElementById("intro-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const loadingScreen = document.getElementById("loading-screen");
    const resultScreen = document.getElementById("result-screen");
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const exitBtn = document.getElementById("exit-btn");
    const liarBtnQuiz = document.getElementById("liar-btn-quiz");
    const liarBtnResult = document.getElementById("liar-btn-result");
    const progressFillEl = document.getElementById("progress-fill");
    const questionTextEl = document.getElementById("question-text");
    const answerAreaEl = document.getElementById("answer-area");
    const loadingMessagePrimaryEl = document.getElementById(
        "loading-message-primary"
    );
    const loadingMessageSecondaryEl = document.getElementById(
        "loading-message-secondary"
    );
    const resultContentEl = document.getElementById("result-content");

    let currentIndex = 0;
    let locale = "en";
    const answers = {};

    function t(path) {
        const parts = path.split(".");
        let node = COPY[locale];
        for (let i = 0; i < parts.length; i += 1) {
            node = node[parts[i]];
        }
        return node;
    }

    function questionText(question) {
        return COPY[locale].questions[question.id].text;
    }

    function optionLabel(question, optionKey) {
        const q = COPY[locale].questions[question.id];
        if (q.options && q.options[optionKey]) {
            return q.options[optionKey];
        }
        return optionKey;
    }

    function speaksKoreanSelected() {
        const langs = answers.languages;
        return Array.isArray(langs) && langs.includes(KOREAN_OPTION);
    }

    function languagesQuestionIndex() {
        return QUESTIONS.findIndex(function (q) {
            return q.id === "languages";
        });
    }

    function updateLiarButton() {
        const onQuiz = !quizScreen.classList.contains("is-hidden");
        const onResult = !resultScreen.classList.contains("is-hidden");
        const pastLanguages = currentIndex > languagesQuestionIndex();
        const showQuiz = locale === "ko" && onQuiz && pastLanguages;
        const showResult = locale === "ko" && onResult;
        liarBtnQuiz.classList.toggle("is-hidden", !showQuiz);
        liarBtnResult.classList.toggle("is-hidden", !showResult);
    }

    function renderResult() {
        resultContentEl.innerHTML =
            "<p>" +
            COPY[locale].result.body +
            "</p><p class=\"result-signoff\">" +
            COPY[locale].result.signoff +
            "</p>";
        exitBtn.textContent = t("ui.exit");
        document.documentElement.lang = locale === "ko" ? "ko" : "en";
        updateLiarButton();
    }

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

    function clearLoadingMessages() {
        loadingMessagePrimaryEl.textContent = "";
        loadingMessageSecondaryEl.textContent = "";
    }

    function showLoading(primary, durationMs, onDone, secondary) {
        loadingMessagePrimaryEl.textContent = primary || "";
        loadingMessageSecondaryEl.textContent = secondary || "";
        loadingScreen.setAttribute(
            "aria-label",
            primary || t("ui.loading")
        );
        fadeOut(quizScreen, function () {
            showScreen(loadingScreen);
            setTimeout(function () {
                clearLoadingMessages();
                fadeOut(loadingScreen, function () {
                    onDone();
                });
            }, durationMs);
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
        const pct = ((currentIndex + 1) / QUESTIONS.length) * 100;
        progressFillEl.style.width = pct + "%";
    }

    function updateNextButton() {
        const question = QUESTIONS[currentIndex];
        const complete = isQuestionComplete(question);
        nextBtn.disabled = !complete;
        nextBtn.textContent =
            question.submitLabel && currentIndex === QUESTIONS.length - 1
                ? t("ui.submit")
                : t("ui.next");
    }

    function createOptionButton(question, optionKey, mode) {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className =
            "option-btn option-btn--" + (mode === "multi" ? "multi" : "single");

        const indicator = document.createElement("span");
        indicator.className = "option-indicator";
        indicator.setAttribute("aria-hidden", "true");

        const label = document.createElement("span");
        label.className = "option-label";
        label.textContent = optionLabel(question, optionKey);

        btn.appendChild(indicator);
        btn.appendChild(label);
        btn.dataset.value = optionKey;
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
            [
                { key: "Yes", label: COPY[locale].yes },
                { key: "No", label: COPY[locale].no },
            ].forEach(function (opt) {
                const btn = createOptionButton(question, opt.key, "single");
                btn.querySelector(".option-label").textContent = opt.label;
                if (answers[question.id] === opt.key) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    answers[question.id] = opt.key;
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

        question.options.forEach(function (optKey) {
            const btn = createOptionButton(
                question,
                optKey,
                multi ? "multi" : "single"
            );

            if (multi) {
                if (answers[question.id].includes(optKey)) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    const arr = answers[question.id];
                    const idx = arr.indexOf(optKey);
                    if (idx === -1) {
                        arr.push(optKey);
                        btn.classList.add("selected");
                    } else {
                        arr.splice(idx, 1);
                        btn.classList.remove("selected");
                    }
                    updateNextButton();
                });
            } else {
                if (answers[question.id] === optKey) {
                    btn.classList.add("selected");
                }
                btn.addEventListener("click", function () {
                    answers[question.id] = optKey;
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
        questionTextEl.textContent = questionText(question);
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
        updateLiarButton();
    }

    function advanceQuestion() {
        if (currentIndex >= QUESTIONS.length - 1) {
            fadeOut(quizScreen, function () {
                clearLoadingMessages();
                loadingScreen.setAttribute("aria-label", t("ui.loading"));
                showScreen(loadingScreen);
                setTimeout(function () {
                    renderResult();
                    fadeOut(loadingScreen, function () {
                        showScreen(resultScreen);
                        updateLiarButton();
                    });
                }, LOADING_DURATION_MS);
            });
            return;
        }

        const leavingLanguages =
            QUESTIONS[currentIndex].id === "languages" &&
            speaksKoreanSelected() &&
            locale === "en";

        if (leavingLanguages) {
            showLoading(
                t("ui.changingToKorean"),
                KOREAN_SWITCH_MS,
                function () {
                locale = "ko";
                document.documentElement.lang = "ko";
                currentIndex += 1;
                showScreen(quizScreen);
                renderQuestion();
                },
                t("ui.changingToKoreanNative")
            );
            return;
        }

        quizScreen.style.opacity = "0";
        setTimeout(function () {
            currentIndex += 1;
            renderQuestion();
            quizScreen.style.opacity = "1";
        }, 300);
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
        advanceQuestion();
    });

    function onLiarClick() {
        locale = "en";
        document.documentElement.lang = "en";
        if (!resultScreen.classList.contains("is-hidden")) {
            renderResult();
        } else {
            renderQuestion();
        }
        updateLiarButton();
    }

    liarBtnQuiz.addEventListener("click", onLiarClick);
    liarBtnResult.addEventListener("click", onLiarClick);

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
