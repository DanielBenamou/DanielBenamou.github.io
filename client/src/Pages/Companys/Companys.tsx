import React, { useEffect, useState } from 'react'
import CompanysTypeModel from '../../model/CompanyTypeModel'
import customerService from '../../Util/CustomerService';
import "./Companys.css"



function Companys() {
  const [company, setCompany] = useState<CompanysTypeModel[]>([]);

  useEffect(() => {
    customerService.getAllCompanys().then(response => {
      setCompany(response)
      console.log(response)
    })
      .catch(err => { console.log(err.messagae) })
  }, [])

  return (
    <div >
      <table className='companysTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>COMPANY</th>
          </tr>
        </thead>

        <tbody>
          {company.map((item) => <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.Company}</td>
          </tr>)}
        </tbody>
      </table>

    </div>
  )
}

export default Companys