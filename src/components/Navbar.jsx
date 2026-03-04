import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import Collapse from "bootstrap/js/dist/collapse"
import "../styles/navbar.css"

function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [lastScroll, setLastScroll] = useState(0)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false) // <-- NEW: track navbar toggler

  // ==============================
  // Hide / Show on Scroll
  // ==============================
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY

      if (current < 80) {
        setHidden(false)
      } else if (current > lastScroll) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      setLastScroll(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScroll])

  // ==============================
  // Close Navbar (Mobile)
  // ==============================
  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNavFloating")

    if (navbar) {
      const bsCollapse =
        Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false })
      bsCollapse.hide()
    }

    // Close dropdown
    setDropdownOpen(false)
    setNavbarOpen(false) // <-- reset toggle state
  }

  // ==============================
  // Handle Toggler Click
  // ==============================
  const handleTogglerClick = () => {
    const navbar = document.getElementById("navbarNavFloating")
    if (!navbar) return

    const bsCollapse =
      Collapse.getInstance(navbar) || new Collapse(navbar, { toggle: false })

    if (navbarOpen) {
      // Navbar is open, close it
      bsCollapse.hide()
      setNavbarOpen(false)
    } else {
      // Navbar is closed, open it
      bsCollapse.show()
      setNavbarOpen(true)
    }
  }

  return (
    <div className={`floating-navbar-wrapper ${hidden ? "nav-hidden" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-light floating-navbar">
        <div className="container-fluid px-3">

          {/* Logo */}
          <NavLink
            className="navbar-brand d-flex align-items-center"
            to="/"
            onClick={closeNavbar}
          >
            <img
              src="/images/logo.png"
              height="36"
              className="me-2 rounded-circle"
              alt="AKUMS Logo"
              loading="lazy"
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
            onClick={handleTogglerClick} // <-- NEW: toggle open/close manually
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapse Area */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavFloating"
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
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  MAGAZINE
                </span>

                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
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
                      to="/magazineissue"
                      className="dropdown-item"
                      onClick={closeNavbar}
                    >
                      ISSUES
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
                      to="magazinesubmission"
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