import React from "react";

const ProductDetailTable2 = () => {
  const sales = [
    {
      id: 1,
      name: "apple",
      quantity: "melon",
      createAt: 300,
    },
    {
      id: 2,
      name: "orange",
      quantity: "melon",
      createAt: 300,
    },
    {
      id: 3,
      name: "banana",
      quantity: "melon",
      createAt: 300,
    },
  ];
  return (
    <div className="flex text-sm bg-[#161618] flex-col border-b-0 border border-[#3F4245]">
      <h1 className=" font-medium text-white tracking-wider py-4 px-4">
        SALE HISTORY
      </h1>
      <table className=" border-y border-[#3F4245]">
        <thead>
          <tr className=" text-white tracking-wider">
            <th className="py-2 font-medium pl-4 text-start">NO</th>
            <th className="py-2 font-medium text-start">SALE QUANTITY</th>
            <th className="py-2 font-medium text-start">SALE PRICE</th>
            <th className="py-2 font-medium pr-4 text-end">SALE DATE</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            return (
              <tr
                key={sale?.id}
                className=" text-white tracking-wider border-t border-[#3F4245]"
              >
                <td className="py-2 font-medium pl-4 text-start">
                  {sale?.id}
                </td>
                <td className="py-2 font-medium text-start">{sale?.name}</td>
                <td className="py-2 font-medium text-start">
                  {sale?.quantity}
                </td>
                <td className="py-2 font-medium pr-4 text-end">
                  {sale?.createAt}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetailTable2;
