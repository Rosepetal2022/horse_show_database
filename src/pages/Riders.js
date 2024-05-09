import { rider_data } from '../utils/sampleData';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";


function Rider() {
    return (
        <>
        <h1>Add/Edit/Delete Riders</h1>
        <div className="table-padding">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {rider_data.map((rider, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{rider.firstName}</td>
                            <td>{rider.lastName}</td>
                            <td>{rider.email}</td>
                            <td>{rider.address}</td>
                            <td><button className="btn btn-primary btn-sm" ><FaEdit /></button></td>
                            <td><button className="btn btn-danger btn-sm ml-1"><FaDeleteLeft /></button></td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default Rider;