'use client'
import TextsEN from '@/data/text-en'
import TextsPTBR from '@/data/text-ptbr'
import { useState } from 'react'
import { Operations } from '@/pages/operations'
let pageTexts = TextsPTBR()
export default function App() {
  const [languageController, setLanguageController] = useState(false)
  const setLanguage = () => {
    setLanguageController(!languageController)
    pageTexts = languageController ? TextsPTBR() : TextsEN()
  }

  return (
    <div>
      <button onClick={setLanguage}>Toggle Language</button>
      <Operations LanguageTextData={pageTexts.operationsText} />
    </div>
  )
}
