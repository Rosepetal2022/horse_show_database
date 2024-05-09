import { betters_data } from '../utils/sampleData';

function Betters() {
    return (
        <>
        <div className="table-padding">
        <table className="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Amout</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                </tr>
            </thead>
            <tbody>
                {betters_data.map((better, index) => (
                    <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{better.amount}</td>
                        <td>{better.firstName}</td>
                        <td>{better.lastName}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
        </>
    );
};

export default Betters;