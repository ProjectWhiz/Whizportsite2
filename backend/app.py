from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../frontend/build', static_url_path='')
CORS(app)  # Enable CORS for all routes

@app.route('/api/hello', methods=['GET'])
def hello():
    return jsonify({'message': 'Hello from Flask backend!'})

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        'data': [
            {'id': 1, 'name': 'Item 1'},
            {'id': 2, 'name': 'Item 2'},
            {'id': 3, 'name': 'Item 3'}
        ]
    })

# Serve React App
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    # Check if build folder exists
    if not os.path.exists(app.static_folder):
        return jsonify({
            'status': 'development',
            'message': 'React app not built yet. For development, use http://localhost:3000',
            'instructions': 'To build the React app, run: cd frontend && npm run build',
            'api_endpoints': {
                '/api/hello': 'GET - Returns hello message',
                '/api/data': 'GET - Returns sample data'
            }
        }), 200
    
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
