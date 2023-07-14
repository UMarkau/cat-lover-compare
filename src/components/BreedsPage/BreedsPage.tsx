import { useEffect, useState, useCallback } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { getBreeds, IBreed } from "../../api";
import { Spinner, CatDetailsModal } from "../shared";
import { BreedDetailsModal } from "./components";

import Styled from "./BreedsPage.styled";

export const BreedsPage = () => {
  const [breeds, setBreeds] = useState<IBreed[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { breedId } = useParams<{ breedId: string; catId: string }>();

  const fetchBreeds = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getBreeds();
      setBreeds(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleCloseModal = useCallback(() => {
    navigate(`/breeds/${breedId}`);
  }, [breedId, navigate]);

  useEffect(() => {
    fetchBreeds();
  }, [fetchBreeds]);

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  return (
    <Styled.Wrapper>
      {Boolean(breeds.length) &&
        breeds.map((breedInfo) => (
          <Styled.BreedItem key={breedInfo.id}>
            <Link to={breedInfo.id}>{breedInfo.name}</Link>
          </Styled.BreedItem>
        ))}
      <BreedDetailsModal />
      <CatDetailsModal onClose={handleCloseModal} />
    </Styled.Wrapper>
  );
};
