fetch("redirects.json")
  .then(response => response.json())
  .then(data => {
    const path = window.location.pathname.substring(1); // "/abc123" → "abc123"
    if (data[path]) {
      window.location.href = data[path]; // 対応するURLにリダイレクト
    } else {
      document.body.innerHTML = "<h1>404 Not Found</h1>";
    }
  });
