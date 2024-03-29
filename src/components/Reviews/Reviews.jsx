import { fetchReviews } from "components/API/API";
import { Container } from "components/App.styled";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";



const Reviews = () => {

  const { id } = useParams();
  const [reviews, setReviews] = useState(() => []);
  

  useEffect(() => {
    fetchReviews(id).then(data => {
      setReviews(data)
    });
  }, [id]);
  console.log(reviews)

  return (
    <Container>
      <div>
        {reviews.length === 0 ? (
          <p>No reviews available</p>
        ) : (
            <ul>
            <h3>Users reviews</h3>
            {reviews.map(({ author, content, id, author_details }) => {
              return (
                <li key={id}>
                  <h4>{author}</h4>
                  <p>{content}</p>
                  {author_details.rating ? author_details.rating : 'N/A'}
                </li>
              )
            }
              
            )}
          </ul>)}
      </div>
    </Container>
  )
};


export default Reviews