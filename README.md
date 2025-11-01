# xandrudavid.com

[![Deploy Status](https://github.com/XandruDavid/xandrudavid/actions/workflows/deploy.yml/badge.svg)](https://github.com/XandruDavid/xandrudavid/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Built with Eleventy](https://img.shields.io/badge/built%20with-Eleventy-green.svg)](https://www.11ty.dev/)

Personal website built with minimal tooling and Eleventy.

🔗 **Live site:** [https://xandrudavid.com](https://xandrudavid.com)

## Tech Stack

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **HTML/CSS** - No frameworks, just vanilla code
- **GitHub Actions** - Automated deployment

## Development

### Getting Started

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3020)
npm start

# Build for production
npm run build
```

## Deployment

The site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

Everything is pushed to `main` applying [trunk-based development](https://trunkbaseddevelopment.com/). Features that are not ready for public are hidden behind feature flags.

### Feature Flags

To view feature-flagged content, add `?featureFlag=true` to the URL:

https://xandrudavid.com/?featureFlag=true

To hide any element behind the feature flag, add the `feature-flag` class:

```html
<section class="feature-flag">
  <!-- Your work-in-progress content -->
</section>
```

## Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - Features iterations
- `fix:` - Bug fixes
- `refactor:` - Code refactoring
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes

## License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.