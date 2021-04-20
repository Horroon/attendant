import React from "react";

export const NewEmployee = ({ shouldIShow }) => {
  return (
    shouldIShow && (
      <div>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label>First Name: </label>
              <input
                type="text"
                class="form-control"
                aria-describedby="firstname"
                placeholder="Enter First Name"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <label for="exampleInputPassword1">Last Name</label>
              <input type="text" class="form-control" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Email</label>
              <input
                type="email"
                class="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Role</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Role"
              />
            </div>
          </div>
          <div className="col-lg-4 col-md-4">
            <div class="form-group">
              <label for="exampleInputPassword1">Department</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Department"
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div class="form-group">
              <button className="btn btn-success btn-md">Submit</button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
