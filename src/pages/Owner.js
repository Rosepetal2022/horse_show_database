import { owner_data } from '../utils/sampleData';
import { FaDeleteLeft } from "react-icons/fa6";



function Owner() {
    return (
    <>
    <h2>View/Edit/Delete Owners</h2>
    <div className="table-padding">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {owner_data.map((owner, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{owner.firstName}</td>
                        <td>{owner.lastName}</td>
                        <td>{owner.email}</td>
                        <td>{owner.address}</td>
                        <td><button className="btn btn-danger btn-sm ml-1"><FaDeleteLeft /></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    <div className="d-flex justify-content-between">
        <div className="form-size">
            <div className="container form-background">
                <h2>Add Owner</h2>
                <form>
                    <div className="form-group form-padding">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" id="firstName" defaultValue="First Name" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" className="form-control" id="lastName" defaultValue="Last Name" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="breed">Email</label>
                        <input type="email" className="form-control" id="email" defaultValue="me@me.com" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="age">Address</label>
                        <input type="text" className="form-control" id="address" defaultValue="Address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
            </div>
        </div>
        <div className="form-size">
            <div className="form-background container">
                <h2>Edit Owner</h2>
                <form>
                    <div className="form-group form-padding">
                        <label htmlFor="name">First Name</label>
                        <input type="text" className="form-control" id="firstName" defaultValue="First Name" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="breed">Last Name</label>
                        <input type="text" className="form-control" id="lastName" defaultValue="Last Name" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="age">Email</label>
                        <input type="email" className="form-control" id="email" defaultValue="me@me.com" />
                    </div>
                    <div className="form-group form-padding">
                        <label htmlFor="discipline">Address</label>
                        <input type="text" className="form-control" id="address" defaultValue="Address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Save changes</button>
                </form>
            </div>
        </div>
    </div>
    </>
    );
};

export default Owner;