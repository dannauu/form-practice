import React, {useRef} from 'react'
// import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

const FileV2 = () => {
    function download(e) {
        e.preventDefault()
        // var element = document.getElementById('container');
        // var opt = {
        //     margin: 0,
        //     filename: 'tax-payer-info-sheet.pdf',
        //     image: { type: 'jpeg', quality: 0.98 },
        //     html2canvas: { scale: 2, height: 1000 },
        //     jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        // };
        // html2pdf().set(opt).from(element).save('tax-payer-info-sheet.pdf');
        // const input = document.getElementById('container');
        // html2canvas(input)
        //     .then((canvas) => {
        //         const imgData = canvas.toDataURL('image/png');
        //         const pdf = new jsPDF();
        //         pdf.addImage(imgData, 'PNG', 0, 0);
        //         pdf.save("download.pdf");
        //     });
        // ;
        
        };
        const printRef = React.useRef();
        const handleDownloadPdf = async () => {
            const element = printRef.current;
            const canvas = await html2canvas(element);
            const data = canvas.toDataURL('image/png');

            const pdf = new jsPDF();
            const imgProperties = pdf.getImageProperties(data);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight =
                (imgProperties.height * pdfWidth) / imgProperties.width;

            pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('print.pdf');
    }

    function handleBtnClick(e) {
        const test = e.target
        console.log(test)
    }
    return (
        <div id='container' ref={printRef}>
            <h1 className='underline font-semibold text-2xl text-center'>Tax Payer Information Sheet 2023 (Tax Year 2022)</h1>
            <div className='text-center flex justify-center'>
                <p className='pr-2'>TAX PAYER INFORMATION (Please click one):</p>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }} id='returning-client'>Returning Client</button>
                <button className='px-2 py-1 ml-2' onClick={(e) => { handleBtnClick(e) }} id='new-client'>New Client</button>
            </div>
            
            <button type='button' onClick={handleDownloadPdf} data-html2canvas-ignore>Download as PDF</button>
        </div>
    )
}

export default FileV2