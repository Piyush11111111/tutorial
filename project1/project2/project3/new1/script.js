const translations = {
    en: {
        "title": "Simple Translator",
        "select_label": "Select Language:",
        "placeholder": "Enter text to translate...",
        "output_placeholder": "Translation will appear here."
    },
    fr: {
        "title": "Traducteur Simple",
        "select_label": "Choisir la langue:",
        "placeholder": "Entrez du texte à traduire...",
        "output_placeholder": "La traduction apparaîtra ici."
    },
    es: {
        "title": "Traductor Simple",
        "select_label": "Seleccione el idioma:",
        "placeholder": "Ingrese texto para traducir...",
        "output_placeholder": "La traducción aparecerá aquí."
    }
};

function applyTranslations(languageCode) {
    document.querySelector('h1').innerText = translations[languageCode]["title"];
    document.querySelector('label[for="language-select"]').innerText = translations[languageCode]["select_label"];
    document.getElementById('input-text').placeholder = translations[languageCode]["placeholder"];
    document.getElementById('output-text').innerText = translations[languageCode]["output_placeholder"];
}

// Event listener for the language selection change
document.getElementById('language-select').addEventListener('change', function() {
    const selectedLanguage = this.value;
    applyTranslations(selectedLanguage);
});

// Initial load (default to English)
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations('en');
});
