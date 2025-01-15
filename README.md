# Language Translator

Welcome to the **Language Translator** repository! This project is a web-based application that allows users to translate text between multiple languages using the power of Google's Translation API. Built with Python, HTML, CSS, and JavaScript, this translator is designed to be simple, efficient, and visually appealing.

---

## Features

- **Multi-Language Support**: Translate text between a wide range of languages.
- **User-Friendly Interface**: Clean and responsive design.
- **Fast and Accurate Translations**: Powered by Google's Translation API.
- **Audio Input and Output**: Use a microphone to input text and listen to the translations via a speaker.
- **Copy to Clipboard**: Easily copy translated text with a single click.
- **Customizable**: Easy to modify and extend for specific use cases.

---

## Technologies Used

- **Backend**: Python (Flask)
- **Frontend**: HTML, CSS, JavaScript
- **API**: Google Cloud Translation API

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Karthik-1655/Language-Translator.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Language-Translator
   ```

3. Set up a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate # For Windows: venv\Scripts\activate
   ```

4. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

5. Add your Google Translation API key:
   - Create a `.env` file in the root directory.
   - Add the following line to the file:
     ```env
     GOOGLE_API_KEY=your_api_key_here
     ```

6. Run the application:
   ```bash
   python app.py
   ```

7. Open your browser and visit `http://127.0.0.1:5000`.

---

## Usage

1. Enter the text you want to translate in the input box or use the microphone to input text.
2. Select the source and target languages from the dropdown menus.
3. Click the "Translate" button.
4. View the translated text below the input box.
5. Use the speaker icon to listen to the translated text or the copy button to copy it to your clipboard.

---

## Project Structure

```
Language-Translator/
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│       └── script.js
├── templates/
│   ├── index.html
├── app.py
├── requirements.txt
├── .env
└── README.md
```

- `static/`: Contains CSS and JavaScript files.
- `templates/`: Contains HTML templates.
- `app.py`: Main application file.
- `requirements.txt`: Lists required Python packages.
- `.env`: Contains environment variables.
- `README.md`: Documentation file.

---

## Screenshots

![Homepage](https://via.placeholder.com/800x400.png?text=Homepage+Screenshot)
*Example screenshot of the homepage with input fields, microphone, speaker, and copy button.*
![image](https://github.com/user-attachments/assets/f3a4ff00-8773-444d-a915-a7c8b6701201)

---

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Create a Pull Request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Thanks to [Google Cloud](https://cloud.google.com/) for their robust Translation API.
- Inspired by the need for seamless communication across languages.

---

Happy Translating! 🌏

