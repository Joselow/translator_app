import { AUTO_LANGUAGE, LANG_DIRECTION, SUPPORTED_LANGUAGES } from "../enums"
import { FromLanguages, Languages } from "../types/initialState"

type Props  =
|{ type: LANG_DIRECTION.TO, value: Languages, onChange: (value: Languages) => void }
|{ type: LANG_DIRECTION.FROM, value: FromLanguages, onChange: (value: FromLanguages) => void }

export function SelectorLanguages ({ onChange, value, type}: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=> {    
    onChange(e.target.value as Languages)
  }

  return <>
    <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      onChange={handleChange}
      value={value}
    > 
      { type === LANG_DIRECTION.FROM && <option value={AUTO_LANGUAGE}>Detect language</option> }
      {
        Object.entries(SUPPORTED_LANGUAGES).map(([key, language]) => (
          <option value={key} key={key}>{ language }</option>
        ))
      }
    </select>
  </>
}