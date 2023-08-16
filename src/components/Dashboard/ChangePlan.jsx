import { Fragment, useEffect } from "react"
import Alert from "../Alert/Alert"
import Overlay from "../Overlay/Overlay"
import Title from "./Title"
import { Button, Grid, InputLabel, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import Web3 from "web3"

const ChangePlan = () => {

    const [web3, setWeb3] = useState()
    
    const [plans, setPlans] = useState([
        {
            description: "free",
            cost: 0
        },
        {
            description: "Medium",
            cost: 0.000001
        },
        {
            description: "Premium",
            cost: 0.000002
        }
    ])
    const [selectedPlan, setSelectedPlan] = useState(plans[0])
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({
    active:false,
    title: "",
    content: ""
}) 

useEffect(()=> {
if (typeof window.ethereum !== 'undefined') {
    console.log('metamask esta instalado')
    setWeb3(new Web3(window.ethereum))    
}else{
    console.log("metamask no se encuentra instalado")
    setWeb3(false)
}
}, [])

const connectWallet = async()=>{
    if(web3) {
        try {
            const cuentas = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const cuenta = cuentas[0];
            setAlert({
                active:true,
                title: "Mensaje",
                content: `Cuenta conectada: ${cuenta}`
            })
            console.log(`Cuenta conectada: ${cuenta}`)
        } catch (error) {
            console.error("Usuario rechazó la conexión:", error);
        }
    }else {
        setAlert({
            active:true,
            title: "Error",
            content: "Metamask no se encuentra instalado"
        })
    }
}

const sendTransaction = async() =>{
    if (web3) {
        setLoading(true)
        const cuentas = await web3.eth.getAccounts();
        if (!cuentas || cuentas.length === 0) {
            console.log("No hay cuentas disponibles")
            setLoading(false)
            return
        }
        const transactionParameters = {
            from: cuentas[0], // 
            to: '0x7cd5feF4E4A548A537073047EBBa51B88e0D9194', //  reemplazar esto con la dirección destino
            gasPrice: web3.utils.toHex(web3.utils.toWei('0.000001', 'gwei')), 
            gasLimit: web3.utils.toHex(21000), 
            value: web3.utils.toHex(web3.utils.toWei(selectedPlan.cost.toString(), 'ether')),
            chainId: 80001
        };
        console.log(transactionParameters)
        try {
          await web3.eth.sendTransaction(transactionParameters)
        .on('transactionHash', function(hash) {
            setLoading(false)
            console.log(`Hash de la transacción: ${hash}`)
            setAlert({
                active:true,
                title: "Mensaje",
                content: `Transaccion realizada correctamente.
                Hash de la transacción: ${hash}`
            })
        })
        .on('error', function(error) {
            setLoading(false)
            setAlert({
            active:true,
            title: "error",
            content: error.data.message
        })
            console.log("Error al enviar la transacción:", error);
        });  
        } catch (error) {
            setLoading(false)
           setAlert({
            active:true,
            title: "error",
            content: error.data.message
        })
        }
        
    }else{
     setAlert({
        active:true,
        title: "Error",
        content: "Metamask no se encuentra instalado"
    })   
    }
    
} 

const handleChange = (e)=> {
    const plan = plans.find((p)=>p.cost ===e.target.value)
    setSelectedPlan(plan)
}
    return (
        <Fragment>
            {alert.active && (
                <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
            )}
            {loading && (
             <Overlay>
             </Overlay>
             )}
            <Title> Cambiar Plan </Title>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <InputLabel id="demo-simple-select-helper-label">Plans</InputLabel>

              <Select
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={selectedPlan.cost}
               label="Plans"
               onChange={handleChange}
              >
                {plans.map((plan, idx)=>{
                    return(
                        <MenuItem key={idx} value={plan.cost}>Plan {plan.description}, {plan.cost}$ </MenuItem>
                    )
                })}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button onClick={connectWallet} variant="contained" color="primary">
                Conectar Monedero
              </Button>
              
            </Grid>
            <Grid item xs={12}>

            <Button onClick={sendTransaction} variant="contained" color="primary">
                Realizar transacción
              </Button>
              </Grid>

          </Grid>
        </Fragment>
    )
}


export default ChangePlan