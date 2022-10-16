import React from 'react';
// import UserData from "../store/reducer/DummyData.json";
import "./Users.css";
import { useDispatch, useSelector } from 'react-redux';
import { increaseRooms } from '../store/reducer/roomReducer';

const Users = () => {

    const { rooms } = useSelector((state) => state.room);
    const dispatch = useDispatch();

    const flipButton = (id, room) => {
        dispatch(increaseRooms({ id: id, room: room }));
    };

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
                        {rooms.map((data, index) => (
                            <tr key={index}>
                                <td>{data.move_out_data}</td>
                                <td>{data.id}</td>
                                <td><div style={{ display: "flex", padding: "1rem" }}><img className='image' src={data.image} alt=""></img><div style={{ marginLeft: "1rem" }}>{data.address}</div></div></td>
                                <td>{data.room}</td>
                                <td>{data.location}</td>
                                <td>{data.lastOccupant}</td>
                                <td>{data.uid}</td>
                                <td>{data.balance}</td>

                                <td>
                                    <button
                                        style={{ marginRight: "-1.5rem", marginTop: "1rem" }}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            flipButton(data.id, data.room)
                                        }}>Flip room
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;