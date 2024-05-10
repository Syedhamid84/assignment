import React, { useEffect, useState } from "react";
import LoaderSpinner from "../Loader/LoaderSpinner";

const ListAPi = () => {
  const [data, setData] = useState(null);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://dummyjson.com/products?limit=15&skip=${skip}&select=title,price`
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        setData(result?.products);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [skip]); // Fetch data whenever skip value changes

  const handleNext = () => {
    setSkip((prevSkip) => prevSkip + 15); // Increment skip value by 15 for next page
  };

  const handlePrevios = () => {
    if (skip >= 15) {
      setSkip((prevSkip) => prevSkip - 15); // Decrement skip value by 15 for previous page
    }
  };

  return (
    <div className="flex flex-col gap-5 m-16 border">
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <LoaderSpinner />
          </div>
        ) : (
          <table className="table-auto border-collapse w-full">
            <thead className="sticky top-0">
              <tr className="bg-gray-200">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>

            <tbody className="overflow-y-auto">
              {data &&
                data.map((product, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2 text-center">{product.id}</td>
                    <td className="px-4 py-2 text-center">{product.title}</td>
                    <td className="px-4 py-2 text-center">${product.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="flex justify-center items-center gap-5 mb-5">
        <button
          className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-red-500"
          onClick={handlePrevios}
          disabled={skip === 0} // Disable previous button when on the first page
        >
          <span className="group-hover:text-white">Previous</span>
        </button>
        <button
          className="px-4 py-2 border rounded-md text-lg font-semibold w-36 group hover:bg-green-500"
          onClick={handleNext}
        >
          <span className="group-hover:text-white">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ListAPi;
