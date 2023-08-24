import { Fragment, useEffect } from "react";
import Alert from "../Alert/Alert";
import Overlay from "../Overlay/Overlay";
import Title from "./Title";
import { Button, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { ethers } from "ethers";
import API_AXIOS from "../../../settings/AxiosInstance";
import endpointList from "../../../settings/endpoints";

const ChangePlan = () => {
  const [plans, setPlans] = useState([
    {
      desc_plan: "free",
      cost_plan: 0
    },
    {
      desc_plan: "Medium",
      cost_plan: 0.05
    },
    {
      desc_plan: "Premium",
      cost_plan: 0.1
    }
  ]);
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    active: false,
    title: "",
    content: ""
  });

  useEffect(() => {
    (
      async () => {
        try {
          const p = await API_AXIOS.get(endpointList.get_plans);
          setPlans(p.data.data);
          console.log(p);
        } catch (error) {
          console.log(error);
        }
      }
    )();
  }, []);

  const connectWallet = async () => {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      setAlert({
        active: true,
        title: "Mensaje",
        content: "Cuenta conectada"
      });
    } catch (error) {
      console.error("Usuario rechazó la conexión:", error);
    }
  };

  const transferFunds = async () => {
    try {
      const mumbaiRPC = "https://rpc-mumbai.maticvigil.com";
      const provider = new ethers.providers.JsonRpcProvider(mumbaiRPC);
      const signer = new ethers.Wallet(window.ethereum.selectedAddress, provider);
      const toAddress = "0x7cd5feF4E4A548A537073047EBBa51B88e0D9194";
      const amountInEther = selectedPlan.cost_plan.toString();

      ethers.utils.getAddress(toAddress);
      const transaction = await signer.sendTransaction({
        to: toAddress,
        value: ethers.utils.parseEther(amountInEther)
      });

      await transaction.wait();
      setAlert({
        active: true,
        title: "Mensaje",
        content: `Transacción exitosa con hash: ${transaction.hash}`
      });
    } catch (error) {
      setAlert({
        active: true,
        title: "Error",
        content: `Error al realizar la transacción: ${error.message}`
      });
    }
  };

  const handleChange = (e) => {
    const plan = plans.find((p) => p.cost_plan === e.target.value);
    setSelectedPlan(plan);
  };

  return (
    <Fragment>
      {alert.active && (
        <Alert open={alert.active} setOpen={setAlert} title={alert.title} content={alert.content}></Alert>
      )}
      {loading && <Overlay />}
      <Title> Cambiar Plan </Title>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <InputLabel id="demo-simple-select-helper-label">Plans</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectedPlan.cost_plan}
            label="Plans"
            onChange={handleChange}
          >
            {plans.map((plan, idx) => {
              return (
                <MenuItem key={idx} value={plan.cost_plan}>
                  Plan {plan.desc_plan}, {plan.cost_plan}$
                </MenuItem>
              );
            })}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={connectWallet} variant="contained" color="primary">
            Conectar Monedero
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={transferFunds} variant="contained" color="primary">
            Realizar transacción
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ChangePlan;