import { horse_data } from '../utils/sampleData';
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";


function Horse() {
  return (
        <>
        <div className="table-padding">
         <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Breed</th>
            <th scope="col">Age</th>
            <th scope="col">Discipline</th>
            <th scope="col">Prize Money</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {horse_data.map((horse, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{horse.name}</td>
              <td>{horse.breed}</td>
              <td>{horse.age}</td>
              <td>{horse.discipline}</td>
              <td>{horse.prizeMoney}</td>
              <td><button className="btn btn-primary btn-sm" ><FaEdit /></button></td>
              <td><button className="btn btn-danger btn-sm ml-1"><FaDeleteLeft /></button></td> 
              
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default Horse;