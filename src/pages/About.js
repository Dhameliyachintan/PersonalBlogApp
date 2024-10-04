import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/blogdata/${id}`
        );
        setCard(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-4">Error: {error}</div>;
  if (!card) return <div className="text-center py-4">No card found.</div>;

  const handleEditClick = () => {
    navigate(`/Editdata/${id}`); 
  };

  return (
    <div className="container px-4 flex">
      <div className="flex justify-center py-8 flex-col mx-auto">
        <div className="text-end">
          <button
            onClick={handleEditClick}
            className="mt-4 mb-3 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
        <img src="https://via.placeholder.com/600x400" className="mb-3" />
        <h1 className="text-2xl font-bold mb-4 text-center">{card.title}</h1>
        <p className="text-gray-600 mt-2 text-start">{card.description}</p>
        <p className="text-gray-500 mt-2 text-sm text-start">
          Release Date: {new Date(card.releaseDate).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
