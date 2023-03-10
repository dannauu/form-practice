import React from 'react'

const File = () => {
    const handleDownloadPdf = async () => {
        window.print();
    }
    function handleBtnClick(e) {
        const target = e.target
        target.classList.add('choice')
    }

    return (
        <div className='flex flex-col text-sm'>
            <label className='font-medium text-3xl text-center underline'>Tax Payer Information Sheet 2023 (Tax Year 2022)</label>
            <div className='text-center flex justify-center py-3'>
                <p className='px-2 text-base font-semibold italic bg-lime-500'>TAX PAYER INFORMATION (Please click one):</p>
                <button className='px-2' onClick={(e) => { handleBtnClick(e) }}>Returning Client</button>
                <button className='px-2 ml-2' onClick={(e) => { handleBtnClick(e) }} id='new-client'>New Client</button>
            </div>
            <div className='flex justify-center p-2'>
                <div className='flex flex-col w-full pr-5'>
                    <div className='flex flex-row'>
                        <label className='font-medium basis-1/2'>YOUR NAME:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>SOCIAL SECURITY #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>BIRTHDATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>PRIMARY PHONE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>SECONDARY PHONE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>OCCUPATION:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>DRIVER'S LICENSE #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>ISSUE DATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>EXPIRATION DATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>STATE DRIVER'S LICENSE ISSUED:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>DRIVER'S LICENSE #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>EMAIL ADDRESS:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>SPOUSE'S NAME:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>SOCIAL SECURITY #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>BIRTHDATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>PRIMARY PHONE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>SECONDARY PHONE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>OCCUPATION:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>DRIVER'S LICENSE #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>ISSUE DATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>EXPIRATION DATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>STATE DRIVER'S LICENSE ISSUED:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>DRIVER'S LICENSE #:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex'>
                        <label className='font-medium basis-1/2'>EMAIL ADDRESS:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                </div>
            </div>
            <div className='flex justify-evenly p-2'>
                <div className='w-full pr-5 flex flex-col'>
                    <label className='font-medium text-center underline text-base'>ADDRESS:</label>
                    <div className='flex justify-between'>
                        <label className=' font-medium basis-1/2'>STREET:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex justify-between'>
                        <label className=' font-medium basis-1/2'>CITY:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex justify-between'>
                        <label className=' font-medium basis-1/2'>STATE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                    <div className='flex justify-between'>
                        <label className=' font-medium basis-1/2'>ZIP CODE:</label>
                        <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                    </div>
                </div>
                <div className='w-full text-center'>
                    <label className='font-medium text-center underline pb-3 text-base'>STATUS (CLICK YOUR STATUS BELOW):</label>
                    <div className='' id='test'>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>SINGLE</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>MARRIED FILING JOINT</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>MARRIED FILING SEPARATE</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>HEAD OF HOUSEHOLD</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>SPOUSE DECEASED</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>DIVORCED</button>
                    </div>
                    <div className='flex p-1'>
                        <label className='font-medium text-center text-base px-2 bg-lime-500'>IF DECEASED or DIVORCED after 1/1/2022 INPUT DATE HERE:</label>
                        <span contentEditable="true" className='border-b-2 border-black ml-2 w-1/5'></span>
                    </div>
                </div>
            </div>
            <div className='text-center p-2 flex m-auto'>
                <label className=' font-medium text-base underline'>IF HEAD OF HOUSEHOLD NEED 1 OF THE FOLLOWING IN YOUR NAME (CLICK YOUR ANSWER):</label><br></br>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>UTILITY BILL</button>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>PROPERTY TAX RECEIPT</button>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>MORTGAGE STATEMENT</button>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>RENTAL AGREEMENT</button>
            </div>
            <div className='text-center p-2 flex m-auto'>
                <label className=' font-medium text-base underline'>IF DIVORCED, COPY OF DIVORCE DECREE IF CHILDREN ARE BEING CLAIMED (CLICK YOUR ANSWER):</label><br></br>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
            </div>
            <label className='text-center font-medium underline text-base'>DEPENDENT INFORMATION:</label>
            <div className='flex justify-evenly text-center'>
                <div className='flex flex-col w-1/5'>
                    <label className=' font-medium'>NAME:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                </div>
                <div className='flex flex-col w-1/5'>
                    <label className=' font-medium'>SOCIAL SECURITY:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                </div>
                <div className='flex flex-col w-1/5'>
                    <label className=' font-medium'>RELATIONSHIP:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                </div>
                <div className='flex flex-col w-1/5 pb-10'>
                    <label className=' font-medium'>BIRTHDATE:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                    <span contentEditable="true" className='border-b-2 border-black p-1 '></span>
                </div>
                <div className='flex flex-col pb-5'>
                    <label className=' font-medium'>DAYCARE EXP:</label>
                    <div>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    </div>
                    <div>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    </div>
                    <div>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    </div>
                    <div>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                        <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div>
                    <label className=' font-medium  '>PROOF OF RESIDENCY OF DEPENDENT(S) (Example: HEALTH FORM, SCHOOL DOCUMENT): </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                </div>
                <div>
                    <label className=' font-medium  '>IS DEPENDENT A STUDENT: </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                </div>
                <div>
                    <label className=' font-medium  '>IS DEPENDENT A COLLEGE STUDENT: (IF YES, WILL NEED 1098T FORM) </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                </div>
                <div>
                    <label className=' font-medium  '>DID YOU BUY OR SELL ANY VIRTUAL CURRENCY IN 2022: </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                </div>
                <div className='flex justify-center'>
                    <label className=' font-medium  '>DID YOU HAVE AN IRS ISSUES IDENTITY PROTECTION PIN NUMBER: </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    <label className=' font-medium  '>IF YES PLEASE PROVIDE</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 basis-1/5 text-left pl-4'></span>
                </div>
                <div>
                    <label className=' font-medium  '>DO YOU HAVE HEALTH INSURANCE THROUGH THE MARKETPLACE(OBAMA CARE)?: </label>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>YES</button>
                    <button className='px-2 py-1' onClick={(e) => { handleBtnClick(e) }}>NO</button>
                    <label className=' font-medium  '>IF YES PLEASE PROVIDE FORM 1095A (CAN'T FIND YOUR FORM? CALL MARKETPLACE @ 1-800-318-2596 AND ASK FOR A REPLACEMENT) </label>
                </div>
            </div>
            <label className='text-center font-medium pt-5 underline text-base pb-2'>REFUND DIRECT DEPOSIT INFORMATION</label>
            <div className='pr-3'>
                <div className='flex'>
                    <label className='font-medium basis-1/2 text-center'>BANK NAME:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                </div>
                <div className='flex'>
                    <label className='font-medium basis-1/2 text-center'>TYPE OF ACCOUNT (CHECKING OR SAVINGS):</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                </div>
                <div className='flex'>
                    <label className='font-medium basis-1/2 text-center'>ROUTING NUMBER:</label>
                    <span contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                </div>
                <div className='flex'>
                    <label className='font-medium basis-1/2 text-center'>ACCOUNT NUMBER:</label>
                    <span placeholder='xx/xx/xxxx' contentEditable="true" className='border-b-2 border-black p-1 basis-3/4'></span>
                </div>
            </div>
            <div className='flex m-auto'>
                <button onClick={handleDownloadPdf} className='p-3 bg-green-500 m-2' id='printPageButton'>DOWNLOAD/PRINT</button>
            </div>
        </div>
    )
}

export default File