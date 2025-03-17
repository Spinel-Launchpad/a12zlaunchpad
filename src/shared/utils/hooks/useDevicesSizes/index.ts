import { useEffect, useState } from "react"

export const useDevicesSizes = () => {
  const [isLaptop, setIsLaptop] = useState(true)

  useEffect(() => {
    setIsLaptop(window.innerWidth >= 1024)
    const updateWindowDimensions = () => {
      setIsLaptop(window.innerWidth >= 1024)
    }

    window.addEventListener("resize", updateWindowDimensions)
    return () => {
      window.removeEventListener("resize", updateWindowDimensions)
    }
  }, [])

  return {
    isLaptop,
  }
}
