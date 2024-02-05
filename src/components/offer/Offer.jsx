import axios from 'axios';
import { useEffect, useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useNavigate } from 'react-router-dom';
import './toggle1.css'

function Offer() {

    const [offer, setOffer] = useState({
        offerid: '',
        offername: '',
        discount: '',
        flat_discount: '',
        upto_discount: '',
        validfrom: '',
        validto: '',
        terms_and_condition: '',
        status: '',
        subcategory: ''
    })

    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/offer/post', offer)
            .then((result) => {
                console.log(result);
                navigate('/dashboard/offer');
            }).catch((err) => {
                console.log(err);
            })
    }

    const [showoffer, setShowOffer] = useState([])

    const handleShow = () => {
        axios.get('http://localhost:5000/api/offer/get/')
            .then((res) => {
                console.log(res)
                setShowOffer(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        handleShow()
    },[])

    async function activeStatus(offerid) {
        let responce = await axios.put(`http://localhost:5000/api/offer/update?status=active&offerid=${offerid}`)
        console.log(responce);
    }
    async function deactiveStatus(offerid) {
        let responce = await axios.put(`http://localhost:5000/api/offer/update?status=deactive&offerid=${offerid}`)
        console.log(responce)
    }

    return (
        <div style={{ marginLeft: '50px', marginTop: '30px' }}>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="home" title="Home">
                    <div className='d-flex justify-content-center align-item-center mt-3'>
                        <div className='p-3 rounded w-60 border'>
                            <form className='row g-1' onSubmit={handleSubmit}>

                                <div className='d-flex' style={{ gap: '20px' }}>
                                    <div style={{ marginLeft: '80px' }}>
                                        <div className='col-12'>
                                            <label htmlFor="inputId" className='form-label'>
                                                Offer Id
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputId'
                                                placeholder='Enter Offer Id'
                                                onChange={(e) => setOffer({ ...offer, offerid: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputName" className='form-label'>
                                                Offer Name
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputName'
                                                placeholder='Enter Offer Name'
                                                onChange={(e) => setOffer({ ...offer, offername: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputDiscount" className='form-label'>
                                                Offer Discount
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputDiscount'
                                                placeholder='Enter Offer Discount'
                                                onChange={(e) => setOffer({ ...offer, discount: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputDiscount" className='form-label'>
                                                Flat Discount
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputDiscount'
                                                placeholder='Enter Offer Flat Discount'
                                                onChange={(e) => setOffer({ ...offer, flat_discount: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputDiscount" className='form-label'>
                                                Upto Discount
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputDiscount'
                                                placeholder='Enter Offer Upto Discount'
                                                onChange={(e) => setOffer({ ...offer, upto_discount: e.target.value })} />
                                        </div>
                                    </div>

                                    <div>
                                        <div className='col-12'>
                                            <label htmlFor="inputvalidfrom" className='form-label'>
                                                Valid From
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputvalidfrom'
                                                placeholder='Enter Valid From'
                                                onChange={(e) => setOffer({ ...offer, validfrom: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputvalidto" className='form-label'>
                                                Valid To
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputvalidto'
                                                placeholder='Enter Valid To'
                                                onChange={(e) => setOffer({ ...offer, validto: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputvterms" className='form-label'>
                                                Terms and Condition
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputterms'
                                                placeholder='Enter Terms and condition'
                                                onChange={(e) => setOffer({ ...offer, terms_and_condition: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputStatus" className='form-label'>
                                                Status
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputStatus'
                                                placeholder='Enter Status'
                                                onChange={(e) => setOffer({ ...offer, status: e.target.value })} />
                                        </div>

                                        <div className='col-12'>
                                            <label htmlFor="inputSubcategory" className='form-label'>
                                                SubCategory
                                            </label>
                                            <input type="text"
                                                className='form-control rounded-0'
                                                id='inputSubcategory'
                                                placeholder='Enter Subcategory'
                                                onChange={(e) => setOffer({ ...offer, subcategory: e.target.value })} />
                                        </div>

                                    </div>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='btn btn-primary w-100'>
                                        Add User
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Tab >

                <Tab eventKey="profile" title="Profile">
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th scope="col">Offer Id</th>
                                    <th scope="col">Offer Name</th>
                                    <th scope="col">Offer Discount</th>
                                    <th scope="col">Flat Discount</th>
                                    <th scope="col">Up To Discount</th>
                                    <th scope="col">Valid From</th>
                                    <th scope="col">Valid To</th>
                                    <th scope="col">Terms and Conditions</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">SubCategory</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    showoffer.map((item) =>
                                        <tr>
                                            <td>{item.offerid}</td>
                                            <td>{item.offername}</td>
                                            <td>{item.discount}</td>
                                            <td>{item.flat_discount}</td>
                                            <td>{item.upto_discount}</td>
                                            <td>{item.validfrom}</td>
                                            <td>{item.validto}</td>
                                            <td>{item.terms_and_condition}</td>
                                            <td>
                                                {
                                                    item.status === "deactive" ? (
                                                        <label class="switch">
                                                            <input type="checkbox" onChange={(e) => activeStatus(item.offerid, e)} />
                                                            <span class="slider round"></span> </label>
                                                    )
                                                        :
                                                        (
                                                            <label class="switch">
                                                                <input type="checkbox" defaultChecked onChange={(e) => deactiveStatus(item.offerid, e)} />
                                                                <span class="slider round"></span></label>
                                                        )
                                                }
                                            </td>
                                            <td>{item.subcategory}</td>
                                        </tr>

                                    )}
                            </tbody>
                        </table>
                    </div>
                </Tab>

            </Tabs >
        </div >
    );
}

export default Offer