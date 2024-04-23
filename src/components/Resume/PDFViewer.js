import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from "../../Assets/../Assets/PoojaGargResume.pdf";

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document
        file={pdf}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber}  />
        {numPages && (
          <Page pageNumber={pageNumber + 1} />
        )}
      </Document>
      
    </div>
  );
};

export default PDFViewer;
