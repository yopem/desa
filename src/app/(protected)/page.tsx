import LogoutButton from "@/components/auth/logout-button"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to the Protected Page</h1>
      <p className="mt-4 text-lg">
        You are authenticated and can access this page.
      </p>
      <LogoutButton />
    </div>
  )
}
