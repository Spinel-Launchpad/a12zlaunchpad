import { useState } from "react"

export const useHandle = () => {
  const [isActive, setIsActive] = useState(false)

  const handleToggleActive = () => {
    setIsActive(!isActive)
  }

  return {
    handleToggleActive,
    isActive,
  }
}
