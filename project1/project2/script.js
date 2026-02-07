function translateText() {
    const text = document.getElementById("inputText").value;
    const from = document.getElementById("fromLang").value;
    const to = document.getElementById("toLang").value;

    if (!text) {
        alert("Enter some text");
        return;
    }

    // URL encode text
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${from}|${to}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data); // check response
            // Safe access
            const translated = data.responseData?.translatedText || "Translation failed";
            document.getElementById("outputText").value = translated;
        })
        .catch(err => {
            alert("Translation failed");
            console.error(err);
        });
}
