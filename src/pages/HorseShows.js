import { horseShows_data } from '../utils/sampleData';
import { FaEdit } from "react-icons/fa";


function HorseShows() {
    return (
        <>
        <h2>View All Horse Shows</h2>
        <div className="table-padding">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date</th>
                    <th scope="col">Location</th>
                    <th scope="col">Prize Money Offered</th>
                    <th scope="col"># of Horses Entered</th>
                    <th scope="col">Edit</th>
                </tr>
            </thead>
            <tbody>
                {horseShows_data.map((horseShow, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{horseShow.name}</td>
                        <td>{horseShow.date}</td>
                        <td>{horseShow.location}</td>
                        <td>{horseShow.moneyOffered}</td>
                        <td>{horseShow.horsesEntered}</td>
                        <td><button className="btn btn-primary btn-sm" ><FaEdit /></button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    </>
    );
};

export default HorseShows;