function LanguageSwitcher({ lang, onChangeLang }) {
  return (
    <div className="flex gap-2">
      <button
        type="button"
        onClick={() => onChangeLang('en')}
        className={`px-3 py-1 rounded text-sm cursor-pointer transition-colors ${
          lang === 'en'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onChangeLang('es')}
        className={`px-3 py-1 rounded text-sm cursor-pointer transition-colors ${
          lang === 'es'
            ? 'bg-black text-white'
            : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
        }`}
      >
        ES
      </button>
    </div>
  );
}

export default LanguageSwitcher;
