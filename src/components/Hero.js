export default function Hero() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-5 w-100">
            <div className="card mb-3" style={{ border: "none", backgroundColor: "transparent" }}>
              <div className="row g-1">
                <div className="col-md-7 order-md-2 px-md-5">
                  <img src="./image.jpeg" className="img-fluid rounded-start" alt="..." style={{ marginBottom: "1rem", minHeight:"400px"}} />
                </div>
                <div className="col-md-5 order-md-1">
                  <div className="card-body mt-5" style={{ textAlign: "left", maxWidth: "50%", minWidth: "100%" }}>
                    <h1 className="card-title" style={{ fontWeight: "700", color: "#1E285F", marginBottom: "2rem" }}>Welcome to a World of Joy, Excitement, Wonder & Adventure</h1>
                    <p className="card-text" style={{ color: "#081354", marginBottom: "3rem" }}>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.</p>
                    <button style={{ backgroundColor: "#081354", color: "white", padding: "14px", borderRadius: "19px" }}>Create Your Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
