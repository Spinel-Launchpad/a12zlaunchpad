import { useState } from "react"
import { useDevicesSizes } from "../../../../../shared/utils/hooks/useDevicesSizes"

export const useHandle = () => {
  const { isLaptop } = useDevicesSizes()
  const [isActive, setIsActive] = useState(false)

  const handleToggleActive = () => {
    setIsActive(!isActive)
  }

  return {
    handleToggleActive,
    isActive,
    isLaptop,
  }
}
