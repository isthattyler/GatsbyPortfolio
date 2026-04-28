# Gatsby Portfolio Agent Instructions

## Development
- Start dev server: `npm run develop` (opens browser automatically)
- Build for production: `npm run build`
- Preview production build: `npm run serve`
- Clean cache: `npm run clean`

## Code Quality
- Format all files: `npm run format`
- Pre-commit hook automatically runs lint-staged (ESLint fix + Prettier) on staged files
- Manual lint: `eslint --fix "src/**/*.{js,jsx}"`
- Manual format: `prettier --write "**/*.{js,jsx,json,md}"`

## Deployment
- Deploy to GitHub Pages: `npm run deploy:github` (cleans, builds, and runs deploy script)
- Deploy script: `scripts/deploy-github.js` (uses gh-pages to publish 'public' directory to GitHub Pages branch 'master')

## Testing
- No test suite configured yet (`npm test` is a placeholder)
- See https://gatsby.dev/unit-testing for Gatsby testing guidance

## Project Structure
- Pages: `src/pages/`
- Images: `src/images/`
- Content data: `src/content/data.js`
- Gatsby config: `gatsby-config.js`
- Styles: SCSS files in `src/style/` (uses gatsby-plugin-sass)
- Components: `src/components/`
- Context API: `src/context/context.js` (for state management)

## Dependencies
- Gatsby v4
- React 17
- Bootstrap 5
- Sass

## Important Notes
- Gatsby caches in `.cache/` and outputs to `/`public`/` (both in .gitignore)
- Content managed via `src/content/data.js`
- State management uses React Context at `src/context/context.js`
- Styles use SCSS with gatsby-plugin-sass