import SiteNavbar from '@/components/SiteNavbar'

export default async function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main className="flex flex-col items-center justify-center h-screen text-center space-y-2">
        <h1 className="text-4xl font-medium">Breyta</h1>
        <p>GPTs tailored to your business</p>
        <p className="font-bold">Try it out now!</p>
      </main>
    </>
  )
}
