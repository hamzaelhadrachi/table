//import User from '../user/user.component';
import 'bootstrap/dist/css/bootstrap.min.css'
import './dataTable.component.css';
const DataTable = ({data}) => (

    <div>
        <table class="table table-bordered border-primary">
            <thead class="table-dark">
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>e-mail</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((d, i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td><a href={d.email}> {d.email}</a></td>
                        </tr>
                    ))
                }

            </tbody>
        </table>
    </div>

);
export default DataTable;
