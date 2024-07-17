import { LANG_DIRECTION } from "../enums"

interface Props {
  type: LANG_DIRECTION,
  loading? : boolean,
  placeholder: string,
  onChange: (value: string) => void
}


export function Textlanguage ({ type, loading, placeholder, onChange }: Props) {
  let placeholderValue = placeholder
  if (type === LANG_DIRECTION.TO && loading) placeholderValue = 'Loading...'

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (type === LANG_DIRECTION.TO) return
    onChange(e.target.value)
  }

  return <>
    <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      placeholder={placeholderValue}
      disabled={type === LANG_DIRECTION.TO}
      onChange={handleChange}
      ></textarea>
  </>
}