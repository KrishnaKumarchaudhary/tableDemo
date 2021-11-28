import "./App.css";
import React, { useState, useEffect } from "react";
import sidebardata from "./data";
import tableData from "./tabledata";
import { FaUserCircle } from "react-icons/fa";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { CgSearch } from "react-icons/cg";
import {
  MdKeyboardArrowDown,
  MdModeEditOutline,
  MdDelete,
} from "react-icons/md";

function App() {
  const [currentData, setcurrentData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  var total_length = Math.ceil(tableData.length / 10);
  var pageno = Array.from(Array(total_length).keys());
  console.log(currentPage);
  useEffect(() => {
    if (
      currentPage <== 0 &&
      tableData.length <== 10 &&
      tableData.length <== 10 
    ) {
      setcurrentData(tableData.slice(0, tableData.length <== 10));
    } else if (currentPage > 0 && currentPage <== pageno.length) {
      setcurrentData(tableData.slice(currentPage * 10 - 10, currentPage * 10));
    } else if (currentPage > pageno.length) {
      setCurrentPage(pageno.length);
    }
  }, [currentPage]);
  return (
    <>
      <div className="wrapper">
        <div className="sidebar">
          <div className="logo">
            <h1 className="logo-text">LOGO</h1>
            <ul>
              {sidebardata.map((item, index) => {
                const { icon, label, arrow } = item;
                return (
                  <>
                    <li>
                      <span class="icon">
                        <span>{icon}</span>
                        <span> {label} </span>
                      </span>

                      <span class="arrow">{arrow} </span>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="main-container">
          <div className="header">
            <h3 className="heading-text">MODULE TITLE</h3>
            <div class="user">
              <div className="user-profile">
                <FaUserCircle />
              </div>
              <div>
                <MdKeyboardArrowDown />
              </div>
            </div>
          </div>

          <div className="add-new">
            <button type="button" className="btn">
              + Add New
            </button>
            <div style={{ display: "flex" }}>
              <input
                type="search"
                className="search-box"
                placeholder="search here.."
              />
              <button className="iconimage">
                <CgSearch />
              </button>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              boxShadow: "5px 4px rgba(220,220,220,0.4)",
              marginTop: "2rem",
              backgroundColor: "#fff",
            }}
          >
            <table cellSpacing="20" cellSpacing="20">
              <thead
                style={{ boxShadow: "0px 1px gray", PaddingBottom: "1rem" }}
              >
                <th style={{ padding: "1rem" }}>S.No</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th colSpan="2">Language</th>
              </thead>
              <tbody>
                {currentData.map((item, index) => {
                  const { id, firstName, lastName, Email, Language } = item;
                  return (
                    <tr>
                      <td>{id}</td>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{Email}</td>
                      <td>{Language}</td>
                      <td>
                        <MdModeEditOutline />
                        <MdDelete />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <button
              type="button"
              className="page-button"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <RiArrowLeftSLine />
            </button>
            {pageno.map((item) => {
              return (
                <button
                  type="button"
                  className="page-button"
                  onClick={() => setCurrentPage(item + 1)}
                >
                  {item + 1}
                </button>
              );
            })}
            <button
              type="button"
              className="page-button"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <RiArrowRightSLine />
            </button>
          </div>
        </div>

        <div className="line-1" />
      </div>
    </>
  );
}

export default App;
