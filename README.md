# Short Stories Collection

A minimalist short story website built with TanStack Start, Tailwind CSS, and Netlify.

## Features

- **Short Story Genres/Categories**: Organize stories by genre.
- **Automatic Update Dates**: Track when stories are published.
- **Cover Photos**: Upload cover photos for each short story.
- **Author Biography**: A dedicated author biography section on the homepage.
- **Decap CMS Integration**: Easy content management via `/admin`.

## Technology Stack

- **Framework**: TanStack Start
- **Styling**: Tailwind CSS v4 + Typography
- **Content**: Content Collections (`@content-collections/core`)
- **CMS**: Decap CMS + Netlify Identity (Git Gateway)
- **Deployment**: Netlify

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server using Netlify CLI:
   ```bash
   netlify dev
   ```

   This will start the Vite dev server and proxy requests through Netlify, allowing Netlify Identity and Decap CMS to function properly locally.

3. Access the CMS:
   Navigate to `http://localhost:8888/admin` to manage content locally.

## Project Structure

- `content/posts`: Markdown files for short stories.
- `content/author`: Markdown file for the author's biography.
- `src/routes`: TanStack Router file-based routing.
- `src/components`: UI components and shared layouts.
- `public/admin`: Decap CMS configuration and entry point.
