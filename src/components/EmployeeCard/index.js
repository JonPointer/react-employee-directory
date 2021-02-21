import React from "react";
import "./style.css";



const EmployeeCard = (props) => {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Country:</strong> {props.country}
          </li>
          <li>
            <strong>Seniority:</strong> {props.seniority} Years
          </li>
        </ul>
      </div>
      <span onClick={() => props.removeEmployee(props.id)} className="remove">

        <i class="far fa-trash-alt"></i>
      </span>
    </div>
  );
}

export default EmployeeCard;
