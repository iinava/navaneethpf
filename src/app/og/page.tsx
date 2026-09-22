import { USER } from "@/features/portfolio/data/user"

export default function Page() {
  return (
    <div className="max-w-screen overflow-x-clip">
      <div className="mx-auto flex h-screen flex-col justify-center md:max-w-3xl">
        <h1 className="text-5xl font-medium tracking-tight">
          {USER.displayName}
        </h1>
        <p className="mt-2 text-xl text-muted-foreground">{USER.bio}</p>
      </div>
    </div>
  )
}
