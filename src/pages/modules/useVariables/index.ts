import { useState } from "react"

export const useVariables = () => {
  const [isLoading, setIsLoading] = useState(true)

  return {
    isLoading,
    setIsLoading,
  }
}
