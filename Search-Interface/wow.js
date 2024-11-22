const samplePosts = [
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@JohnDoe",
        content: "This is my first post in Threads!",
    },
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@JaneDoe",
        content: "Exploring new features is so fun!",
    },
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@CoolUser123",
        content: "Loving the simplicity of this platform!",
    },
];

// Sample Profile Data
const sampleProfiles = [
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@JohnDoe",
        bio: "Tech enthusiast. Love coding and sharing ideas.",
        location: "New York, USA",
        followers: 1200,
    },
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@JaneDoe",
        bio: "Exploring the world through code.",
        location: "San Francisco, USA",
        followers: 800,
    },
    {
        avatar: "https://res.cloudinary.com/diws5bcu6/image/upload/v1731675277/4_waxyt5.png",
        username: "@CoolUser123",
        bio: "Designing the future with creativity and tech.",
        location: "Los Angeles, USA",
        followers: 500,
    },
];

const threadsTitle = document.getElementById("threads-title");
const threadsContent = document.getElementById("threads-content");
const profileTitle = document.getElementById("profile-title");
const profileContent = document.getElementById("profile-content");

// Toggle Threads
threadsTitle.addEventListener("click", () => {
    threadsContent.style.display = threadsContent.style.display === "none" ? "block" : "none";
    profileContent.style.display = "none";

    // Populate threads content dynamically
    threadsContent.innerHTML = ""; // Clear previous content
    samplePosts.forEach((post) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("user-post");

        // Apply Cloudinary transformation to the avatar
        const transformedAvatar = post.avatar.replace("/upload/", "/upload/w_50,h_50,c_thumb,r_max/");

        postDiv.innerHTML = `
            <img src="${transformedAvatar}" alt="Avatar" class="avatar">
            <div class="post-details">
                <div class="username">${post.username}</div>
                <div class="post-content">${post.content}</div>
            </div>
        `;
        threadsContent.appendChild(postDiv);
    });
});

// Toggle Profile
profileTitle.addEventListener("click", () => {
    profileContent.style.display = profileContent.style.display === "none" ? "block" : "none";
    threadsContent.style.display = "none";

    // Populate profile content dynamically
    profileContent.innerHTML = ""; // Clear previous content
    sampleProfiles.forEach((profile) => {
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("user-profile");

        // Apply Cloudinary transformation to the avatar
        const transformedAvatar = profile.avatar.replace("/upload/", "/upload/w_50,h_50,c_thumb,r_max/");

        // Display only avatar, username, and follow button
        profileDiv.innerHTML = `
            <img src="${transformedAvatar}" alt="Avatar" class="avatar">
            <div class="profile-details">
                <div class="username">${profile.username}</div>
                <button class="follow-btn">Follow</button>
            </div>
        `;
        profileContent.appendChild(profileDiv);
    });
});
