import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "../styles/constitution.css";
import constitutionPdf from "../assets/pdfs/AKUMS CONSTITUTION 2026.pdf";

const ConstitutionComponent = () => {
  const modalRef = useRef(null);
  const [showPdf, setShowPdf] = useState(false);

  // Load the PDF into the viewer only while the modal is open
  useEffect(() => {
    const modalEl = modalRef.current;
    if (!modalEl) return;

    const handleShown = () => setShowPdf(true);
    const handleHidden = () => setShowPdf(false);

    modalEl.addEventListener("shown.bs.modal", handleShown);
    modalEl.addEventListener("hidden.bs.modal", handleHidden);

    return () => {
      modalEl.removeEventListener("shown.bs.modal", handleShown);
      modalEl.removeEventListener("hidden.bs.modal", handleHidden);
    };
  }, []);

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
                  src="/images/logo.png"
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
                    href={constitutionPdf}
                    download="AKUMS CONSTITUTION 2026.pdf"
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

      {/* ===== MODAL (Chrome PDF viewer) ===== */}
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

            <div className="modal-body p-0">
              {showPdf && (
                <iframe
                  src={constitutionPdf}
                  title="AKUMS Constitution"
                  className="constitution-pdf-frame"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConstitutionComponent;
