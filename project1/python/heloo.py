from translate import Translator

def language_converter(text, lang):
    translator = Translator(to_lang=lang)
    translation = translator.translate(text)
    return translation

def main():
    print("Language Converter")
    print("1. English to Hindi")
    print("2. English to French")
    print("3. Hindi to English")
    print("4. French to English")

    choice = input("Enter your choice (1/2/3/4): ")

    if choice == "1":
        text = input("Enter text in English: ")
        print(language_converter(text, "hi"))
    elif choice == "2":
        text = input("Enter text in English: ")
        print(language_converter(text, "fr"))
    elif choice == "3":
        text = input("Enter text in Hindi: ")
        translator = Translator(from_lang="hi", to_lang="en")
        print(translator.translate(text))
    elif choice == "4":
        text = input("Enter text in French: ")
        translator = Translator(from_lang="fr", to_lang="en")
        print(translator.translate(text))
    else:
        print("Invalid choice")

if __name__ == "__main__":
    main()