import { Button } from '@/components/ui/button'

export function Home({ LanguageTextData }: any) {
  return (
    <div>
      <h1>{LanguageTextData.content} </h1>
      <Button>Redirect to operations</Button>
    </div>
  )
}
