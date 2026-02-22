# Ivan Robles — Resume

Bilingual resume app (English / Spanish) built with React 19. Renders a web preview and exports an ATS-friendly PDF.

## Stack

- **React 19** + **Vite** (rolldown-vite)
- **Tailwind CSS 4** — web preview styling
- **@react-pdf/renderer** — PDF generation with real selectable text
- **Jest 30** + **React Testing Library** — tests
- **ESLint 10** — AirBnB-style linting

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the resume preview.

## Commands

| Command | Description |
|---|---|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run test` | Run Jest tests |
| `npm run coverage` | Run tests with coverage report |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with auto-fix |

## Project structure

```
src/
  data/
    resume-en.js        # English resume content
    resume-es.js        # Spanish resume content
  components/
    pdf/
      ResumePdf.jsx     # PDF document (@react-pdf/renderer)
    web/
      ResumeWeb.jsx     # Web preview (Tailwind CSS)
    DownloadButton.jsx  # PDF download button
    LanguageSwitcher.jsx
  App.jsx
  main.jsx
  index.css
__tests__/
  App.test.jsx
```

## ATS considerations

- Real selectable text guaranteed by `@react-pdf/renderer` (no canvas/image rendering)
- No word hyphenation — words are always complete for keyword matching
- Standard section headings: Experience, Skills, Education
- PDF metadata: title, author, subject, keywords
- Full URLs preserved in `href`/`src` attributes
