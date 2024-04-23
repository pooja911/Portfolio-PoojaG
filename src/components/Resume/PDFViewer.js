import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../../Assets/../Assets/PoojaGargResume.pdf";

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const containerRef = useRef(null);
  const pageWidthRef = useRef(null);
  const pageHeightRef = useRef(null);

  useEffect(() => {
    if (pageWidthRef.current && pageHeightRef.current && containerRef.current) {
      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;
      const pageWidth = pageWidthRef.current.offsetWidth;
      const pageHeight = pageHeightRef.current.offsetHeight;
      const containerAspectRatio = containerWidth / containerHeight;
      const pageAspectRatio = pageWidth / pageHeight;
      let scale = 1;

      if (containerAspectRatio < pageAspectRatio) {
        scale = containerWidth / pageWidth;
      } else {
        scale = containerHeight / pageHeight;
      }

      pageWidthRef.current.style.transform = `scale(${scale})`;
    }
  }, [pageNumber]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div ref={containerRef} style={{ textAlign: 'center', width: '100%', height: '100vh' }}>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div key={index} style={{ display: 'inline-block', height: '100%', verticalAlign: 'middle' }}>
            <Page
              pageNumber={index + 1}
              width={pageWidthRef}
              height={pageHeightRef}
              loading=""
            />
          </div>
        ))}
      </Document>
      
    </div>
  );
};

export default PDFViewer;
