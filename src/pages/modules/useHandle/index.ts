import { useEffect } from "react"
import { HomeProps } from "../types"
import { useVariables } from "../useVariables"

export const useHandle = (): HomeProps => {
  const { isLoading, setIsLoading } = useVariables()

  useEffect(() => {
    if (document.readyState !== "loading") {
      setIsLoading(false)
    }
  }, [setIsLoading])

  return {
    isLoading,
  }
}
