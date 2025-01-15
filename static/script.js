// Language list
const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    { code: 'de', name: 'German' },
    { code: 'it', name: 'Italian' },
    { code: 'pt', name: 'Portuguese' },
    { code: 'ru', name: 'Russian' },
    { code: 'zh', name: 'Chinese' },
    { code: 'ja', name: 'Japanese' },
    { code: 'ko', name: 'Korean' },
    { code: 'ar', name: 'Arabic' },
    { code: 'hi', name: 'Hindi' },
    { code: 'te', name: 'Telugu' },
    { code: 'ta', name: 'Tamil' },
    { code: 'ml', name: 'Malayalam' },
    { code: 'kn', name: 'Kannada' }
];

// DOM Elements
const sourceLanguageSelect = document.getElementById('sourceLanguage');
const targetLanguageSelect = document.getElementById('targetLanguage');
const sourceText = document.getElementById('sourceText');
const targetText = document.getElementById('targetText');
const swapBtn = document.getElementById('swapBtn');
const translateBtn = document.getElementById('translateBtn');
const sourceVoiceInput = document.getElementById('sourceVoiceInput');
const targetCopy = document.getElementById('targetCopy');
const targetSpeak = document.getElementById('targetSpeak');

// Initialize speech recognition and synthesis
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
const synthesis = window.speechSynthesis;

// Translator state
let currentSourceLang = 'en';
let currentTargetLang = 'es';

// Populate language dropdowns
function populateLanguageDropdowns() {
    languages.forEach(lang => {
        const sourceOption = document.createElement('option');
        const targetOption = document.createElement('option');
        
        sourceOption.value = targetOption.value = lang.code;
        sourceOption.textContent = targetOption.textContent = lang.name;
        
        if (lang.code === currentSourceLang) sourceOption.selected = true;
        if (lang.code === currentTargetLang) targetOption.selected = true;
        
        sourceLanguageSelect.appendChild(sourceOption);
        targetLanguageSelect.appendChild(targetOption.cloneNode(true));
    });
}

// Event Handlers
sourceLanguageSelect.addEventListener('change', (e) => {
    currentSourceLang = e.target.value;
});

targetLanguageSelect.addEventListener('change', (e) => {
    currentTargetLang = e.target.value;
});

swapBtn.addEventListener('click', () => {
    [currentSourceLang, currentTargetLang] = [currentTargetLang, currentSourceLang];
    sourceLanguageSelect.value = currentSourceLang;
    targetLanguageSelect.value = currentTargetLang;
    [sourceText.value, targetText.value] = [targetText.value, sourceText.value];
});

translateBtn.addEventListener('click', async () => {
    if (!sourceText.value.trim()) return;
    translateBtn.disabled = true;
    try {
        const response = await fetch('http://127.0.0.1:5000/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                sourceText: sourceText.value,
                sourceLang: currentSourceLang,
                targetLang: currentTargetLang
            })
        });
        const data = await response.json();
        targetText.value = data.translatedText;
    } catch (error) {
        console.error('Translation failed:', error);
        targetText.value = 'Translation failed. Please try again.';
    } finally {
        translateBtn.disabled = false;
    }
});

sourceVoiceInput.addEventListener('click', () => {
    recognition.lang = currentSourceLang;
    recognition.start();
});

recognition.onresult = (event) => {
    sourceText.value = event.results[0][0].transcript;
};

targetCopy.addEventListener('click', async () => {
    if (!targetText.value.trim()) return;
    try {
        await navigator.clipboard.writeText(targetText.value);
        const originalIcon = targetCopy.innerHTML;
        targetCopy.innerHTML = '<i class="fas fa-check"></i>';
        setTimeout(() => targetCopy.innerHTML = originalIcon, 2000);
    } catch (err) {
        console.error('Failed to copy:', err);
    }
});

targetSpeak.addEventListener('click', () => {
    if (!targetText.value.trim()) return;
    const utterance = new SpeechSynthesisUtterance(targetText.value);
    utterance.lang = currentTargetLang;
    synthesis.speak(utterance);
});

populateLanguageDropdowns();
