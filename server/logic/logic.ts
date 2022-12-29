import dal from "../utils/dal";
import Companys from "../model/Companys";

async function getAllCompanysNames():Promise<Companys[]>{
    const sql = "SELECT * FROM bnch.Companys;"
    const company = await dal.execute(sql);
    return company;
}

export default{
    getAllCompanysNames
}