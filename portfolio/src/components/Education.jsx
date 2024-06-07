export default function Education({ textColor }) {
    return (
        <>
            <h3 className="text-2xl font-mono text-primary ml-20 pb-3 pt-12 font-bold">Education</h3>
            <div className="pb-4">
                <table className={"font-mono  w-4/6 mx-auto " + textColor}>
                    <thead className="">
                        <th ></th>
                        <th ></th>
                        <th ></th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="">2019</td>
                            <td className="">SSC Board</td>
                            <td className="">(Percentage 89.4)</td>
                        </tr>
                        <tr>
                            <td className="">2021</td>
                            <td className="">HSC Board</td>
                            <td className="">(Percentage 93.3)</td>
                        </tr>
                        <tr>
                            <td className="">2021-2025</td>
                            <td className="">Btech CSE</td>
                            <td className="">(CGPA 7.5)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}