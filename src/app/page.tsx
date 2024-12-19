import SiteNavbar from '@/components/SiteNavbar'

export default async function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main className="flex flex-col items-center justify-center h-screen text-center space-y-2">
        <h1 className="text-4xl font-medium">INQ-AI</h1>
        <p>Create AI agents to handle guest queries, elevate experiences, and simplify communication</p>
        <p className="font-bold">Try it out now!</p>
      </main>
    </>
  )
}
