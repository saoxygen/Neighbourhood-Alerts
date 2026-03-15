import axios from "axios";
import type {ICreateVehicleForm} from '../interface/ICreateVehicleForm'

export const submitForm = async (data:ICreateVehicleForm) => {
  const response = await axios.post("http://localhost:3000/vehicle-form", data);
  console.log(response.data);
  return response.data.json
};

