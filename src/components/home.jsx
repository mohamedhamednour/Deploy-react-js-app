import React from "react";
import "../App.css";
import {Link} from 'react-router-dom'



export const Home = () => {

  //dashord

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1>EL-GENRAL</h1>

            <h1>MR KHALED SALAH</h1>
          </div>

          <div className="col-12 col-lg-6 ">
            <h2>about me </h2>
            <button className="btn btn-primary">contact us</button>
            <button className="btn btn-danger">about me </button>


          </div>
        </div>
      </div>
<pre>











</pre>
<br />
<br />
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
          <div class="card">
      <div class="card-body">
        <h5 class="card-title">تاريخ</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>

          </div>

          <div className="col-12 col-lg-4 ">

          <div class="card">
      <div class="card-body">
        <h5 class="card-title">جغرافيا</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>

          </div>
          <div className="col-12 col-lg-4 ">

          <div class="card">
      <div class="card-body">
        <h5 class="card-title">جولوجيا</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <Link class="btn btn-primary" to='/forgertpass'>Go somewhere</Link>
      </div>
      </div>


          </div>
        </div>
      </div>

    </>
  );
};
