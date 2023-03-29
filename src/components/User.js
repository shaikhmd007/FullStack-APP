import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
const User = () => {
  const [Item, SetItem] = useState([]);

  const [checked, setChecked] = useState('all');
  const [filterData, setFilterData] = useState([]);

  async function getData() {
    fetch("https://randomuser.me/api/?results=20")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        SetItem(data.results)
        setFilterData(data.results)
      }
      ).catch((err) => console.log(err
      ));
    // console.log(All);
  }
  useEffect(() => {
    getData(Item);
  }, []);

  const Categories = type => {
    if (type !== 'all') {
      setChecked(type);
      const filteredItems = Item.filter(item => item.gender === type);
      // console.log(filteredItems);

      setFilterData(filteredItems);
    } else {
      setFilterData(Item);
    }
  };

  return (
    <>
      <Navbar />
      <div className="mt-4 container pt-4">
        <div>
          <div className="">
            <h2>User Details</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              obcaecati nostrum ratione harum veritatis aut explicabo culpa
              molestiae numquam dicta officia cum vitae commodi minus voluptatem,
              tenetur odio repellat, molestias magnam, similique dolore quia
              adipisci. Ipsam magni iusto veritatis eveniet maxime! In accusantium
              a, ea aperiam tenetur officia?
            </p>
          </div>
          <div className="m-4">
            <input
              type="radio"
              checked={checked === 'all'}
              onChange={() => Categories('all')}
            // className="m-2"
            /> All
            <input
              type="radio"
              checked={checked === 'male'}
              onChange={() => Categories('male')}
              className="m-2"
            /> male
            <input
              type="radio"
              checked={checked === 'female'}
              onChange={() => Categories('female')}
              className="m-2"
            /> female
          </div>
          <table className="table table-sm p-4">
            <thead className="bg-dark text-white">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
              </tr>
            </thead>
            <tbody>
              {filterData.map((e) => (
                <>
                  <tr>
                    <td >
                      <img
                        style={{ margin: "10px 10px" }}
                        width={100}
                        height={100}
                        src={e.picture.large}
                        alt="Profile-Pic"
                      />
                    </td>
                    <td style={{ marginLeft: "20px" }}>
                      <span>{e.name.first}</span>{" "}
                    </td>
                    <td>

                      <span>{e.email}</span>
                    </td>
                    <td>
                      <span>{e.gender}</span>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default User;
