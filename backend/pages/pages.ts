import { api } from "encore.dev/api";

interface PageData {
  title: string;
  content: string;
}

// Home page
export const home = api.raw(
  { expose: true, method: "GET", path: "/" },
  async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home</title>
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <style>
    body { font-family: system-ui; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    nav { margin-bottom: 2rem; }
    nav a { margin-right: 1rem; color: #0066cc; text-decoration: none; }
    nav a:hover { text-decoration: underline; }
    .content { line-height: 1.6; }
  </style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <div class="content">
    <h1>Welcome Home</h1>
    <p>This is a simple web app built with Encore (TypeScript) and HTMX.</p>
    <button hx-get="/api/message" hx-target="#dynamic-content">Load Dynamic Content</button>
    <div id="dynamic-content"></div>
  </div>
</body>
</html>
    `);
  }
);

// About page
export const about = api.raw(
  { expose: true, method: "GET", path: "/about" },
  async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About</title>
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <style>
    body { font-family: system-ui; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    nav { margin-bottom: 2rem; }
    nav a { margin-right: 1rem; color: #0066cc; text-decoration: none; }
    nav a:hover { text-decoration: underline; }
    .content { line-height: 1.6; }
  </style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <div class="content">
    <h1>About Us</h1>
    <p>This is the about page with placeholder content.</p>
    <p>Built with modern technologies for efficient web development.</p>
  </div>
</body>
</html>
    `);
  }
);

// Contact page
export const contact = api.raw(
  { expose: true, method: "GET", path: "/contact" },
  async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
  <script src="https://unpkg.com/htmx.org@1.9.10"></script>
  <style>
    body { font-family: system-ui; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    nav { margin-bottom: 2rem; }
    nav a { margin-right: 1rem; color: #0066cc; text-decoration: none; }
    nav a:hover { text-decoration: underline; }
    .content { line-height: 1.6; }
    form { display: flex; flex-direction: column; gap: 1rem; max-width: 400px; }
    input, textarea { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; }
    button { padding: 0.5rem 1rem; background: #0066cc; color: white; border: none; border-radius: 4px; cursor: pointer; }
    button:hover { background: #0052a3; }
  </style>
</head>
<body>
  <nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
  </nav>
  <div class="content">
    <h1>Contact Us</h1>
    <form hx-post="/api/contact" hx-target="#form-result">
      <input type="text" name="name" placeholder="Your Name" required>
      <input type="email" name="email" placeholder="Your Email" required>
      <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
      <button type="submit">Send Message</button>
    </form>
    <div id="form-result"></div>
  </div>
</body>
</html>
    `);
  }
);

// API endpoint for dynamic content
export const getMessage = api(
  { expose: true, method: "GET", path: "/api/message" },
  async (): Promise<PageData> => {
    return {
      title: "Dynamic Content",
      content: "This content was loaded dynamically via HTMX!"
    };
  }
);

// API endpoint for contact form
export const submitContact = api.raw(
  { expose: true, method: "POST", path: "/api/contact" },
  async (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end(`
      <div style="margin-top: 1rem; padding: 1rem; background: #d4edda; border: 1px solid #c3e6cb; border-radius: 4px; color: #155724;">
        <strong>Success!</strong> Your message has been received.
      </div>
    `);
  }
);
