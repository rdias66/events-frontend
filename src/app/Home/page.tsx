import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home({ LanguageTextData }: any) {
  return (
    <div>
      <h1>this is home </h1>
      <Link href="/operations">
        <Button>Go to Operations</Button>
      </Link>
    </div>
  )
}
