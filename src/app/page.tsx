'use client'
import TextsEN from '@/data/text-en'
import TextsPTBR from '@/data/text-ptbr'
import { useState } from 'react'
import { Home } from '@/app/Home/page'
let pageTexts = TextsPTBR()

export default function Page() {
  const [languageController, setLanguageController] = useState(false)
  const setLanguage = () => {
    setLanguageController(!languageController)
    pageTexts = languageController ? TextsPTBR() : TextsEN()
  }

  return (
    <div>
      <button onClick={setLanguage}>Toggle Language</button>
      <Home LanguageTextData={pageTexts.homeText} />
    </div>
  )
}
