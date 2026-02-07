async function translateText() {
    const text = document.getElementById("inputText").value;
    const from = document.getElementById("fromLang").value;
    const to = document.getElementById("toLang").value;

    if (!text) {
        alert("Enter some text");
        return;
    }

    fetch("https://translate.argosopentech.com/translate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ q: text, source: from, target: to })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data); // Always check console
        // Safe translation
        const translated = data.translatedText || data[0]?.translatedText || "Translation failed";
        document.getElementById("outputText").value = translated;
    })
    .catch(err => {
        alert("Translation failed");
        console.log(err);
    });
}
