import { SelectorLanguages } from "./componentes/icons/SelectorLanguage";
import InterchangeIcon from "./componentes/icons/InterchangeIcon";

import { useTranslator } from "./hooks/useTranslator";
import { AUTO_LANGUAGE } from "./enums";

function App() {
  const {
    fromLanguage,
    toLanguage,
    setFromLanguage,
    interchangeLanguages,
    setToLanguage
  } = useTranslator();
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="grid grid-cols-3 gap-10">
          <div >
            <SelectorLanguages
              type="from"
              value={fromLanguage}
              onChange={setFromLanguage}
            />
            <div>
              {fromLanguage}
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
            type="to"
            value={toLanguage}
            onChange={setToLanguage}
          />
            <div>
            {toLanguage}
            </div>
          </div>
          
        </div>
      </div>

    </>
  );
}

export default App;
