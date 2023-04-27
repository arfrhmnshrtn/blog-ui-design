import data from "../data.js";
function Filter() {
  const filter = data.filter((item) => {
    return item.work === "Back End Enginer";
  });

  if (filter.length === 0) {
    return (
      <>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <h1 className="text-light">Upsss, Data Kosong!!</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container pt-5">
        <div className="row mt-5 bg-transparent">
          {filter.map((el, idx) => (
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
    </>
  );
}
export default Filter;
