import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `pdfjs-dist/build/pdf.worker.min.js`;

//PDFjs worker from an external cdn
const url = "https://www.greenwichschools.org/uploaded/north_street/PDF_doc_/Back_To_School_Documents/NSS_HANDBOOK.pdf";

interface PdfProps {
    file: string;
}

const Pdf = (props: PdfProps) => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <>
            <div className="main">
                <Document file={props.file} onLoadSuccess={onDocumentLoadSuccess}>
                    {Array.apply(null, Array(numPages))
                        .map((x, i) => i + 1)
                        .map((page) => (
                            <Page
                                key={page.toExponential()}
                                pageNumber={page}
                                renderAnnotationLayer={true}
                                renderTextLayer={false}
                                // width={800}
                            />
                        ))}
                </Document>
            </div>
        </>
    );
};

export default Pdf;
