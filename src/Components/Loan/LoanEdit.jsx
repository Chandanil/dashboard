import "../Form/Form.scss";
import React, { useEffect,useState } from "react";
import axios from 'axios'
import Swal from 'sweetalert2';
import { useNavigate, Link, useParams } from 'react-router-dom';
import Select from 'react-select';


export const LoanEdit = (props) => {
    const { id } = useParams()

    const navigate = useNavigate()
    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [company_name,setCompanyName] = useState("")
    const [company_address,setCompanyAddress] = useState("")
    const [loan_type,setLoanType] = useState("")
    const [loan_amount,setLoanAmount] = useState("")
    const [image, setImage] = useState()
    const [loan_duration, setLoanDuration] = useState()
    const [loan_purpose, setLoanPurpose] = useState()
    const [installation_type, setInstallationType] = useState("")
    const [recommend_to, setRecommendTo] = useState("")
    const [due_date, setDueDate] = useState("")
    const [issue_date, setIssueDate] = useState("")
    
    const changeHandler = (event) => {
            setImage(event.target.files[0]);
        };

    useEffect(()=>{
        fetchloans();
       
      },[])

        
     
    const fetchloans = async()=>{
        await axios.get(window.baseurl+`/api/loan/${id}`).then(({data})=>{
            const { name, address, phone,email,company_name, company_address,loan_type,loan_amount,loan_duration,loan_purpose,installation_type,recommend_to,image,issue_date,due_date } = data.loan
          alert(data)
            setName(name)
            setAddress(address)
            setPhone(phone)
            setEmail(email)
            setCompanyName(company_name)
            setCompanyAddress(company_address)
            setLoanType(loan_type)
            setLoanAmount(loan_amount)
            setImage(image)
            setLoanDuration(loan_duration)
            setLoanPurpose(loan_purpose)
            setInstallationType(installation_type)
            setRecommendTo(recommend_to)
            setDueDate(due_date)
            setIssueDate(issue_date)
            
        })
    }
    
  
    const updateLoan = async(e)=>{
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('_method', 'PATCH');
        formdata.append('name',name)
        formdata.append('address',address)
        formdata.append('phone',phone)
        formdata.append('email',email)
        formdata.append('company_name',company_name)
        formdata.append('loan_type',loan_type)
        formdata.append('loan_amount',loan_amount)
        formdata.append('loan_duration',loan_duration)
        formdata.append('image',image)
        formdata.append('loan_purpose',loan_purpose)
        formdata.append('installation_type',installation_type)
        formdata.append('recommend_to',recommend_to)

        await axios.post(`/api/loan/${id}`,formdata).then(({data})=>{
            Swal.fire({
              icon:"success",
              text:data.message
            })
            navigate('/loan-list')
          }).catch(({response})=>{
            console.log(response);
          
            
          })
    }

    var installationOptions = [
      { value: '0', label: '--Select Installation Type--' },
      { value: '1', label: 'Daily'},
      { value: '2', label: 'Weekely' },
      { value: '3', label: 'Monthly' },
      { value: '4', label: 'Yearly' },
    ];

    const handleInstallationTypeSelect = e => {
      
      setInstallationType(e.value);
    };
  
    
    return (
        <>
        {/* <div>
            <select>
              {countriesList}
            </select>
          </div> */}
          <div className="same-gap">
            <div className="loan-detail-form cl-form">
              <h4 className="title">Edit Loan Cus</h4>
              <form onSubmit={updateLoan}>
                <div className="loan-form">
                  <div className="section">
                    <small>Personal Information</small>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                          
                            value={name}
                            onChange = {(event)=>{
                              setName(event.target.value)
                            }}
                            placeholder="Full Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            value={address}
                            onChange = {(event)=>{
                              setAddress(event.target.value)
                            }}
                            
                            placeholder="Addresse"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                           
                            value={phone}
                            onChange = {(event)=>{
                              setPhone(event.target.value)
                            }}
                            placeholder="Phone No"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            value={email}
                            onChange = {(event)=>{
                              setEmail(event.target.value)
                            }}
                            placeholder="Email Id"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            
                            value={company_name}
                            onChange = {(event)=>{
                              setCompanyName(event.target.value)
                            }}
                            placeholder="Company Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                           
                            value={company_address}
                            onChange = {(event)=>{
                              setCompanyAddress(event.target.value)
                            }}
                          
                            placeholder="Company Address"
                            className="form-control"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section">
                    <small>Loan Details</small>
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <select className="form-control" name="loan_type" 
                           
                           value={loan_type}
                           onChange = {(event)=>{
                              setLoanType(event.target.value)
                            }}>
                            <option value="0">Loan Type</option>
                            <option value="1">Home Loan </option>
                            <option value="2">Education Loan</option>
                            <option value="3">Vehicle Loan</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                           
                            value={loan_amount}
                            onChange = {(event)=>{
                              setLoanAmount(event.target.value)
                            }}
                            placeholder="Loan Amount"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            
                            value={loan_duration}
                            onChange = {(event)=>{
                              setLoanDuration(event.target.value)
                            }}
                            placeholder="Loan Duration"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            
                            value={loan_purpose}
                            onChange = {(event)=>{
                              setLoanPurpose(event.target.value)
                            }}
                            placeholder="Loan Purpose"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <select class="form-control"
                          
                           options={installationOptions}
                          //  defaultValue={installationOptions[installation_type]}
                          value={installation_type}
                           onChange={handleInstallationTypeSelect}
                           
                            // value={installationOptions.filter(function(option) {
                            //   return option.value === installation_type;
                            // })}
                           >
                            <option value="0" >--Select Installment Type--</option>
                            <option value="1" >Daily</option>
                            <option value="2" > Weekely</option>
                            <option value="3" >Monthly</option>
                            <option value="3" >Yearly</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <input
                            type="text"
                            value={recommend_to}
                           onChange = {(event)=>{
                               setRecommendTo(event.target.value)
                             }}
                            placeholder="Recommend to"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                        <label>Start date</label>
                        <input
                        class="form-control"
                          type="date"
                          
                          value={issue_date}
                          onChange={(event)=>{
                            setIssueDate(event.target.value)
                          }}
                        />
                      </div>
                    </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>End date</label>
                          <input
                          class="form-control"
                            type="date"
                            
                            value={due_date}
                            onChange={(event)=>{
                              setDueDate(event.target.value)
                            }}
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="file"
                            name="image"
                            onChange={changeHandler}
                            placeholder="Company Name"
                            className="form-control"
                          />
                        </div>
                      </div>
                      <img  height="100" src={window.baseurl+`/storage/`+image} />
                      <div className="btn-group text-center d-block">
                        <button className="cl-btn">Save Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}