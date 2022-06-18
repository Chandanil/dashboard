import { Btn } from "../../Button/Btn";
import "./Table.scss";

export const Table = () => {
  const data = [
    {
      name: "Chandani Lama",
      expiryTime: "03 Jun 2022",
      payDate: "03 April 2022",
      totalDue: "95000.00",
      noPaidDate: "60 Days",
      previousInfo: "We can't meet at newroad pasal",
      contactno: "9812345678",
      icon: <i className="fa fa-ellipsis-v"></i>,
    },
    {
      name: "Chandani Lama",
      expiryTime: "03 Jun 2022",
      payDate: "03 April 2022",
      totalDue: "95000.00",
      noPaidDate: "60 Days",
      previousInfo: "We can't meet at newroad pasal",
      contactno: "9812345678",
    },
    {
      name: "Chandani Lama",
      expiryTime: "03 Jun 2022",
      payDate: "03 April 2022",
      totalDue: "95000.00",
      noPaidDate: "60 Days",
      previousInfo: "We can't meet at newroad pasal",
      contactno: "9812345678",
    },
  ];
  return (
    <>
      <div className="cl-table">
        <h4 className="title">Follow up Details</h4>
        <Btn />
        <table className="table">
          <thead>
            <tr>
              <th>
                <input type="checkbox"></input>
              </th>
              <th>Name</th>
              <th>Expire Time</th>
              <th>Pay Date</th>
              <th>Total Due</th>
              <th>Not Paid Date</th>
              <th>Previous Information</th>
              <th>Contact No</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((item, index) => {
              return (
                <tr>
                  <td>
                    <input type="checkbox"></input>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.expiryTime}</td>
                  <td>{item.payDate}</td>
                  <td>{item.totalDue}</td>
                  <td>{item.noPaidDate}</td>
                  <td>{item.previousInfo}</td>
                  <td>{item.contactno}</td>
                  <td>{item.icon}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
