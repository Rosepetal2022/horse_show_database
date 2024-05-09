import { horseAndRider_data } from '../utils/sampleData';



function HorseAndRiders() {
    return (
        <>
        <h2>Horses and Riders</h2>
        <div className="table-padding">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Horse</th>
                        <th scope="col">Rider</th>
                    </tr>
                </thead>
                <tbody>
                    {horseAndRider_data.map((horseAndRider, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{horseAndRider.horse}</td>
                            <td>{horseAndRider.RfirstName} {horseAndRider.RlastName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
};

export default HorseAndRiders;