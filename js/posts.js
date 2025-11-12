function getAllPosts() {
  // Combine all posts from different categories
  return [
    ...(typeof linuxPosts !== "undefined" ? linuxPosts : []),
    ...(typeof windowsPosts !== "undefined" ? windowsPosts : []),
    ...(typeof javaPosts !== "undefined" ? javaPosts : []),
  ];
}

function parseDate(dateString) {
  // Parse Indonesian date format "DD MMMM YYYY"
  const months = {
    Januari: 0,
    Februari: 1,
    Maret: 2,
    April: 3,
    Mei: 4,
    Juni: 5,
    Juli: 6,
    Agustus: 7,
    September: 8,
    Oktober: 9,
    November: 10,
    Desember: 11,
  };

  const parts = dateString.split(" ");
  const day = parseInt(parts[0]);
  const month = months[parts[1]];
  const year = parseInt(parts[2]);

  return new Date(year, month, day);
}

function displayPosts(category = "all", page = 1) {
  const postsContainer = document.getElementById("posts-list");
  const postsPerPage = 15;
  let filteredPosts = [];

  // Get posts based on category
  if (category === "all") {
    filteredPosts = getAllPosts();
  } else if (category === "linux" && typeof linuxPosts !== "undefined") {
    filteredPosts = linuxPosts;
  } else if (category === "windows" && typeof windowsPosts !== "undefined") {
    filteredPosts = windowsPosts;
  } else if (category === "java" && typeof javaPosts !== "undefined") {
    filteredPosts = javaPosts;
  }

  if (filteredPosts.length === 0) {
    postsContainer.innerHTML = "<p>No posts available.</p>";
    return;
  }

  // Sort by date descending (newest first)
  filteredPosts.sort((a, b) => {
    const dateA = parseDate(a.date);
    const dateB = parseDate(b.date);
    return dateB - dateA; // Descending order
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // Display posts
  let html = "";
  paginatedPosts.forEach((post) => {
    html += `<div class="post-item">
            <span class="post-date">${post.date}</span>
            <a href="${post.url}">${post.title}</a>
        </div>`;
  });

  // Add pagination controls
  if (totalPages > 1) {
    html += '<div class="pagination">';

    // Previous button
    if (page > 1) {
      html += `<a href="#" onclick="displayPosts('${category}', ${page - 1}); return false;">« Previous</a>`;
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (i === page) {
        html += `<span class="current-page">${i}</span>`;
      } else {
        html += `<a href="#" onclick="displayPosts('${category}', ${i}); return false;">${i}</a>`;
      }
    }

    // Next button
    if (page < totalPages) {
      html += `<a href="#" onclick="displayPosts('${category}', ${page + 1}); return false;">Next »</a>`;
    }

    html += "</div>";
  }

  postsContainer.innerHTML = html;
}
