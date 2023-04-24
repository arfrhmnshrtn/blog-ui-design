import { useEffect } from "react";
import Navbar from "./Navbar";
import Gambar1 from "./image/gambar1.png";
import Avatar1 from "./image/avatar1.svg";
import data from "../data.js";
import "./Home.css";

function Home() {
  return (
    <div className="App container">
      <Navbar />
      <div className="container text-center text-light">
        <div className="row">
          <div className="col-lg-8">
            <img src={Gambar1} className="img-fluid h-auto" alt="" />
          </div>
          <div className="col text-start">
            <div className="title h-6 mt-4 mt-lg-0 text-secondary">
              UI DESIGN | July 2, 2021
            </div>
            <div className="judul my-3 my-xl-4 my-lg-3 h3">
              Understanding color theory: the color wheel and finding
              complementary colors
            </div>
            <p className="deskripsi text-secondary">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
            <div className="user-account d-flex mt-4">
              <div className="avatar">
                <img src={Avatar1} alt="" />
              </div>
              <div className="name-account ms-3">
                <div className="name fs-5">Leslie Alexander</div>
                <div className="job h-6 text-secondary">UI Designer</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 bg-transparent">
          {data.map((el, idx) => (
            <div className="col-lg-4 col-md-6" key={idx}>
              <div className="card bg-transparent text-light mb-5">
                <img src={el.thumbnail} className="card-img-top" alt="..." />
                <div className="card-body text-start">
                  <div className="title h-6 mt-4 mt-lg-0 text-secondary">
                    {el.date}
                  </div>
                  <h5 className="card-title my-3">{el.judul}</h5>
                  <p className="card-text text-secondary">{el.deskripsi}</p>
                  <div className="user-account d-flex mt-4">
                    <div className="avatar">
                      <img src={el.avatar} alt="" />
                    </div>
                    <div className="name-account ms-3">
                      <div className="name fs-5">{el.userName}</div>
                      <div className="job h-6 text-secondary">{el.work}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
