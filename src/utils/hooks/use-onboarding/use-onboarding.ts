import { useEffect, useState } from "react"
import { storage } from "~/utils/storage"

const IS_ONBOARDING = "@isOnboarding"

export function useOnboarding() {
  const [isLoading, setIsLoading] = useState(true)
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null)

  async function complete(): Promise<void> {
    setIsFirstLaunch(false)
    await storage.set(IS_ONBOARDING, JSON.stringify(false))
  }

  useEffect(() => {
    async function process() {
      const isOnboarding = await storage.get(IS_ONBOARDING)
      if (isOnboarding === null) {
        setIsFirstLaunch(true)
        await storage.set(IS_ONBOARDING, JSON.stringify(true))
      } else {
        const parsedIsOnboarding = JSON.parse(isOnboarding)
        if (typeof parsedIsOnboarding === "boolean") {
          setIsFirstLaunch(parsedIsOnboarding)
        }
      }
      setIsLoading(false)
    }
    process()
  }, [])

  return {
    isFirstLaunch,
    isLoading,
    complete,
  }
}
