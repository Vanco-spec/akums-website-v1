import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import Collapse from "bootstrap/js/dist/collapse"
import "../styles/navbar.css"

function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)

  const lastScrollRef = useRef(0)
  const navbarCollapseRef = useRef(null)

  // ==============================
  // Hide / Show on Scroll
  // ==============================
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current < 80) {
        setHidden(false)
      } else if (current > lastScrollRef.current) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      lastScrollRef.current = current
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ==============================
  // Close Navbar (Mobile)
  // ==============================
  const closeNavbar = () => {
    const navbar = navbarCollapseRef.current

    if (navbar) {
      const bsCollapse =
        Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false })
      bsCollapse.hide()
    }

    setDropdownOpen(false)
    setNavbarOpen(false)
  }

  // ==============================
  // Handle Toggler Click
  // ==============================
  const handleTogglerClick = () => {
    const navbar = navbarCollapseRef.current
    if (!navbar) return

    const bsCollapse =
      Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false })

    if (navbarOpen) {
      bsCollapse.hide()
      setNavbarOpen(false)
    } else {
      bsCollapse.show()
      setNavbarOpen(true)
    }
  }

  // ==============================
  // Handle Dropdown Toggle
  // On hover-capable devices (desktop), hover handles open/close.
  // On touch devices (mobile), click toggles.
  // ==============================
  const handleDropdownClick = () => {
    if (window.matchMedia("(hover: none)").matches) {
      setDropdownOpen(prev => !prev)
    }
  }

  return (
    <div className={`floating-navbar-wrapper ${hidden ? "nav-hidden" : ""}`}>
      <nav
        className="navbar navbar-expand-lg floating-navbar"
        data-bs-theme="light"
      >
        <div className="container-fluid px-3">

          {/* Logo */}
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={closeNavbar}
          >
            <img
              src="/images/logo.png"
              height="51"
              width="51"
              className="me-2 rounded-circle"
              alt="AKUMS Logo"
            />
            <span className="navbar-text text-light">
              ASSOCIATION OF KENYATTA UNIVERSITY MEDICINE STUDENTS
            </span>
          </NavLink>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarNavFloating"
            aria-expanded={navbarOpen ? "true" : "false"}
            aria-label="Toggle navigation"
            onClick={handleTogglerClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse Area */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavFloating"
            ref={navbarCollapseRef}
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  HOME
                </NavLink>
              </li>

              {/* Magazine Dropdown */}
              <li
                className="nav-item dropdown"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={handleDropdownClick}
                  aria-expanded={dropdownOpen}
                  aria-haspopup="true"
                >
                  MAGAZINE
                </button>

                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
                 <li>
                    <NavLink
                      to="/magazineissue"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      ISSUES
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/magazineabout"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      ABOUT
                    </NavLink>
                  </li>
                  
                  <li>
                    <NavLink
                      to="/magazineleaders"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      TEAM
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/magazinesubmission"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      SUBMISSION
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/alumni"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  ALUMNI
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  ABOUT US
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar