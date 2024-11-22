document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const threadsTitle = document.getElementById("threads-title");
    const threadsContent = document.getElementById("threads-content");
    const profileTitle = document.getElementById("profile-title");
    const profileContent = document.getElementById("profile-content");
    const searchInput = document.getElementById("search-input");

    // Initially hide both content sections
    threadsContent.style.display = "none";
    profileContent.style.display = "none";

    // Toggle Threads content
    threadsTitle.addEventListener("click", () => {
        const isHidden = threadsContent.style.display === "none";
        threadsContent.style.display = isHidden ? "block" : "none";
        profileContent.style.display = "none"; // Hide profile
    });

    // Toggle Profile content
    profileTitle.addEventListener("click", () => {
        const isHidden = profileContent.style.display === "none";
        profileContent.style.display = isHidden ? "block" : "none";
        threadsContent.style.display = "none"; // Hide threads
    });

    // Add event listener for search functionality
    searchInput.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default behavior

            const searchValue = searchInput.value.trim();
            if (!searchValue) {
                alert("Please enter a search query.");
                return;
            }

            try {
                // Fetch search results (replace `/api/search` with your API endpoint)
                const response = await fetch(`/api/search?query=${encodeURIComponent(searchValue)}`);
                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
                }

                const data = await response.json();
                console.log("Search results:", data);

                // Hide both Threads and Profile sections after search
                threadsContent.style.display = "none";
                profileContent.style.display = "none";

                // Display the search results (you can customize this further)
                alert("Search completed. Check the console for results.");
            } catch (error) {
                console.error("Error during search:", error);
                alert("An error occurred while fetching search results.");
            }
        }
    });

    // Dynamically load user posts into the Threads section
    const loadUserPosts = () => {
        const userPosts = [
            { user: "@Yesh.exe", time: "1hr", message: "Mas masarap pa rin talaga ang roque-road na ice cream e" },
            { user: "@Shrek_oger", time: "1hr", message: "E si harry roque nga e nasa dolomite beach" },
        ];

        const postsContainer = document.getElementById("threads-content");
        if (!postsContainer) {
            console.error("Threads content container not found.");
            return;
        }

        // Clear any existing posts
        postsContainer.innerHTML = "";

        // Populate posts dynamically
        userPosts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            postElement.innerHTML = `
                <div class="user">${post.user}</div>
                <div class="time">${post.time}</div>
                <div class="message">${post.message}</div>
            `;

            postsContainer.appendChild(postElement);
        });
    };

    // Load user posts on page load
    loadUserPosts();
});
