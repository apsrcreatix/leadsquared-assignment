// spinner loader
const Loader = ({ type = "primary", ...props }) => (
  <div className={`spinner-border text-${type}`} role="status" {...props}>
    <span className="sr-only">Loading...</span>
  </div>
); 

export default Loader;