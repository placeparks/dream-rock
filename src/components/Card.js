export default function Card(){
    return(
        <>
        <div className="card mb-3" style={{backgroundColor:"transparent", border:"none"}}>
  <div className="row g-0">
    <div className="col-md-5 p-2">
    <div style={{ position: 'relative' }}>
  <img style={{ borderRadius: '7%' }} src="./card.png" className="img-fluid rounded-start" alt="..."/>
  <img style={{ position: 'absolute', top: '10%', left: '5%', transform: 'translate(-50%, -50%)' }} src="./tape.png" alt=""/>
</div>
    </div>
    <div className="col-md-5 offset-md-1">
  <div className="card-body" style={{color:"white", textAlign:"left"}}>
    <img style={{marginLeft:"75%"}} src="./frame.png" alt=""/>
    <h1 className="card-title">Book Shows & Ongoing Events title</h1>
    <p className="card-text">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>
    <span style={{fontSize: "110px", color: "yellow"}}>&#x2939;</span>
    <button style={{backgroundColor:"#56CCF2", padding:"10px", borderRadius:"7px"}}>View all Shows & Events</button>
  </div>
</div>
</div>
</div>
        </>
    )
}