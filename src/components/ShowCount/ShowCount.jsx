import "./ShowCount.css";

const ShowCount = (props) => {
  console.log("soy un contador");

  return (
    <div>
      <h2>Haz click aquí {props.count} {props.count === 1 ? "vez" : "veces"} </h2>
    </div>
  )
}
export default ShowCount;