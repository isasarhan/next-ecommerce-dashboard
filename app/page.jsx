import DashboardBox from '@/components/dashboardbox/dashboardBox';
import './style.css'
import { FaCircleUser } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import { GiStarsStack } from "react-icons/gi";
import { HiDotsHorizontal } from "react-icons/hi";
import { IconButton } from '@mui/material';
import DataTable from '@/components/table/table';

export default function Home() {
  return (
    <section className="dahsboardWrapper">
      <div className='sectionTitle d-flex align-items-center'>
        <h4 className='m-0'>Ecommerce</h4>
        <div className='ms-auto '>
          <nav
            style={{ "--bs-breadcrumb-divider": "'~'" }}
            aria-label="breadcrumb">
            <ul className="breadcrumb p-0 m-0">
              <li className='breadcrumb-item'>Home</li>
              <li className='breadcrumb-item'>Dashboard</li>
              <li className='breadcrumb-item'>Ecommerce</li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-8">
          <div className="dashboardBoxWrapper d-flex align-items-center justify-content-center">
            <DashboardBox title={'Total Users'} nb={'255'} grow={true} icon={<FaCircleUser />} badgeNb={'+ 95%'} badgeTitle={'Last Month'} color={["#118E51", "#3CBE81"]} />
            <DashboardBox title={'Total Users'} nb={'255'} grow={false} icon={<FaCartShopping />} badgeNb={'+ 95%'} badgeTitle={'Last Month'} color={["#CA30E5", "#F178FF"]} />
            <DashboardBox title={'Total Users'} nb={'255'} grow={true} icon={<FaShoppingBag />} badgeNb={'+ 95%'} badgeTitle={'Last Month'} color={["#2675E5", "#4A8ECE"]} />
            <DashboardBox title={'Total Users'} nb={'255'} grow={false} icon={<GiStarsStack />} badgeNb={'+ 95%'} badgeTitle={'Last Month'} color={["#E49200", "#e4de00"]} />
          </div>
        </div>
        <div className='col-sm-4'>
          <div className="BoxWrapper text-white">
            <div className="box"
              style={{ backgroundImage: `linear-gradient(to bottom right, #1250B8 , #498CCE` }}>
              <div className='d-flex align-items-center justify-content-between'>
                <h4 className="title">Total Users</h4>
                <div className="icon"><IconButton><HiDotsHorizontal /></IconButton></div>
              </div>
              <h3>$ 3,235,756</h3>
              <p >$12332 last month</p>
            </div>
          </div>
        </div>
      </div>
      <div className='card shadow border-0 p-4 mt-4'>
        <div className="bestSellingHeader">
          <h4 className='hd'>Best Selling Products</h4>
          <div className="row">
            <div className="col-sm-3">
              <div className="">
                <label htmlFor="showby" className='form-label'>Show By</label>
                <select className="form-select" aria-label="Default select example" id='showby'>
                  <option selected>Choose Rows</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <label htmlFor="showby" className='form-label'>Show By</label>
                <select className="form-select" aria-label="Default select example" id='showby'>
                  <option selected>Choose Rows</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <label htmlFor="showby" className='form-label'>Show By</label>
                <select className="form-select" aria-label="Default select example" id='showby'>
                  <option selected>Choose Rows</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <label htmlFor="showby" className='form-label'>Show By</label>
                <select className="form-select" aria-label="Default select example" id='showby'>
                  <option selected>Choose Rows</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>

          </div>
          <div className="bestSellingTable mt-3">
            <DataTable />
          </div>
        </div>
      </div>
    </section>
  );
}
