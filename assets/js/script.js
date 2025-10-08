document.addEventListener('DOMContentLoaded', () => {
    const gameGrid = document.getElementById('game-grid');
    const searchBar = document.getElementById('search-bar');
    const noResultsMessage = document.getElementById('no-results');

    // Function to display games on the page
    const displayGames = (gamesToDisplay) => {
        gameGrid.innerHTML = ''; // Clear existing games
        if (gamesToDisplay.length === 0) {
            noResultsMessage.classList.remove('hidden');
        } else {
            noResultsMessage.classList.add('hidden');
        }

        gamesToDisplay.forEach(game => {
            // Create the game card element
            const gameCard = document.createElement('a');
            gameCard.href = `play.html?game=${game.id}`;
            gameCard.className = 'game-card group block';
            gameCard.setAttribute('data-title', game.title.toLowerCase());

            // Create the image element
            const gameImage = document.createElement('img');
            gameImage.src = game.image;
            gameImage.alt = game.title;
            gameImage.className = 'game-card-img';
            gameImage.onerror = () => { gameImage.src = 'https://placehold.co/400x300/111827/FFFFFF?text=Image+Not+Found' };


            // Create the title element
            const gameTitle = document.createElement('div');
            gameTitle.className = 'game-card-title';
            gameTitle.textContent = game.title;
            
            // Append image and title to the card
            gameCard.appendChild(gameImage);
            gameCard.appendChild(gameTitle);

            // Append the card to the grid
            gameGrid.appendChild(gameCard);
        });
    };

    // Initial display of all games
    displayGames(games);

    // Search functionality
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredGames = games.filter(game => 
            game.title.toLowerCase().includes(searchTerm)
        );
        displayGames(filteredGames);
    });
});
