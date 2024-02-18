import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <>
      <h2>Services page</h2>

      <Link to="/abi">ABI Search</Link>
      <Link to="/dcqr">DC QR Scanner</Link>
      <Link to="/vas">VAS</Link>
    </>
  );
};

export default Services;
