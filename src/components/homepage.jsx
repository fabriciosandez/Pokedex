import React, { useState } from "react";
import pokeDatos from "./pokedata";
import "../index.css";
import "../App.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import SearchIcon from "@mui/icons-material/Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSortAlphaDown } from "@fortawesome/free-solid-svg-icons";
import { faSortNumericDown } from "@fortawesome/free-solid-svg-icons";

library.add(faSortAlphaDown);
library.add(faSortNumericDown);

const Homepage = ({ placeholder }) => {
  const [filter, setFilter] = useState([]);

  const [order, setOrder] = useState(pokeDatos);
  const [alphabeticOrder, setAlphabeticOrder] = useState(false);

  const orderByNumber = () => {
    const numberAscending = [...order].sort((a, b) => (a.id < b.id ? -1 : 1));
    setOrder(numberAscending);
    setAlphabeticOrder(false);
  };

  const orderByName = () => {
    const stringAscending = [...order].sort((a, b) =>
      a.name < b.name ? -1 : 1
    );
    setOrder(stringAscending);
    setAlphabeticOrder(true);
  };


  const searchText = (event) => {
    setFilter(event.target.value);
    let arrayFiltrado = order.filter(order=>order.name.toLowerCase().includes(filter));
    setOrder(arrayFiltrado);
    console.log(order.filter(order=>order.name.toLowerCase().includes(filter)),"Array arrayFiltrado");
  };



  const dataSearch = order.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
    
  });
  return (
    <>
      <div>
        {alphabeticOrder ? (
          <FontAwesomeIcon
            icon="fas fa-sort-numeric-down"
            onClick={() => orderByNumber()}
          />
        ) : (
          <FontAwesomeIcon
            icon="fas fa-sort-alpha-down"
            onClick={() => orderByName()}
          />
        )}
      </div>

      <section className="py-4 container">
        <div className="row md-3 justify-content-center content-center">
          <div className="col-12 mb-3 searchbar ">
            <div className="col-12 mb-3 md-8 text-center">
              <input
                type="text"
                placeholder={placeholder}
                className="from-control"
                value={filter}
                onChange={searchText.bind(this)}
              />
              <div className="searchIcon">
                <SearchIcon />
              </div>
            </div>
          </div>

          <Row xs={2} md={4} className="gx-3 gy-3">
            {order.map((item) => {
              return (
                <Col>
                  <Card style={{ borderColor: item?.color }}>
                    <p className="pokeId" style={{ color: item?.color }}>
                      #{item.id}
                    </p>
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="cardImage"
                    />
                    <Card.Text
                      className="card-title"
                      style={{ backgroundColor: item?.color }}
                    >
                      {item.name}
                    </Card.Text>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Homepage;
