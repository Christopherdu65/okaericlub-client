import { useEffect, useState } from "react";
import axios from 'axios';
import DataTable from 'react-data-table-component';
import './leaderboard.css'
import { axiosInstance } from "../../Config";
function Leaderboard() {
    const columns = [
        {
            name: 'Username',
            selector: row => row.username,
            sortable: true,
        },
        {
            name: 'Total Score',
            selector: row => row.totalScore,
            sortable: true,
        },
    ];
    
   const [users, setUsers] = useState([]);
   useEffect(()=>{
       const fetchUsers = async()=>{
           const res = await axiosInstance.get("/users/");
           console.log(res.data);
           setUsers(res.data);
       }
       fetchUsers();
   }, [])
    return (
        // <div>
        //     <Board users={users}/>
        // </div>
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Rank</th>
        //             <th>Username</th>
        //             <th>Score</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {users.map((user)=> (
        //             <tr>
        //             <td>1</td>
        //             <td>{user.username}</td>
        //             <td>{user.totalScore}</td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
        <DataTable 
        columns={columns}
        data={users}
    />
    )
}

export default Leaderboard
