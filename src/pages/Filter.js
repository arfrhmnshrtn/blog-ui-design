import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import data from "../data.js";
import FilterKosong from "./FilterKosong.js";

function Filter(props) {
  const [resultFilter, setresultFilter] = useState("");
  const [filter, setFilter] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  let { slug } = useParams();

  console.log(props);

  useEffect(() => {
    if (slug === "frontend") {
      setresultFilter("Front-end Engineer");
    }
    if (slug === "uidesign") {
      setresultFilter("Product Designer");
    }
    if (slug === "backend") {
      setresultFilter("Back End Enginer");
    }
  }, [slug]);

  useEffect(() => {
    if (resultFilter) {
      const filteredData = data.filter((item) => item.work === resultFilter);
      setFilter(filteredData);
    }
  }, [resultFilter]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredResults = filter.filter((item) =>
    item.judul.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container pt-5">
      <div className="row mt-5 bg-transparent">
        {/* <div className="col-md-12">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="search-input"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div> */}
        {filteredResults.length > 0 ? (
          filteredResults.map((el, idx) => (
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
          ))
        ) : (
          <FilterKosong />
        )}
      </div>
    </div>
  );
}

export default Filter;
