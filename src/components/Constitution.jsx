import React, { useEffect, useRef, useState } from "react";
import PageFlip from "page-flip";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../styles/constitution.css";

const ConstitutionComponent = () => {
  const modalRef = useRef(null);
  const pagesHolderRef = useRef(null);
  const pageFlipRef = useRef(null);
  const [pagesLoaded, setPagesLoaded] = useState(false);

  useEffect(() => {
    const modalEl = modalRef.current;
    const pagesHolder = pagesHolderRef.current;

    if (!modalEl || !pagesHolder) return;

    modalEl.inert = true;

    async function loadPages() {
      if (pagesLoaded) return;

      try {
        const res = await fetch("../documents/constitution-pages.html");
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);

        const html = await res.text();
        pagesHolder.innerHTML = html;
        setPagesLoaded(true);
      } catch (error) {
        console.error("Failed to load constitution pages:", error);
        pagesHolder.innerHTML =
          '<p class="text-white text-center">Error loading constitution pages.</p>';
      }
    }

    const handleShown = async () => {
      modalEl.inert = false;

      await loadPages();

      const book = pagesHolder.querySelector("#book");
      if (!book) return;

      const pages = pagesHolder.querySelectorAll(".page");
      if (!pages.length) return;

      const modalDialog = modalEl.querySelector(".modal-dialog");
      const modalWidth = modalDialog?.clientWidth || 800;
      const modalHeight = modalDialog?.clientHeight || 600;

      const pageWidth = Math.min(450, modalWidth * 0.45);
      const pageHeight = Math.min(600, modalHeight * 0.85);

      if (!pageFlipRef.current) {
        pageFlipRef.current = new PageFlip(book, {
          width: pageWidth,
          height: pageHeight,
          size: "fixed",
          showCover: true,
          usePortrait: true,
          drawShadow: true,
          mobileScrollSupport: true,
          flippingTime: 700,
          minWidth: 320,
          maxWidth: 1200,
          minHeight: 400,
          maxHeight: 1350,
        });

        pageFlipRef.current.loadFromHTML(pages);
      }
    };

    const handleHidden = () => {
      modalEl.inert = true;

      if (pageFlipRef.current) {
        pageFlipRef.current.destroy();
        pageFlipRef.current = null;
      }

      pagesHolder.innerHTML = '<div id="book"></div>';
      setPagesLoaded(false);
    };

    modalEl.addEventListener("shown.bs.modal", handleShown);
    modalEl.addEventListener("hidden.bs.modal", handleHidden);

    return () => {
      modalEl.removeEventListener("shown.bs.modal", handleShown);
      modalEl.removeEventListener("hidden.bs.modal", handleHidden);
    };
  }, [pagesLoaded]);

  return (
    <>
      {/* ===== CONSTITUTION SECTION ===== */}
      <section className="constitution-section py-5">
        <div className="container">
          <h2 className="section-title text-center mb-4">
            OUR CONSTITUTION
          </h2>

          <p className="lead intro-text text-center mb-5 fw-medium">
            The <strong>AKUMS Constitution</strong> defines our structure,
            principles, and governance.
          </p>

          <div className="row align-items-center justify-content-center">
            {/* Image */}
            <div className="col-md-5 text-center mb-4 mb-md-0">
              <figure className="gazette-figure mx-auto shadow-sm p-2 rounded-4">
                <img
                  src="/images/placeholder.png"
                  alt="AKUMS Constitution"
                  className="img-fluid gazette-image rounded-3"
                />
                <figcaption className="small text-muted mt-2 fst-italic">
                  AKUMS Constitution — Official Publication
                </figcaption>
              </figure>
            </div>

            {/* Card */}
            <div className="col-md-6">
              <div className="constitution-card p-4 rounded-4 shadow-sm">
                <h4 className="fw-bold mb-3 text-primary">
                  GUIDING PRINCIPLES
                </h4>

                <ul className="list-unstyled constitution-list">
                  <li>✓ Membership rights and obligations</li>
                  <li>✓ Election procedures</li>
                  <li>✓ Roles of executive officers</li>
                  <li>✓ Financial management</li>
                  <li>✓ Meetings and quorum</li>
                  <li>✓ Discipline and amendments</li>
                </ul>

                <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mt-4 constitution-buttons">
                  <button
                    id="view-constitution-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#constitutionModal"
                  >
                    View AKUMS Constitution
                  </button>

                  <a
                    href="/documents/AKUMS CONSTITUTION FINAL DRAFT.pdf"
                    download
                    className="btn-outline-gold text-center"
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MODAL ===== */}
      <div
        className="modal fade"
        id="constitutionModal"
        tabIndex="-1"
        ref={modalRef}
      >
        <div className="modal-dialog modal-fullscreen modal-dialog-centered">
          <div className="modal-content bg-dark">
            <div className="modal-header border-0">
              <h5 className="modal-title text-white">
                AKUMS CONSTITUTION
              </h5>

              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
              ></button>
            </div>

            <div className="modal-body">
              <div className="book-stage">
                <div ref={pagesHolderRef}>
                  <div id="book"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstitutionComponent;