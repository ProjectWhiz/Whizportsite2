# React + Flask Full Stack Application with SnapFolio Template

A full-stack web application with React frontend (using SnapFolio template) and Flask backend.

## Project Structure
```
whizportsite/
├── frontend/          # React application with SnapFolio template
│   ├── public/
│   │   ├── assets/   # SnapFolio CSS, JS, images, and vendor files
│   │   └── index.html
│   ├── src/
│   │   ├── components/  # React components (Header, Hero, About, etc.)
│   │   ├── App.js       # Main app with template integration
│   │   └── App.css
│   ├── package.json
│   └── README.md
├── backend/           # Flask API server
│   ├── app.py        # Main Flask application
│   ├── requirements.txt
│   └── README.md
├── SnapFolio/        # Original template files (reference)
└── README.md          # This file
```

## Features
✅ **SnapFolio Template Integrated**
- Modern, responsive portfolio template
- Converted to React components
- All CSS and animations working
- Proper JSX formatting

✅ **React Frontend**
- Component-based architecture
- React hooks (useState, useEffect)
- Dynamic script loading for vendor libraries
- AOS animations, Typed.js, GLightbox, and more

✅ **Flask Backend**
- RESTful API
- CORS enabled
- Can serve React build in production

## Prerequisites
- Node.js (v14 or higher)
- Python (3.8 or higher)
- npm or yarn

## Setup Instructions

### Backend Setup (Flask)
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment (if not already created):
   - Windows:
     ```bash
     python -m venv ../.venv
     ../.venv\Scripts\activate
     ```
   - Mac/Linux:
     ```bash
     python -m venv ../.venv
     source ../.venv/bin/activate
     ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Flask server:
   ```bash
   python app.py
   ```
   The backend will run on http://localhost:5000

### Frontend Setup (React)
1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Dependencies should already be installed. If not:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The frontend will run on http://localhost:3000

### Run Both Servers Together
From the frontend folder, run:
```bash
npm run start:all
```
This starts both Flask backend and React frontend simultaneously.

## Production Deployment

### Option 1: Separate Servers (Development)
- React dev server on port 3000
- Flask API on port 5000

### Option 2: Flask Serves React (Production)
1. Build the React app:
   ```bash
   cd frontend
   npm run build
   ```

2. Run Flask only:
   ```bash
   cd backend
   python app.py
   ```

3. Access everything at http://localhost:5000

Flask will serve the React frontend and handle API requests from the same URL.

## Template Components

All components are React-ified from the SnapFolio template:

- **Header.js** - Navigation sidebar with menu links
- **Hero.js** - Landing section with typing animation
- **About.js** - Profile card and about information
- **Stats.js** - Animated statistics counters
- **Skills.js** - Skill bars with categories
- **Resume.js** - Professional experience and education
- **Portfolio.js** - Filterable project gallery
- **Services.js** - Service cards grid
- **Contact.js** - Contact form and map
- **Footer.js** - Copyright and credits

## Template Features Working
- ✅ Bootstrap 5.3.7
- ✅ AOS (Animate On Scroll)
- ✅ Typed.js (typing animation)
- ✅ PureCounter (number animations)
- ✅ GLightbox (image lightbox)
- ✅ Isotope (portfolio filtering)
- ✅ Swiper (carousels)
- ✅ Bootstrap Icons
- ✅ Responsive navigation
- ✅ Smooth scrolling
- ✅ All CSS features and animations

## API Endpoints
- `GET /api/hello` - Returns a hello message from Flask
- `GET /api/data` - Returns sample data array

## Technology Stack
**Frontend:**
- React 18
- SnapFolio Bootstrap Template
- JavaScript (ES6+)
- Bootstrap 5.3.7
- AOS, Typed.js, GLightbox, Isotope

**Backend:**
- Flask 3.0.0
- Flask-CORS 4.0.0
- Python 3.x

## Customization

### Editing Content
All content is in the component files in `frontend/src/components/`. Edit the JSX to change text, images, and links.

### Changing Images
Replace images in `frontend/public/assets/img/` with your own. Keep the same filenames or update the paths in components.

### Styling
- Main styles: `frontend/public/assets/css/main.css`
- Override in: `frontend/src/App.css`

## Troubleshooting
- **Scripts not loading**: Check browser console, ensure all vendor files copied to public/assets
- **Images not showing**: Verify paths start with `/assets/` in JSX
- **Animations not working**: AOS initializes on component mount, refresh if needed
- **CORS errors**: Ensure Flask-CORS is installed and backend is running
- **Both servers must run simultaneously in development mode**

## Next Steps
- Customize content and images
- Connect contact form to backend API
- Add your own portfolio projects
- Integrate Flask backend for dynamic content
- Add authentication
- Connect to a database
- Deploy to production

## Credits
- Template: [SnapFolio by BootstrapMade](https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/)
- Converted to React with proper JSX formatting
- All HTML converted to className, proper self-closing tags, React event handlers
