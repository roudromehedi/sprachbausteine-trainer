// ============================================================
// APP LOGIC
// ============================================================

// Pattern quick-reference data (shown when user clicks pattern name)
const patternInfo = {
    "Pattern 1": "Articles + Case: After mit/bei/zu/von/seit/nach/aus → DATIV. After für/ohne/um/durch/gegen → AKKUSATIV. After in/an/auf → Dativ (where?) or Akk (where to?). 🇧🇩 mit/bei/zu-এর পর Dativ। für/ohne/um-এর পর Akkusativ।",
    "Pattern 2": "Time & Place Prepositions: seit = still ongoing, vor = finished. am + day, im + month, um + time, von...bis, vom...bis zum, ab = from now on. 🇧🇩 seit = এখনো চলছে, vor = শেষ হয়েছে। am + বার, im + মাস, um + সময়।",
    "Pattern 3": "Verb Forms: After modal verb → Infinitiv. Perfekt = haben/sein + Partizip II. Movement verbs use 'sein'. Konjunktiv II: würde/könnte/hätte/wäre for polite requests. 🇧🇩 Modal verb-এর পর Infinitiv। Perfekt = haben/sein + Partizip II। ভদ্র অনুরোধ = würde/könnte।",
    "Pattern 4": "Connectors & Word Order: Verb at END → weil/dass/ob/wenn/als/obwohl/damit/sobald. Verb right after gap → deshalb/trotzdem/außerdem. Verb normal → und/aber/oder/denn. 🇧🇩 Verb শেষে → weil/dass/ob/wenn। Verb gap-এর পরে → deshalb/trotzdem। Verb স্বাভাবিক → und/aber/denn।",
    "Pattern 5": "Pronouns: Dativ verbs (gefallen/helfen/schreiben/geben) → mir/dir. Dativ prepositions (mit/bei/zu) → mir/dir. Otherwise → mich/dich. 🇧🇩 gefallen/helfen/schreiben = Dativ (mir/dir)। mit/bei/zu-এর পর = mir/dir। বাকি = mich/dich।",
    "Pattern 6": "Adjective Endings: After einem/meinem/deinem/seinem → ending is ALWAYS -en. 'mit freundlichen Grüßen', 'im nächsten Jahr'. 🇧🇩 einem/meinem/deinem-এর পর adjective ending সবসময় -en!",
    "Pattern 7": "Negation: kein replaces 'ein' (negates nouns). nicht negates verbs/adjectives/adverbs. 🇧🇩 kein = ein-এর বিপরীত (noun নেগেটিভ করে)। nicht = verb/adjective নেগেটিভ করে।",
    "Pattern 8": "Degree Forms: Comparative (-er) → always ALS. so...wie → always Grundform. am ___sten = Superlative. ___ + genug = always Grundform. 🇧🇩 -er → als। so...wie → মূল রূপ। am...sten = সবচেয়ে। genug-এর আগে মূল রূপ।",
    "Pattern 9": "Konjunktiv II: würde/könnte/hätte/wäre/müsste/dürfte. Used for polite requests in formal emails. 🇧🇩 ভদ্র অনুরোধ = würde/könnte/wäre। Formal email-এ সবসময় এগুলো ব্যবহার হয়।",
    "Pattern 10": "Infinitiv mit zu: After Lust haben/versuchen/anfangen/aufhören/es ist möglich → zu + Infinitiv. Separable verbs: prefix+zu+verb as ONE word (mitzukommen). 🇧🇩 Lust haben/versuchen-এর পর zu + Infinitiv। Trennbare verb: prefix+zu+verb একসাথে (mitzukommen)।",
    "Pattern 11": "Relative Clauses: Find the noun → gender. No subject in clause → Nominativ (der/die/das). Already has subject → Akk (den/die/das) or Dativ (dem/der/dem). 🇧🇩 Noun-এর gender দেখো। clause-এ subject নেই → Nominativ। subject আছে → Akkusativ বা Dativ।",
    "Pattern 12": "Verb + Preposition: Learn as one unit! sprechen über→darüber, freuen auf→darauf, Angst vor→davor, bewerben um, informieren über→darüber. 🇧🇩 Verb+Preposition একসাথে মুখস্থ করো! sprechen über=darüber, Angst vor=davor।",
    "Pattern 13": "Fixed Phrases: 'AUF Ihre Antwort freue ich mich', 'VOM 1. bis zum 14.', 'IM Internet', 'DARÜBER informieren', 'AUßERDEM möchte ich wissen'. 🇧🇩 এই phrase গুলো মুখস্থ করো — প্রতি exam-এ ২-৩টা আসে!",
    "Pattern 14": "Logical Connectors: Result → deshalb/deswegen. Contrast → aber/trotzdem. Addition → außerdem/auch. Alternative → oder. Because (Hauptsatz) → denn. 🇧🇩 ফলাফল → deshalb। বিপরীত → aber/trotzdem। আরো → außerdem/auch। কারণ (Hauptsatz) → denn।",
    "Pattern 15": "Register: Sehr geehrte... → Sie/Ihnen/Ihr (capital!). Liebe/Lieber... → du/dir/dein. Everything must match the greeting! 🇧🇩 Formal (Sehr geehrte) → Sie/Ihnen/Ihr। Informal (Liebe) → du/dir/dein। সবকিছু মিলতে হবে!",
    "Pattern 16": "Adverbs & Particles: da/dort = there, schon = already, gern = gladly, nur = only, auch = also, ganz = really/very. No grammar — just meaning! 🇧🇩 da/dort=সেখানে, schon=ইতিমধ্যে, gern=আনন্দে, nur=শুধু, auch=ও, ganz=একদম। Grammar না — শুধু অর্থ!"
};

function formatExplanation(explanation) {
    // Make the pattern name clickable
    const patternMatch = explanation.match(/📘 (Pattern \d+):?\s*([^—]+)—/);
    if (patternMatch) {
        const patternKey = patternMatch[1];
        const patternName = patternMatch[2].trim();
        const restOfExplanation = explanation.replace(/📘 Pattern \d+:?\s*[^—]+—\s*/, '');
        const info = patternInfo[patternKey] || '';
        return `<span class="pattern-link" onclick="this.nextElementSibling.classList.toggle('show')">📘 ${patternKey}: ${patternName}</span><div class="pattern-popup">${info}</div><span class="explanation-text">${restOfExplanation}</span>`;
    }
    return explanation;
}

let currentExerciseType = null;
let currentExerciseIndex = 0;
let userAnswers = {};
let activeGap = null;
let selectedWordChip = null;
let lastResultsHTML = null; // Cache last results

// Show/hide screens
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
    
    // Show "Back to Results" floating button if results exist and we're not on results screen
    updateResultsButton(screenId);
}

function updateResultsButton(currentScreen) {
    let btn = document.getElementById('back-to-results-btn');
    if (lastResultsHTML && currentScreen !== 'results') {
        if (!btn) {
            btn = document.createElement('button');
            btn.id = 'back-to-results-btn';
            btn.className = 'back-to-results';
            btn.innerHTML = '📊 Results';
            btn.onclick = () => {
                document.getElementById('results-content').innerHTML = lastResultsHTML;
                showScreen('results');
            };
            document.body.appendChild(btn);
        }
        btn.style.display = 'flex';
    } else if (btn) {
        btn.style.display = 'none';
    }
}

// Collapsible cards
function initCollapsible() {
    document.querySelectorAll('.tipp-card h3, .grammar-box h3').forEach(h3 => {
        h3.addEventListener('click', () => {
            h3.parentElement.classList.toggle('collapsed');
        });
    });
}

// Back to top button
function initBackToTop() {
    let btn = document.querySelector('.back-to-top');
    if (!btn) {
        btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.innerHTML = '↑';
        btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.appendChild(btn);
    }
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 300);
    });
}

// Start exercise
function startExercise(type, index) {
    currentExerciseType = type;
    const exercises = type === 'teil1' ? teil1Exercises : teil2Exercises;
    if (index === undefined) {
        showExercisePicker(type);
        return;
    }
    currentExerciseIndex = index;
    userAnswers = {};
    activeGap = null;
    selectedWordChip = null;
    
    if (type === 'teil1') {
        renderTeil1();
    } else {
        renderTeil2();
    }
    showScreen('exercise');
}

function showExercisePicker(type) {
    const exercises = type === 'teil1' ? teil1Exercises : teil2Exercises;
    const container = document.getElementById('exercise-content');
    
    container.innerHTML = `
        <button class="back-btn" onclick="showScreen('menu')">← Zurück</button>
        <h2>${type === 'teil1' ? '✏️ Teil 1' : '📝 Teil 2'} – Choose a Modeltest</h2>
        <p style="color: #aaa; margin-bottom: 20px;">All exercises are from the official Klett Telc B1 book.</p>
        <div class="menu-cards">
            ${exercises.map((ex, i) => `
                <div class="card" onclick="startExercise('${type}', ${i})">
                    <span class="card-icon">📋</span>
                    <h3>${ex.title}</h3>
                </div>
            `).join('')}
        </div>
    `;
    showScreen('exercise');
}

// ============================================================
// TEIL 1 RENDERING
// ============================================================

function renderTeil1() {
    const exercise = teil1Exercises[currentExerciseIndex];
    const container = document.getElementById('exercise-content');
    const totalGaps = exercise.gaps.length;
    const filledCount = Object.keys(userAnswers).length;
    const progressPct = (filledCount / totalGaps) * 100;
    
    let textHtml = exercise.text.replace(/__(\d+)__/g, (match, num) => {
        const answer = userAnswers[num] || '';
        const filledClass = answer ? 'filled' : '';
        const activeClass = activeGap == num ? 'active-gap' : '';
        return `<span class="gap ${filledClass} ${activeClass}" data-gap="${num}" onclick="selectGapTeil1(${num})"><span class="gap-number">${num}</span>${answer || '___'}</span>`;
    });
    
    container.innerHTML = `
        <button class="back-btn" onclick="startExercise('${currentExerciseType}')">← Exercises</button>
        <div class="exercise-header">
            <h2>${exercise.title}</h2>
            <span class="exercise-progress">${filledCount}/${totalGaps}</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
        </div>
        
        <div class="exercise-instruction">👆 Tap a gap in the text → then pick your answer below</div>

        <div class="exercise-text">${textHtml.replace(/\n/g, '<br>')}</div>
        
        <div class="options-container" id="options-panel">
            ${activeGap ? `
                <div class="option-group">
                    <div class="option-group-label">Gap ${activeGap}:</div>
                    ${exercise.gaps.find(g => g.number == activeGap)?.options.map(opt => {
                        const letter = opt.charAt(0);
                        const isSelected = userAnswers[activeGap] === opt.substring(3).trim();
                        return `<button class="option-btn ${isSelected ? 'selected' : ''}" onclick="selectAnswerTeil1(${activeGap}, '${letter}', '${opt.substring(3).trim().replace(/'/g, "\\'")}')">${opt}</button>`;
                    }).join('') || ''}
                </div>
            ` : `<p style="color: #888; text-align: center;">← Tap a numbered gap above to see choices</p>`}
        </div>
        
        ${filledCount >= totalGaps ? `<button class="submit-btn" onclick="checkAnswers()">✓ Check Answers</button>` : 
         filledCount > 0 ? `<button class="submit-btn" style="opacity: 0.7;" onclick="checkAnswers()">✓ Check Answers (${filledCount}/${totalGaps} filled)</button>` : ''}
    `;
}

function selectGapTeil1(num) {
    activeGap = num;
    renderTeil1();
    // Scroll to options panel
    setTimeout(() => {
        const panel = document.getElementById('options-panel');
        if (panel) panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 100);
}

function selectAnswerTeil1(gapNum, letter, text) {
    userAnswers[gapNum] = text;
    
    // Find next empty gap
    const exercise = teil1Exercises[currentExerciseIndex];
    const nextGap = exercise.gaps.find(g => g.number > gapNum && !userAnswers[g.number]);
    activeGap = nextGap ? nextGap.number : null;
    
    renderTeil1();
    
    // Scroll to next gap if exists
    if (nextGap) {
        setTimeout(() => {
            const nextEl = document.querySelector(`[data-gap="${nextGap.number}"]`);
            if (nextEl) nextEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 150);
    }
}

// ============================================================
// TEIL 2 RENDERING
// ============================================================

function renderTeil2() {
    const exercise = teil2Exercises[currentExerciseIndex];
    const container = document.getElementById('exercise-content');
    const totalGaps = Object.keys(exercise.correct).length;
    const filledCount = Object.keys(userAnswers).length;
    const progressPct = (filledCount / totalGaps) * 100;
    
    let textHtml = exercise.text.replace(/__(\d+)__/g, (match, num) => {
        const answer = userAnswers[num] || '';
        const filledClass = answer ? 'filled' : '';
        const activeClass = activeGap == num ? 'active-gap' : '';
        return `<span class="gap ${filledClass} ${activeClass}" data-gap="${num}" onclick="selectGapTeil2(${num})"><span class="gap-number">${num}</span>${answer || '___'}</span>`;
    });
    
    const usedWords = Object.values(userAnswers);
    
    container.innerHTML = `
        <button class="back-btn" onclick="startExercise('${currentExerciseType}')">← Exercises</button>
        <div class="exercise-header">
            <h2>${exercise.title}</h2>
            <span class="exercise-progress">${filledCount}/${totalGaps}</span>
        </div>
        <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${progressPct}%"></div>
        </div>

        <div class="exercise-instruction">① Tap a word below → ② Tap a gap in the text (5 words are distractors!)</div>

        <div class="word-bank">
            <div class="word-bank-items">
                ${exercise.words.map(word => {
                    const isUsed = usedWords.includes(word);
                    const isSelected = selectedWordChip === word;
                    return `<span class="word-chip ${isUsed ? 'used' : ''} ${isSelected ? 'selected-chip' : ''}" 
                        onclick="selectWordChip('${word.replace(/'/g, "\\'")}')">${word}</span>`;
                }).join('')}
            </div>
        </div>

        <div class="exercise-text">${textHtml.replace(/\n/g, '<br>')}</div>
        
        ${filledCount >= totalGaps ? `<button class="submit-btn" onclick="checkAnswers()">✓ Check Answers</button>` : 
         filledCount > 0 ? `<button class="submit-btn" style="opacity: 0.7;" onclick="checkAnswers()">✓ Check Answers (${filledCount}/${totalGaps} filled)</button>` : ''}
    `;
}

function selectGapTeil2(num) {
    if (selectedWordChip) {
        for (let key in userAnswers) {
            if (userAnswers[key] === selectedWordChip) {
                delete userAnswers[key];
            }
        }
        userAnswers[num] = selectedWordChip;
        selectedWordChip = null;
        activeGap = null;
    } else {
        if (userAnswers[num]) {
            delete userAnswers[num];
        }
        activeGap = num;
    }
    renderTeil2();
}

function selectWordChip(word) {
    const usedWords = Object.values(userAnswers);
    if (usedWords.includes(word)) {
        for (let key in userAnswers) {
            if (userAnswers[key] === word) {
                delete userAnswers[key];
                break;
            }
        }
        selectedWordChip = null;
        renderTeil2();
        return;
    }
    
    if (selectedWordChip === word) {
        selectedWordChip = null;
    } else {
        selectedWordChip = word;
        if (activeGap) {
            userAnswers[activeGap] = word;
            selectedWordChip = null;
            activeGap = null;
        }
    }
    renderTeil2();
}

// ============================================================
// CHECK ANSWERS
// ============================================================

function checkAnswers() {
    const exercise = currentExerciseType === 'teil1' 
        ? teil1Exercises[currentExerciseIndex] 
        : teil2Exercises[currentExerciseIndex];
    
    let correct = 0;
    let results = [];
    
    if (currentExerciseType === 'teil1') {
        exercise.gaps.forEach(gap => {
            const userAnswer = userAnswers[gap.number] || '(empty)';
            const correctOption = gap.options.find(o => o.startsWith(gap.correct + ')'));
            const correctAnswer = correctOption ? correctOption.substring(3).trim() : '';
            const isCorrect = userAnswer.trim() === correctAnswer;
            if (isCorrect) correct++;
            results.push({ number: gap.number, isCorrect, userAnswer, correctAnswer, explanation: gap.explanation });
        });
    } else {
        const gapNumbers = Object.keys(exercise.correct).map(Number).sort((a, b) => a - b);
        gapNumbers.forEach(i => {
            const userAnswer = userAnswers[i] || '(empty)';
            const correctAnswer = exercise.correct[i];
            const isCorrect = userAnswer.toLowerCase() === correctAnswer.toLowerCase();
            if (isCorrect) correct++;
            results.push({ number: i, isCorrect, userAnswer, correctAnswer, explanation: exercise.explanations[i] });
        });
    }
    
    showResults(correct, results.length, results);
}

function showResults(correct, total, results) {
    const percentage = (correct / total) * 100;
    let scoreClass, message;
    
    if (percentage >= 80) {
        scoreClass = 'good';
        message = '🎉 Excellent! You\'re well prepared!';
    } else if (percentage >= 60) {
        scoreClass = 'medium';
        message = '👍 Good! Keep practicing — you\'re close to passing!';
    } else {
        scoreClass = 'bad';
        message = '💪 Don\'t give up! Read the explanations below and try again.';
    }
    
    const container = document.getElementById('results-content');
    
    // Extract the sentence for each gap from the exercise text
    const exercise = currentExerciseType === 'teil1' 
        ? teil1Exercises[currentExerciseIndex] 
        : teil2Exercises[currentExerciseIndex];
    
    function getSentenceForGap(text, gapNum) {
        // Split text into sentences (by . ! ? or newlines)
        const sentences = text.split(/(?<=[.!?])\s+|\n+/).filter(s => s.trim());
        for (let s of sentences) {
            if (s.includes(`__${gapNum}__`)) {
                // Highlight the gap with the correct answer
                let correctAnswer;
                if (currentExerciseType === 'teil1') {
                    const gap = exercise.gaps.find(g => g.number == gapNum);
                    const opt = gap.options.find(o => o.startsWith(gap.correct + ')'));
                    correctAnswer = opt ? opt.substring(3).trim() : '';
                } else {
                    correctAnswer = exercise.correct[gapNum];
                }
                return s.replace(`__${gapNum}__`, `<strong style="color:#4ecdc4; border-bottom: 2px solid #4ecdc4;">${correctAnswer}</strong>`).trim();
            }
        }
        return '';
    }

    container.innerHTML = `
        <div class="results-header">
            <h2>Results</h2>
            <div class="score-circle ${scoreClass}">
                ${correct}/${total}
                <small>${Math.round(percentage)}%</small>
            </div>
            <p class="score-message">${message}</p>
            <p style="color: #888; font-size: 0.85rem; margin-top: 8px;">You need 60% (6/10) to pass this section</p>
        </div>

        <h3 style="margin-bottom: 12px; color: #fff;">Detailed Review:</h3>
        
        ${results.map(r => `
            <div class="result-item ${r.isCorrect ? 'correct' : 'wrong'}">
                <span class="result-icon">${r.isCorrect ? '✅' : '❌'}</span>
                <div class="result-details">
                    <span class="question-num">Gap ${r.number}</span><br>
                    ${!r.isCorrect ? `<span class="your-answer">${r.userAnswer}</span>` : ''}
                    <span class="correct-answer">${r.correctAnswer}</span>
                    <div class="result-sentence">${getSentenceForGap(exercise.text, r.number)}</div>
                    <div class="result-explanation">${formatExplanation(r.explanation)}</div>
                </div>
            </div>
        `).join('')}
        
        <button class="try-again-btn" onclick="clearResultsAndRetry()">🔄 Try Another</button>
        <button class="try-again-btn" onclick="showScreen('menu')" style="margin-top: 10px;">← Back to Menu</button>
    `;
    
    showScreen('results');
    // Cache results so user can come back
    lastResultsHTML = container.innerHTML;
}

function clearResultsAndRetry() {
    lastResultsHTML = null;
    updateResultsButton('exercise');
    startExercise(currentExerciseType);
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showScreen('menu');
    initBackToTop();
    // Init collapsible after a brief delay to ensure DOM is ready
    setTimeout(initCollapsible, 100);
});

// Re-init collapsible when showing grammar/tips screens
const origShowScreen = showScreen;
showScreen = function(id) {
    origShowScreen(id);
    if (id === 'grammatik' || id === 'tipps') {
        setTimeout(initCollapsible, 50);
    }
};
