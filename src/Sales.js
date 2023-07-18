import React from "react";

function Sales() {
  const [sales, setSales] = useState([
    {
      name: "docker",
      price: 120,
      date: "Wed Jan 01 2020",
      registrationNumber: "2020/01/01",
      buyer_firstname: "ahmed",
      buyer_lastname: "ali",
      buyer_card: [],
    },
  ]);
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <table>
          <thead>
            <tr>
              <th>الإسم</th>
              <th>الثمن</th>
              <th>التاريخ</th>
              <th>التسجيل رقم</th>
              <th>المشتري إسم</th>
              <th>المشتري نسب</th>
              <th>البطاقة صور</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale) => {
              <tr>
                <td>{sale.name}</td>
                <td>{sale.price}</td>
                <td>{sale.date}</td>
                <td>{sale.registrationNumber}</td>
                <td>{sale.buyer_firstname}</td>
                <td>{sale.buyer_lastname}</td>
                <td>{sale.buyer_card}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Sales;
