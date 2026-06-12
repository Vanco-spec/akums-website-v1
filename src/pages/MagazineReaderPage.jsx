import MagazineReader from "../components/MagazineReader";
import magazinePdf from "../assets/pdfs/AKUMS MAGAZINE ISSUE 1.pdf";

const magazine = {
  title: "Volume 1 Issue 1",
  pdf: magazinePdf,
  pages: [
    // keep the same minimal page set as the preview — real pages can be expanded later
    { type: "hard", title: "AKUMS Magazine", subtitle: "Volume 1 Issue 1", body: ["Welcome to AKUMS Magazine."] },
    { section: "Feature", title: "When Hospitals Go Silent", body: ["Feature content goes here."] },
    { section: "Insight", title: "Healing Beyond Diagnosis", body: ["Insight content goes here."] },
    { type: "hard", title: "Back Cover", subtitle: "AKUMS Magazine", body: ["Thank you for reading."] },
  ],
};

export default function MagazineReaderPage() {
  return <MagazineReader magazine={magazine} />;
}
