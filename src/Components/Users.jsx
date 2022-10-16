import React from 'react';
import UserData from "../DummyData.json";
import "./Users.css";

const Users = () => {
  return (
      <div className='container'>
        <h2 className='header'>Move-Out List</h2>
            <div className='main'>
                <table className='tab'>
                <thead>
                    <tr>
                        <th>Move-out Date</th>
                        <th>ID</th>
                        <th>Address</th>
                        <th>Room</th>
                        <th>Location</th>
                        <th>Last Occupant</th>
                        <th>UID</th>
                        <th>Balance</th>
                        <th></th>
                    </tr>
                </thead>
                    <tbody>
                        {UserData.map((data, index) => {
                            return (
                            <tr>
                                <td>{data.move_out_data}</td>
                                <td>{data.id}</td>
                                <td><div style={{display: "flex", padding: "1rem"}}><img className='image' src={data.img} alt=""></img><div style={{marginLeft: "1rem"}}>{data.address}</div></div></td>
                                <td>{data.room}</td>
                                <td>{data.location}</td>
                                <td>{data.lastOccupant}</td>
                                <td>{data.uid}</td>
                                <td>{data.balance}</td>
                                <div>
                                    <td><button style={{marginRight: "-1.5rem", marginTop: "1rem"}}>Flip room</button></td>
                                </div>
                            </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default Users;