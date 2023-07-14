import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Card, Spinner, CatDetailsModal } from "../shared";
import { IFavourite, getFavourites } from "../../api";

import Styled from "./FavouritesPage.styled";

export const FavouritesPage = () => {
  const [favourites, setFavourites] = useState<IFavourite[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const fetchFavourites = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getFavourites();
      setFavourites(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    fetchFavourites();
    navigate("/favourites");
  }, [navigate, fetchFavourites]);

  useEffect(() => {
    fetchFavourites();
  }, [fetchFavourites]);

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  return (
    <Styled.Wrapper>
      {favourites.map((favourite) => (
        <Link key={favourite.id} to={`${favourite.image_id}`}>
          <Card>
            <Styled.CatImage src={favourite.image.url} />
          </Card>
        </Link>
      ))}
      <CatDetailsModal onClose={handleCloseModal} />
    </Styled.Wrapper>
  );
};
