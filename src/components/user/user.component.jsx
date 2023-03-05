import 'bootstrap/dist/css/bootstrap.min.css'

const User = ({user}) => {
    const {id, name, email} = user;

    return(
        <div className='user-container'>
            <table class='table table-striped'>
                <thead class='thead-dark'>
                    <th scope='col'>ID</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>e-mail</th>
                </thead>
                <tbody>
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default User;