import { SelectorLanguages } from "./componentes/SelectorLanguage";
import { Textlanguage } from "./componentes/TextLanguage";
import InterchangeIcon from "./componentes/icons/InterchangeIcon";

import { useTranslator } from "./hooks/useTranslator";
import { AUTO_LANGUAGE, LANG_DIRECTION } from "./enums";

function App() {
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    interchangeLanguages,
    setToLanguage,
    loading,
    setFromText,
    setResultText
  } = useTranslator();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 gap-10">
          <div >
            <SelectorLanguages
              type={LANG_DIRECTION.FROM}
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <div>
              <Textlanguage
                type={LANG_DIRECTION.FROM}
                placeholder="Empieza a escribir"
                onChange={setFromText}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="rounded-md px-3 py-1 bg-white" 
              onClick={() => interchangeLanguages()}
              disabled={fromLanguage === AUTO_LANGUAGE}
              >
              <InterchangeIcon/>
            </button>
          </div>
          <div>
          <SelectorLanguages
            type={LANG_DIRECTION.TO}
            value={toLanguage}
            onChange={setToLanguage}
          />
            <div>
              <Textlanguage
                type={LANG_DIRECTION.TO}
                placeholder="Traducción"
                loading={loading}
                onChange={setResultText}
              />
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default App;
