import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";
function UserView() {
    const user=useSelector((state)=>state.user);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchUsers());
    },[])
    return ( 
        <div>
            <h2>List of Users</h2>
            {user.loading?<div>loading...</div>:null}
            {!user.loading&&user.error?<div>Error:{user.error}</div>:null}
            {!user.loading&&user.users.length?user.users.map((user)=>
                <div key={user.id}>{user.name}</div>
            ):null}
        </div>
     );
}

export default UserView;