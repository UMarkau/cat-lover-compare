import { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { Modal, Spinner } from "../../../shared";
import { getCatsByBreedId, ICat } from "../../../../api";

import Styled from "./BreedDetailsModal.styled";

export const BreedDetailsModal = () => {
  const [cats, setCats] = useState<ICat[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const { breedId } = useParams<{ breedId: string }>();

  const fetchCatsByBreedId = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getCatsByBreedId(breedId as string);
      setCats(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [breedId]);

  const handleClose = () => {
    setCats([]);
    navigate("/breeds");
  };

  useEffect(() => {
    if (breedId) {
      fetchCatsByBreedId();
    }
  }, [breedId, fetchCatsByBreedId]);

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  return (
    <Modal isVisible={Boolean(cats.length)} onClose={handleClose}>
      <Styled.Wrapper>
        {cats.map((catInfo) => (
          <Link key={catInfo.id} to={`${catInfo.id}`}>
            <Styled.Image src={catInfo.url} />
          </Link>
        ))}
      </Styled.Wrapper>
    </Modal>
  );
};
