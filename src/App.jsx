import { useState } from "react";

import DownloadButton from "./components/DownloadButton";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ResumeWeb from "./components/web/ResumeWeb";
import resumeEn from "./data/resume-en";
import resumeEs from "./data/resume-es";

const dataByLang = { en: resumeEn, es: resumeEs };

function App() {
  const [lang, setLang] = useState("en");
  const data = dataByLang[lang];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="flex justify-center items-center gap-4 mb-6">
        <LanguageSwitcher lang={lang} onChangeLang={setLang} />
        <DownloadButton data={data} lang={lang} />
      </div>
      <ResumeWeb data={data} />
    </div>
  );
}

export default App;
