import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { db, ref, onValue } from "../firebase.js";
import Leaflet from "leaflet";
import {
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

const MapComponent = () => {
  const [carparkData, setCarparkData] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const carparkRef = ref(db);
      onValue(carparkRef, (snapshot) => {
        try {
          const data = snapshot.val();
          if (data) {
            const carparkArray = Object.keys(data).map((key) => ({
              id: key,
              ...data[key],
            }));
            setCarparkData(carparkArray);
            setError(null);
          } else {
            setCarparkData([]);
            setError("No data available");
          }
        } catch (error) {
          setError(error.message);
        }
      });
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setShowModal(true);
  };

  const filterData = () => {
    return filter === "all"
      ? carparkData
      : carparkData.filter((marker) => marker.availability === filter);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const customIcon = (availability) => {
    const fillColor = availability === "unavailable" ? "red" : "green";
    return Leaflet.divIcon({
      className: "custom-div-icon",
      html: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="${fillColor}" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
            </svg>`,
    });
  };

  return (
    <div className="settings">
      <div className="settings__wrapper">
        <div className="map">
          <div className="filter form-group">
            <label htmlFor="filter" className="label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-funnel"
                viewBox="0 0 32 32"
              >
                <path d="M2.464 3.879A.25.25 0 0 0 2.236 4h11.528a.25.25 0 0 0-.228.379l-4.75 7.5a.5.5 0 0 1-.854 0l-4.75-7.5zm.787-.342a1 1 0 0 1 1.702 0l4.75 7.5a1 1 0 0 1-.854 1.5H3.605a1 1 0 0 1-.854-1.5l4.75-7.5a1 1 0 0 1 0-1.116zM5.056 5.75a.75.75 0 0 1 1.342 0l2 4a.75.75 0 0 1-1.342.75l-2-4a.75.75 0 0 1 0-.75z" />
              </svg>
              Filter by Availability :
            </label>
            <select
              id="filter"
              className="form-control"
              value={filter}
              onChange={handleFilterChange}
            >
              <option value="all">All</option>
              <option value="available">Available</option>
              <option value="unavailable">Unavailable</option>
            </select>
          </div>
          <MDBModal isOpen={showModal} toggle={toggleModal}>
            <MDBModalHeader toggle={toggleModal}>Filter Options</MDBModalHeader>
            <MDBModalBody>
              <p>Modal content</p>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleModal}>
                Close
              </MDBBtn>
              <MDBBtn color="primary">Apply</MDBBtn>
            </MDBModalFooter>
          </MDBModal>

          {carparkData.length === 0 ? (
            <p>Loading...</p>
          ) : (
            <MapContainer
              center={[7.8731, 80.7718]}
              zoom={8}
              style={{ width: "100%", height: "800px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {filterData().map((marker) => (
                <Marker
                  key={marker.id}
                  position={[marker.latitude, marker.longitude]}
                  icon={customIcon(marker.availability)}
                >
                  <Popup>
                    <div>
                      <h2>{marker.carparkName}</h2>
                      <p
                        style={{
                          color:
                            marker.availability === "available"
                              ? "green"
                              : "red",
                        }}
                      >
                        Availability :{" "}
                        {marker.availability.charAt(0).toUpperCase() +
                          marker.availability.slice(1)}
                      </p>
                      <p>Price : Rs.{marker.price}.00</p>
                      <p>Latitude: {marker.latitude}</p>
                      <p>Longitude: {marker.longitude}</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
