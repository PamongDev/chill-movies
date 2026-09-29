# Chill 🎬

**Chill** is a responsive movie streaming website project built from scratch as part of a Full Stack Development learning journey.

The project focuses on building a modern streaming-platform interface inspired by popular movie streaming services, with a dark cinematic design, responsive layout, movie posters, and trailer previews.

> 🚧 **Project Status:** In Development

---

## ✨ Features

### Currentsssdaw

* Responsive homepage
* Responsive navigation bar
* Hero movie section
* Movie poster collections
* Continue Watching section
* Top Movies & Series section
* Trending Now section
* New Releases section
* Responsive movie cards
* Local movie poster assets
* Local movie trailer assets
* Centralized CSS design tokens

### Planned

* Movie card hover preview
* Trailer autoplay on hover
* Play / pause controls
* Mute / unmute controls
* Add to My List
* Like button
* Movie detail page
* Search functionality
* Movie and genre filtering
* Login & registration system
* User profile
* Personalized My List
* Backend API
* Database integration
* Authentication
* Full-stack movie management system

---

## 🎨 Design System

Chill uses a centralized CSS design system based on CSS custom properties.

### Brand

| Token          | Value     |
| -------------- | --------- |
| Primary        | `#E50914` |
| Primary Hover  | `#B20710` |
| Primary Active | `#8F060D` |

### Background

| Token      | Value     |
| ---------- | --------- |
| Background | `#080808` |
| Secondary  | `#111111` |
| Tertiary   | `#181818` |

### Typography

The project uses:

```css
--font-family-base: 'Inter', sans-serif;
```

Font sizes, weights, line heights, spacing, radius, shadows, transitions, and container sizes are also managed through CSS variables.

This makes the design easier to maintain and keeps the UI consistent across different pages.

---

## 🗂️ Project Structure

```text
Website Chill/
│
├── index.html
├── login-page.html
├── register-page.html
├── forgot-password.html
├── readme.md
│
├── assets/
│   ├── images/
│   │   ├── main/
│   │   │   ├── big logo.png
│   │   │   ├── full non bg.png
│   │   │   ├── logo app.png
│   │   │   └── logo only no bg.png
│   │   │
│   │   └── poster-movies/
│   │       ├── 1_poster dune2.jpg
│   │       ├── 2_poster_deadpoolnwolverine.jpg
│   │       ├── 3_poster_insideout2.jpg
│   │       └── ...
│   │
│   └── videos/
│       ├── movies/
│       └── trailer-movies/
│           ├── t1_dp2-compress.mp4
│           ├── t2_dw-compress.mp4
│           ├── t3_io2-compress.mp4
│           └── ...
│
├── css/
│   ├── auth.css
│   ├── components.css
│   └── style.css
│
├── data/
│   ├── dummy-movie.json
│   └── movie-list.json
│
└── script/
    ├── auth.js
    ├── components.js
    └── main.js
```

---

## 🛠️ Technologies

The project is currently built with:

* HTML5
* CSS3
* JavaScript
* JSON
* Git
* GitHub

### Planned Technologies

As development progresses, the project may include:

* Tailwind CSS
* Node.js
* Express.js
* Laravel
* SQL / NoSQL Database
* REST API
* Authentication
* Git & GitHub workflow

---

## 📦 Movie Data

Movie information is separated from the HTML structure and stored inside JSON files.

Example:

```json
{
    "id": 1,
    "title": "Dune: Part Two",
    "year": 2024,
    "rating": "PG-13",
    "duration": "2h 46m",
    "genres": [
        "Action",
        "Adventure"
    ]
}
```

The goal is to keep movie information separate from the presentation layer.

Instead of manually creating every movie card in HTML, JavaScript can later load the movie data and generate the cards dynamically.

```text
movie-list.json
       ↓
    main.js
       ↓
   Movie Data
       ↓
    Movie Card
       ↓
     HTML
```

---

## 🎥 Movie Assets

The project uses local movie poster and trailer assets for development purposes.

Posters are stored in:

```text
assets/images/poster-movies/
```

Trailers are stored in:

```text
assets/videos/trailer-movies/
```

The movie assets are used only as development/demo content.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Open the project

Open the project folder using VS Code.

### 3. Run with Live Server

Because the project uses local JSON data with JavaScript `fetch()`, it is recommended to run the project using a local development server such as **Live Server**.

Do not open `index.html` directly using:

```text
file:///
```

Instead, run the project through a local server.

---

## 🔄 Development Workflow

The project uses Git for version control.

Typical workflow:

```bash
git status
git add .
git commit -m "feat: add responsive homepage"
git push origin master
```

Example commit types:

```text
feat: add movie homepage
fix: fix responsive navbar
style: improve movie card layout
refactor: reorganize css components
data: update movie dataset
docs: update readme
```

---

## 📱 Responsive Design

Chill is designed to work across different screen sizes:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

The layout adapts the navigation, hero section, movie cards, movie rows, and footer according to the available screen width.

---

## 🎯 Project Goals

The main goals of Chill are:

1. Practice building a website from scratch.
2. Apply responsive web design principles.
3. Practice HTML semantic structure.
4. Build a reusable CSS component system.
5. Separate data from presentation.
6. Practice JavaScript DOM manipulation.
7. Learn Git and GitHub workflow.
8. Gradually transform a frontend project into a full-stack application.

---

## 🗺️ Development Roadmap

### Phase 1 — UI Foundation

* [x] Project structure
* [x] Design system
* [x] Color palette
* [x] Logo and assets
* [x] Homepage structure
* [x] Responsive layout

### Phase 2 — Frontend Interaction

* [ ] Dynamic movie cards
* [ ] Movie card hover preview
* [ ] Trailer controls
* [ ] Search
* [ ] Genre filter
* [ ] My List
* [ ] Like interaction

### Phase 3 — Movie Pages

* [ ] Movie detail page
* [ ] Watch page
* [ ] Related movies
* [ ] Movie information
* [ ] Trailer section

### Phase 4 — Authentication

* [ ] Login
* [ ] Register
* [ ] Forgot password
* [ ] User session
* [ ] Profile

### Phase 5 — Backend

* [ ] Backend API
* [ ] Database
* [ ] User management
* [ ] Movie management
* [ ] Authentication API
* [ ] My List API

### Phase 6 — Full Stack

* [ ] Connect frontend to backend
* [ ] Persistent user data
* [ ] Movie search API
* [ ] Personalized content
* [ ] Production deployment

---

## 📌 Project Status

Chill is currently in the **frontend development stage**.

The current priority is to build a clean, responsive, and reusable homepage before moving into more advanced JavaScript interactions and backend functionality.

---

## 👨‍💻 Author

**Muhamad Fahmi Ammar**

Computer Science / Informatics Engineering

Built as part of a Full Stack Development learning journey.

---

## 📄 License

This project is intended for educational and portfolio purposes.
