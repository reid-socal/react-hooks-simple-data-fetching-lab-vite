
import { useState, useEffect } from "react";

const DOG_API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  function fetchDog() {
    setIsLoading(true);
    return fetch(DOG_API_URL)
      .then((r) => r.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" />
      )}
      <button onClick={fetchDog}>Get New Dog</button>
    </div>
  );
}

export default App;