import "./Form.scss";

export const Form = () => {
  return (
    <>
      <div className="same-gap">
        <div className="loan-detail-form cl-form">
          <h4 className="title">Add Loan Cus</h4>
          <form>
            <div className="loan-form">
              <div className="section">
                <small>Personal Information</small>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Addresse"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Phone No"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Email Id"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Company Name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
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
                      <select className="form-control">
                        <option>Loan Type</option>
                        <option>Home Loan </option>
                        <option>Education Loan</option>
                        <option>Vehicle Loan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Loan Amount"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Loan Duration"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Loan Purpose"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <select className="form-control">
                        <option>Installment Type</option>
                        <option>Home Loan</option>
                        <option>Installment Type</option>
                        <option>Home Loan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Recommend to"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <input
                        type="file"
                        name="name"
                        placeholder="Company Name"
                        className="form-control"
                      />
                    </div>
                  </div>
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
};
