import "./widgetLg.css";
import { useState } from 'react';
import { useEffect } from "react";
import { userRequest } from "../../requestMethods";
import { format } from "timeago.js"

export default function WidgetLg() {
  const [orders, setOrders] = useState([]);

  useEffect(()=>{
    const getOrders = async ()=>{
      try{
        const res = await userRequest.get("orders");
        setOrders(res.data);
      }catch(err){
        console.log(err);
      }
    }
    getOrders();
  })
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        {orders.map(order=>(
          <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{order.userId}</span>
          </td>
          <td className="widgetLgDate">{format(order.createdAt)}</td>
          <td className="widgetLgAmount">${order.amount}</td>
          <td className="widgetLgStatus">
            <Button type={order.status} />
          </td>
        </tr>
        ))}
      </table>
    </div>
  );
}
