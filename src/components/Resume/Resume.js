import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/PoojaGargResume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import PDFViewer from "./PDFViewer";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {

  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleDownload = () => {
    const pdfUrl = pdf;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "PoojaGargResume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section" style={{ paddingTop: "6em" }}>
      <Row style={{ justifyContent: "left", position: "relative", paddingTop:'2em',paddingLeft:'1em'}}>
          <Button
            variant="primary"
            style={{ maxWidth: "250px" ,backgroundColor:'black'}}
            onClick={handleDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume" style={{paddingTop:'1em' }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber}  />
            {numPages && <Page pageNumber={pageNumber + 1} />}
          </Document>
          {/* <PDFViewer/> */}
        </Row>
<break />
        <Row style={{ justifyContent: "center", paddingTop:'2em',paddingBottom:'1em'}}>
          <Button
            variant="primary"
            style={{ maxWidth: "250px",backgroundColor:'black' }}
            onClick={handleDownload}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
