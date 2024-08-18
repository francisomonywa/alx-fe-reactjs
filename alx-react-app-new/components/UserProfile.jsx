/* eslint-disable react/prop-types */
function UserProfile(props) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px"
    }}>
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <h2 style={{color: "blue"}}>{props.name}</h2>
      <p style={{fontWeight: "bold"}}>Age: {props.age}</p>
      <p>Bio: {props.bio}</p>
    </div>
  )
}
export default UserProfile