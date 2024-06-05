import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Operations({ LanguageTextData }: any) {
  return (
    <div>
      <h1>this is operations</h1>
      <Link href="/">
        <Button>Go to home</Button>
      </Link>
    </div>
  )
}
