import React, { Component } from 'react'

export default class AgentAdd extends Component {
render() {
return (
<div>
    <section className="content">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-primary">
                        <div className="card-header">
                            <h3 className="card-title">Add New Agent</h3>
                        </div>
                        {/* /.card-header */}
                        {/* form start */}
                        <form>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="username">User Name</label>
                                            <input type="text" className="form-control" id="username"
                                                placeholder="Enter User Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email">Email address</label>
                                            <input type="email" className="form-control" id="email"
                                                placeholder="Enter email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="full-name">Full Name</label>
                                            <input type="text" className="form-control" id="full-name"
                                                placeholder="Enter Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password"
                                                placeholder="Password" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleSelectRounded0">Groups</label>
                                            <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                                <option>Value 1</option>
                                                <option>Value 2</option>
                                                <option>Value 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="agent-commission">Agent Commissions</label>
                                            <input type="number" className="form-control" id="agent-commission" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="admin-commission">Admin Commissions</label>
                                            <input type="number" className="form-control" id="admin-commission" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="add-credit">Add Credit</label>
                                            <input type="number" className="form-control" id="add-credit" />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="address">Address</label>
                                            <textarea className="form-control" id="address" rows="4"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleSelectRounded0">country</label>
                                            <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                                <option>Value 1</option>
                                                <option>Value 2</option>
                                                <option>Value 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleSelectRounded0">State</label>
                                            <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                                <option>Value 1</option>
                                                <option>Value 2</option>
                                                <option>Value 3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleSelectRounded0">City</label>
                                            <select className="custom-select rounded-0" id="exampleSelectRounded0">
                                                <option>Value 1</option>
                                                <option>Value 2</option>
                                                <option>Value 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="exampleInputFile">Avatar</label>
                                            <div className="input-group">
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input"
                                                        id="exampleInputFile" />
                                                    <label className="custom-file-label"
                                                        htmlFor="exampleInputFile">Choose
                                                        file</label>
                                                </div>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">Upload</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* /.card-body */}

                            <div className="card-footer">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </section>
</div>
)
}
}
