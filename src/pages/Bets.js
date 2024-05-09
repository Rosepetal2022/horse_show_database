import { bets_data } from '../utils/sampleData';


function Bets(){
    return (
        <>
        <h2>Bets Placed</h2>
        <div className="table-padding">
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Better</th>
                        <th scope="col">Horse Show</th>
                        <th scope="col">Horse</th>
                    </tr>
                </thead>
                <tbody>
                    {bets_data.map((bet, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{bet.firstName} {bet.lastName}</td>
                            <td>{bet.horseShow}</td>
                            <td>{bet.horse}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
};

export default Bets;