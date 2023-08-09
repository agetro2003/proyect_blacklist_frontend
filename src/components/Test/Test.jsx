import { useEffect, useState } from 'react'
//import * as XLSX from 'xlsx'

const Test = () => {
    const [mail, setMail] = useState('')
    
    return (
        <div>
            <h1> Introduzca el correo que desee validar </h1>
            <input type='email' onChange={(e)=>{setMail(e.target.value)}}/>
            <h2>Resultado de {mail} </h2>
        </div>
    )
    /*
const [data, setData] = useState([])
const handleFileUpload = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {type:'binary'});
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parseData = XLSX.utils.sheet_to_json(sheet);
        setData(parseData)
    }
}
    return(
    <div>
        <input type="file" accept='.xlsx, .xls'
        onChange={handleFileUpload}/>

        {data.length > 0 &&   (
            <table>
                <thead>
                    <tr>
                        {Object.keys(data[0]).map((key)=>(
                            <th key={key}> {key} </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((row, index)=>(
                            <tr key={index}>
                                {Object.values(row).map((value, index) => (
                                    <td key={index}> {value} </td>
                                ))}
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        )

        }
    </div>
)*/
}
export default Test