import axios from "axios";
import CompanysTypeModel from "../model/CompanyTypeModel";
import appURL from "./Config";

class CustomerService{

    public async getAllCompanys():Promise<CompanysTypeModel[]>{
        const response = await axios.get<CompanysTypeModel[]>(appURL.Companys);
        const companys = response.data;
        return companys;
    }

}
const customerService = new CustomerService()
export default customerService