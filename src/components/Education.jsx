function Education(){
    const educationData = [
        {
            degree: "Bachelor of Computer Applications (BCA)",
            duration: "2025-2028",
            institution: "Osmania University"
        },
        {
            degree: "Maths, Economics and Commerce (MEC)",
            duration: "2023-2025",
            institution: "St Joseph Junior College"
        },
        {
            degree: "Secondary School Certificate",
            duration: "Complected 2023",
            institution: "Royal Mission High School"
        }
    ];

    return <div className="education-section">
        <h1 className="education-title">Education</h1>
        <table className="education-table">
            <thead>
                <tr>
                    <th>Degree</th>
                    <th>Year</th>
                    <th>Institution</th>
                </tr>
            </thead>
            <tbody>
                {educationData.map((item, index) => (
                    <tr key={index}>
                        <td>{item.degree}</td>
                        <td>{item.duration}</td>
                        <td>{item.institution}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
}
export default Education