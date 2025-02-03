import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import landingImg from '@/assets/welcome.svg'

function HomePage() {
  return (
    <div className='min-h-screen bg-muted grid place-items-center'>
      <div className='flex items-center justify-between gap-10 container main-container'>
        <div className='max-w-[800px]'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide mb-1 lg:mb-2 text-primary'>Take Control of Your Finances with Ease</h1>
          <p className='text-xl lg:text-2xl tracking-wide mb-3 lg:mb-5'>Track your expenses, set budgets, and visualize your financial health—all in one place.</p>
          <Button asChild>
            <Link href='/dashboard' className='text-lg lg:text-xl'>
                Go to Dashboard
            </Link>
          </Button>
        </div>
        <div className='grid place-items-center'>
            <Image src={landingImg} alt='landing' width={500} height={500} className="hidden lg:block" priority/>
        </div>
      </div>
    </div>
  )
}

export default HomePage