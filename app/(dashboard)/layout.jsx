import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'

const layout = ({children}) => {
  return (
      <main className='grid lg:grid-cols-5'>

      <div className='hidden lg:block lg:col-span-1 lg:min-h-screen'>
        <Sidebar />
      </div>

      <div className="lg:col-span-4 relative">
          <Navbar />
        <div className=''>
          {children}
        </div>
      </div>

      </main>
  )
}

export default layout