import { useEffect, useState } from 'react'
//import * as XLSX from 'xlsx'
import Alert from "../Alert/Alert";
import API_AXIOS from '../../../settings/AxiosInstance';
import endpointList from '../../../settings/endpoints';
import Overlay from '../Overlay/Overlay';

const Test = () => {
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
    active:false,
    title: "",
    content: ""
}) 
    const [email, setMail] = useState('')
    const handleClick =  async(e) => {
        setLoading(true)
        try {
            const validateEmail = await API_AXIOS.post(endpointList.validate_email, {email})
            const validateDomain = await API_AXIOS.post(endpointList.validate_domain, {email})
            setLoading(false)
            setAlert({
                active: true,
                title: "Resultado",
                content: `${validateEmail.data.message} y ${validateDomain.data.message}`
            })
        } catch (error) {
            setLoading(false)
            setAlert({
                active: true,
                title: "Resultado",
                content:error.response.data.message
            })
        }
    }
    return (
        <div>
            {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
            {loading && (
             <Overlay>
             </Overlay>
             )}
            <h1> Introduzca el correo que desee validar </h1>
            <input type='email' onChange={(e)=>{setMail(e.target.value)}}/>
            <button onClick={handleClick}> Evaluar email </button>
            
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