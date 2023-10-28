import { Formik } from "formik";
import React from "react";
import {
  RiBusLine,
  RiCarLine,
  RiEBike2Line,
  RiTruckLine,
} from "react-icons/ri";
import { object, string } from "yup";
import { requestARide } from "../../api/taxiApis";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "../ride/ride.scss";

export const Ride = () => {
  const handleSubmit = async (values) => {
    try {
      const docRef = await requestARide(values);
      console.log("Document written with ID: ", docRef.id);
      console.log("this");
    } catch (error) {}
  };

  const initialValues = {
    name: "",
    pickupLocation: "",
    pickupTime: "",
    destination: "",
    vehicleType: "",
  };

  const validationSchema = object({
    name: string().required(),
    pickupLocation: string().required(),
    pickupTime: string().required(),
    destination: string().required(),
    vehicleType: string().required(),
  });

  return (
    <div className="d-flex flex-column">
      <Navbar></Navbar>
      <div className="ride-container">
        <div
          className="w-100 d-flex flex-column"
          style={{ justifyContent: "center", height: "100%" }}
        >
          <div className="card">
            <Formik
              validateOnChange={true}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, actions) => {
                actions.setSubmitting(false);
                handleSubmit(values);
              }}
              validateOnMount
            >
              {({ values, handleChange, handleSubmit, setFieldValue }) => (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
                  }}
                  style={{ marginTop: "1rem" }}
                >
                  {/* {JSON.stringify(values)} */}
                  <div className="booking-detais d-flex flex-column gap-3">
                    <div className="title">Request a ride now</div>
                    <div className="form-item">
                      <input
                        name="name"
                        value={values.name}
                        type="text"
                        className="form-item-input"
                        placeholder="Your Name"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-item">
                      <input
                        name="pickupLocation"
                        type="text"
                        value={values.pickupLocation}
                        className="form-item-input"
                        placeholder="Enter pickup location"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-item">
                      <input
                        name="destination"
                        type="text"
                        value={values.destination}
                        className="form-item-input"
                        placeholder="Enter destination"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-item">
                      <input
                        name="pickupTime"
                        type="time"
                        value={values.pickupTime}
                        className="form-item-input"
                        placeholder="Time"
                        onChange={handleChange}
                      />
                    </div>
                    <div className="select-vehicle">
                      <div className="mb-2">Select your vehicle</div>
                      <div className="d-flex gap-3">
                        <div className="d-flex">
                          <RiEBike2Line className="icon"></RiEBike2Line>
                          <input
                            type="radio"
                            name="Bike"
                            value="BIKE"
                            onChange={() =>
                              setFieldValue("vehicleType", "BIKE")
                            }
                            id=""
                          />
                        </div>
                        <div className="d-flex">
                          <RiCarLine className="icon"></RiCarLine>
                          <input
                            type="radio"
                            name="Car"
                            value="CAR"
                            onChange={() => setFieldValue("vehicleType", "CAR")}
                            id=""
                          />
                        </div>
                        <div className="d-flex">
                          <RiBusLine className="icon"></RiBusLine>
                          <input
                            type="radio"
                            name="Bus"
                            value="BUS"
                            onChange={() => setFieldValue("vehicleType", "BUS")}
                            id=""
                          />
                        </div>
                        <div className="d-flex">
                          <RiTruckLine className="icon"></RiTruckLine>
                          <input
                            type="radio"
                            name="Lorry"
                            value="LORRY"
                            onChange={() =>
                              setFieldValue("vehicleType", "LORRY")
                            }
                            id=""
                          />
                        </div>
                      </div>
                    </div>
                    <button className="primary-btn" type="submit">
                      Request now
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Ride;
