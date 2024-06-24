export default function Education({ textColor }) {
    return (
        <div className="text-center w-full  md:w-8/12 mx-auto">
            <h3 className="text-3xl font-mono text-primary  pb-3 pt-12 font-bold underline underline-offset-6">Education</h3>
            <div className="pb-4">
               

                <div className={"grid grid-cols-1 md:grid-cols-2 font-mono py-2  "+textColor}>
                    <p className="w-full ">2019 SSC Board</p>
                    <p className="w-full text-sm">(Percentage 89.4)</p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 font-mono py-2  "+textColor}>
                    <p className="w-full ">2021 HSC Board</p>
                    <p className="w-full text-sm">(Percentage 93.3)</p>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 font-mono py-2  "+textColor}>
                    <p className="w-full ">2021-25 Btech CSE</p>
                    <p className="w-full text-sm">(CGPA 7.41)</p>
                </div>

            </div>
        </div>
    )
}