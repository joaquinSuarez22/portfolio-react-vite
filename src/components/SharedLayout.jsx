"use client"

import Header from "./Header"
import ThemeToggle from "./ThemeToggle"
import ScrollToTop from "./ScrollToTop"

const SharedLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <ThemeToggle />
      <ScrollToTop />
    </>
  )
}

export default SharedLayout

