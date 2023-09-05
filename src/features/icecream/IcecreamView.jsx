import { useSelector,useDispatch } from "react-redux";
import { ordered,restocked } from "./icecreamSlice";
import { useState } from "react";
function IcecreamView() {
    const numOfIcecreams=useSelector((state)=>state.icecream.numOfIcecreams)
    const dispatch=useDispatch();
    const [value,setValue]=useState();
    return ( 
        <div>
            <h2>Number of icecreams - {numOfIcecreams}</h2>
            <button onClick={()=>dispatch(ordered())}>Order icecream</button>
            <input type="text" onChange={(e)=>setValue(e.target.value)} />
            <button onClick={()=>dispatch(restocked(parseInt(value)))}>Restock icecream</button>
        </div>
    );
}

export default IcecreamView;