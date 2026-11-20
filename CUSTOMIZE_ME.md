# Before publishing — personalization checklist

This project started from a third-party template. **Existing experience, education, projects, and images belong to the template author unless you verify and replace them.** Do not publish them as your own.

1. `src/constants.js`: replace every project, skill, education and experience entry with your verified details. The original content is preserved for layout reference only.
2. `src/assets/profile2.png`: replace the original author's photo with your own (same filename).
3. `src/components/Navbar/Navbar.jsx`: replace GitHub and LinkedIn homepage links with your profile URLs; review any other links in Footer.
4. `src/components/About/About.jsx`: review your name, role, introduction and contact email placeholder.
5. `public/resume.pdf`: add your real resume; then enable the resume button in About.
6. Contact form: copy `.env.example` to `.env`, fill your own EmailJS keys and verify delivery before publishing.
7. Search all source files for `Tarun`, `Kaushik`, and old external links; replace remaining template-specific content.

## Run
`npm ci` then `npm run dev` (Node.js required). For production run `npm run build` and deploy `dist/` to a static host. Configure environment variables on your host if using EmailJS.

## What changed
- Kept React, Vite, Tailwind, sections, original imagery and overall dark-purple styling.
- Refined hero messaging and added clear Projects and Contact calls to action.
- Added keyboard access to project cards and accessible labels.
- Added SEO/Open Graph metadata, focus styling and reduced-motion support.
- Removed hard-coded third-party EmailJS credentials; added environment variable configuration.
- Replaced original owner's hero identity, social links and resume link with safe editable content.

## Important limitations
- Template content in constants, experience/education, footer and images needs manual verification and replacement.
- EmailJS cannot send until your own credentials are configured.
- Social profile links currently point to platform homepages, not your personal profiles.
- No real resume is included.
