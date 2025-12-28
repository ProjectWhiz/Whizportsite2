# Flask Backend

## Setup
1. Create a virtual environment:
   ```bash
   python -m venv venv
   ```

2. Activate the virtual environment:
   - Windows: `venv\Scripts\activate`
   - Mac/Linux: `source venv/bin/activate`

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the Server
```bash
python app.py
```

The server will run on http://localhost:5000

## API Endpoints
- GET `/api/hello` - Returns a hello message
- GET `/api/data` - Returns sample data
