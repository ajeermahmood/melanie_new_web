const ScheduleForm = ({address}) => {
  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-lg-12">
          <div className="mb15">
            <input
              type="text"
              className="form-control"
              placeholder="Phone"
              required
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="mb15">
            <textarea
              cols={30}
              rows={4}
              placeholder={`Hello, I am interested in ${address}`}
              defaultValue={""}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="col-md-12">
          <div className="d-grid">
            <button className="custom-btn-3">Submit Request</button>
          </div>
        </div>
        {/* End .col-12 */}
      </div>
    </form>
  );
};

export default ScheduleForm;
