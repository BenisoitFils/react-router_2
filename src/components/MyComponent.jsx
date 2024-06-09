import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Redireccionar a "/dashboard"
    navigate('/dashboard');
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Go to Dashboard</button>
    </div>
  );
};

export default MyComponent;
