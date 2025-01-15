from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator



app = Flask(__name__, static_folder='static')
CORS(app)  # Enable CORS for all routes
translator = Translator()

@app.route('/translate', methods=['POST'])
def translate():
    data = request.get_json()
    source_text = data.get('sourceText', '')
    source_lang = data.get('sourceLang', 'en')
    target_lang = data.get('targetLang', 'es')

    if not source_text.strip():
        return jsonify({'error': 'No text provided'}), 400

    try:
        translation = translator.translate(source_text, src=source_lang, dest=target_lang)
        return jsonify({'translatedText': translation.text})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
