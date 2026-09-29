/* =========================================================
   CHILL — DATA LOADER
   Stage 1: JS only loads movie data and renders reusable cards.
   Interactive features (hover trailer, play, like, My List, etc.)
   can be added later without changing the HTML structure.
   ========================================================= */

const MOVIE_DATA_URL = "data/movie-list.json";

const sectionConfig = {
    continueWatching: document.querySelector("#continue-watching-row"),
    topMovies: document.querySelector("#top-movies-row"),
    trending: document.querySelector("#trending-row"),
    newReleases: document.querySelector("#new-releases-row"),
};

const fallbackMovies = [
    {
        id: 1,
        title: "Dune: Part Two",
        poster: "assets/images/poster-movies/1_poster dune2.jpg",
        trailer: "assets/videos/trailer-movies/t1_dp2-compress.mp4",
        year: 2024,
        rating: "PG-13",
        duration: "2h 46m",
        genres: ["Action", "Adventure"],
    },
    {
        id: 2,
        title: "Deadpool & Wolverine",
        poster: "assets/images/poster-movies/2_poster_deadpoolnwolverine.jpg",
        trailer: "assets/videos/trailer-movies/t2_dw-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "2h 8m",
        genres: ["Action", "Comedy"],
    },
    {
        id: 3,
        title: "Inside Out 2",
        poster: "assets/images/poster-movies/3_poster_insideout2.jpg",
        trailer: "assets/videos/trailer-movies/t3_io2-compress.mp4",
        year: 2024,
        rating: "PG",
        duration: "1h 40m",
        genres: ["Animation", "Comedy"],
    },
    {
        id: 4,
        title: "A Quiet Place: Day One",
        poster: "assets/images/poster-movies/4_poster_aqpdo.webp",
        trailer: "assets/videos/trailer-movies/t4_aqpdo-compress.mp4",
        year: 2024,
        rating: "PG-13",
        duration: "1h 40m",
        genres: ["Horror", "Sci-Fi"],
    },
    {
        id: 5,
        title: "Gladiator II",
        poster: "assets/images/poster-movies/5_poster gladiator2.jpeg",
        trailer: "assets/videos/trailer-movies/t5_g2-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "2h 28m",
        genres: ["Action", "Drama"],
    },
    {
        id: 6,
        title: "Kung Fu Panda 4",
        poster: "assets/images/poster-movies/6_poster KF4.png",
        trailer: "assets/videos/trailer-movies/t6_kp4-compress.mp4",
        year: 2024,
        rating: "PG",
        duration: "1h 34m",
        genres: ["Animation", "Adventure"],
    },
    {
        id: 7,
        title: "Smile 2",
        poster: "assets/images/poster-movies/7_poster smile2.jpg",
        trailer: "assets/videos/trailer-movies/t7_s2-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "2h 7m",
        genres: ["Horror", "Thriller"],
    },
    {
        id: 8,
        title: "The Fall Guy",
        poster: "assets/images/poster-movies/8_poster_tfg.jpg",
        trailer: "assets/videos/trailer-movies/t8_tfg-compress.mp4",
        year: 2024,
        rating: "PG-13",
        duration: "2h 6m",
        genres: ["Action", "Comedy"],
    },
    {
        id: 9,
        title: "Oppenheimer",
        poster: "assets/images/poster-movies/9_poster_OH.png",
        trailer: "assets/videos/trailer-movies/t9_oppenheimer-compress.mp4",
        year: 2023,
        rating: "R",
        duration: "3h",
        genres: ["Drama", "History"],
    },
    {
        id: 10,
        title: "Longlegs",
        poster: "assets/images/poster-movies/10_poster longlegs.webp",
        trailer: "assets/videos/trailer-movies/t10_longlegs-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "1h 41m",
        genres: ["Horror", "Mystery"],
    },
    {
        id: 11,
        title: "Despicable Me 4",
        poster: "assets/images/poster-movies/11_poster DM4.jpg",
        trailer: "assets/videos/trailer-movies/t11_dm4-compress.mp4",
        year: 2024,
        rating: "PG",
        duration: "1h 35m",
        genres: ["Animation", "Comedy"],
    },
    {
        id: 12,
        title: "John Wick: Chapter 4",
        poster: "assets/images/poster-movies/12_poster js4.jpg",
        trailer: "assets/videos/trailer-movies/t12_jw4-compress.mp4",
        year: 2023,
        rating: "R",
        duration: "2h 49m",
        genres: ["Action", "Thriller"],
    },
    {
        id: 13,
        title: "Abigail",
        poster: "assets/images/poster-movies/13_poster abigail.jpg",
        trailer: "assets/videos/trailer-movies/t13_abigail-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "1h 49m",
        genres: ["Horror", "Thriller"],
    },
    {
        id: 14,
        title: "Moana 2",
        poster: "assets/images/poster-movies/14_poster moana2.webp",
        trailer: "assets/videos/trailer-movies/t14_m2-compress.mp4",
        year: 2024,
        rating: "PG",
        duration: "1h 40m",
        genres: ["Animation", "Adventure"],
    },
    {
        id: 15,
        title: "Bad Boys: Ride or Die",
        poster: "assets/images/poster-movies/15_poster bad boys.webp",
        trailer: "assets/videos/trailer-movies/t15_bbrod-compress.mp4",
        year: 2024,
        rating: "R",
        duration: "1h 55m",
        genres: ["Action", "Comedy"],
    },
    {
        id: 16,
        title: "The Conjuring: Last Rites",
        poster: "assets/images/poster-movies/16_poster tclr.webp",
        trailer: "assets/videos/trailer-movies/t16_tclr-compress.mp4",
        year: 2025,
        rating: "R",
        duration: "2h",
        genres: ["Horror", "Mystery"],
    },
    {
        id: 17,
        title: "Toy Story 5",
        poster: "assets/images/poster-movies/17_poster TS5.jpg",
        trailer: "assets/videos/trailer-movies/t17_ts5-compress.mp4",
        year: 2026,
        rating: "PG",
        duration: "1h 40m",
        genres: ["Animation", "Adventure"],
    },
    {
        id: 18,
        title: "Mission: Impossible — Dead Reckoning",
        poster: "assets/images/poster-movies/18_poster MSDR.jpg",
        trailer: "assets/videos/trailer-movies/t18_mi-compress.mp4",
        year: 2023,
        rating: "PG-13",
        duration: "2h 43m",
        genres: ["Action", "Spy"],
    },
    {
        id: 19,
        title: "Anyone But You",
        poster: "assets/images/poster-movies/19_poster anyone but you.jpeg",
        trailer: "assets/videos/trailer-movies/t19_aby-compress.mp4",
        year: 2023,
        rating: "R",
        duration: "1h 43m",
        genres: ["Romance", "Comedy"],
    },
    {
        id: 20,
        title: "The Batman Part II",
        poster: "assets/images/poster-movies/20_poster tb2.jpg",
        trailer: "assets/videos/trailer-movies/t20_batman2-compress.mp4",
        year: 2026,
        rating: "PG-13",
        duration: "TBA",
        genres: ["Action", "Crime"],
    },
];
const heroVideo = document.querySelector(".hero-video");
const heroMuteButton = document.querySelector(".hero-mute-button");
const heroMuteIcon = document.querySelector(".hero-mute-icon");

if (heroVideo && heroMuteButton && heroMuteIcon) {
    heroMuteButton.addEventListener("click", () => {
        heroVideo.muted = !heroVideo.muted;

        if (heroVideo.muted) {
            heroMuteIcon.textContent = "🔇";
            heroMuteButton.setAttribute("aria-label", "Unmute trailer");
            heroMuteButton.setAttribute("aria-pressed", "true");
        } else {
            heroMuteIcon.textContent = "🔊";
            heroMuteButton.setAttribute("aria-label", "Mute trailer");
            heroMuteButton.setAttribute("aria-pressed", "false");
        }
    });
}

function normalizeMovie(movie, index) {
    return {
        id: movie.id ?? index + 1,
        title: movie.title ?? `Movie ${index + 1}`,
        poster: movie.poster ?? movie.posterPath ?? movie.image ?? "",
        trailer: movie.trailer ?? movie.trailerPath ?? movie.video ?? "",
        year: movie.year ?? movie.releaseYear ?? "—",
        rating: movie.rating ?? "—",
        duration: movie.duration ?? "—",
        genres: Array.isArray(movie.genres)
            ? movie.genres
            : Array.isArray(movie.genre)
                ? movie.genre
                : typeof movie.genre === "string"
                    ? movie.genre.split(",").map((item) => item.trim())
                    : [],
    };
}

function movieCard(movie) {
    const article = document.createElement("article");
    article.className = "movie-card";

    const posterWrap = document.createElement("div");
    posterWrap.className = "movie-poster-wrap";

    const poster = document.createElement("img");
    poster.className = "movie-poster";
    poster.src = movie.poster;
    poster.alt = `${movie.title} poster`;
    poster.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "movie-card-overlay";

    const title = document.createElement("h3");
    title.className = "movie-title";
    title.textContent = movie.title;

    const detail = document.createElement("div");
    detail.className = "movie-detail";

    [movie.year, movie.rating, movie.duration, ...movie.genres.slice(0, 2)].forEach((value) => {
        if (!value || value === "—") return;
        const span = document.createElement("span");
        span.textContent = value;
        detail.appendChild(span);
    });

    overlay.append(title, detail);
    posterWrap.append(poster, overlay);
    article.appendChild(posterWrap);

    return article;
}

function renderSection(element, movies) {
    element.innerHTML = "";
    movies.forEach((movie) => element.appendChild(movieCard(movie)));
}

function renderLoading() {
    Object.values(sectionConfig).forEach((element) => {
        element.innerHTML = `<div class="loading-card">Loading movies…</div>`;
    });
}

function renderError() {
    Object.values(sectionConfig).forEach((element) => {
        element.innerHTML = `<div class="error-card">Movie data could not be loaded. Check <strong>data/movie-list.json</strong>.</div>`;
    });
}

function renderMovies(movies) {
    const normalized = movies.map(normalizeMovie);

    // Stage-1 demo grouping. Later these can come from JSON fields:
    // continueWatching, category, trendingRank, releaseDate, etc.
    renderSection(sectionConfig.continueWatching, normalized.slice(0, 6));
    renderSection(sectionConfig.topMovies, normalized.slice(1, 9));
    renderSection(sectionConfig.trending, normalized.slice(4, 12));
    renderSection(sectionConfig.newReleases, normalized.slice(-8));
}

async function loadMovies() {
    renderLoading();

    try {
        const response = await fetch(MOVIE_DATA_URL);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const json = await response.json();
        const movies = Array.isArray(json) ? json : json.movies;

        if (!Array.isArray(movies) || movies.length === 0) {
            throw new Error("Movie list is empty or not an array.");
        }

        renderMovies(movies);
    } catch (error) {
        console.warn("Falling back to local movie assets:", error);
        renderMovies(fallbackMovies);
    }
}

document.addEventListener("DOMContentLoaded", loadMovies);
