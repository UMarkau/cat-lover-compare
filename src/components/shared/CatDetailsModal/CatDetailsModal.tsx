import { useCallback, useState, useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";

import { Modal, IModalProps, Spinner } from "..";
import {
  getCat,
  ICat,
  addToFavourites,
  getFavouriteById,
  removeFromFavourites,
} from "../../../api";

import Styled from "./CatDetailsModal.styled";

export const CatDetailsModal = ({
  onClose,
}: Omit<IModalProps, "isVisible">) => {
  const [cat, setCat] = useState<ICat | null>(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [favouriteId, setFavouriteId] = useState<number | null>(null);
  const [isFavouriteLoading, setIsFavouriteLoading] = useState(false);

  const { catId } = useParams<{ catId: string }>();

  const fetchCat = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await getCat(catId as string);
      setCat(response.data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [catId]);

  const checkIsFavourite = useCallback(async (id: string) => {
    setIsFavouriteLoading(true);
    try {
      const response = await getFavouriteById(id);
      const favouriteItem = response.data[0];
      if (Boolean(favouriteItem)) {
        setFavouriteId(favouriteItem.id);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFavouriteLoading(false);
    }
  }, []);

  const handleAddToFavourites = useCallback(async () => {
    setIsFavouriteLoading(true);
    try {
      const response = await addToFavourites(catId as string);
      setFavouriteId(response.data.id);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFavouriteLoading(false);
    }
  }, [catId]);

  const handleRemoveFromFavourites = useCallback(async () => {
    setIsFavouriteLoading(true);
    try {
      await removeFromFavourites(favouriteId as number);
      setFavouriteId(null);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFavouriteLoading(false);
    }
  }, [favouriteId]);

  const handleClose = useCallback(() => {
    onClose();
    setCat(null);
    setFavouriteId(null);
  }, [onClose]);

  useEffect(() => {
    if (!catId) {
      return;
    }
    fetchCat();
  }, [catId, fetchCat]);

  const handleCopyUrlClick = async () => {
    const { href } = window.location;

    try {
      await navigator.clipboard.writeText(href);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    }
  };

  const catBreed = useMemo(() => {
    return cat?.breeds?.[0];
  }, [cat]);

  useEffect(() => {
    if (catId) {
      checkIsFavourite(catId);
    }
  }, [catId, checkIsFavourite]);

  if (isLoading) {
    return <Spinner isFullScreen />;
  }

  if (isError) {
    return <p>Something went wrong.</p>;
  }

  return (
    <Modal isVisible={Boolean(catId) && Boolean(cat)} onClose={handleClose}>
      <Styled.Wrapper>
        <Styled.Image src={cat?.url} />
        <Styled.ButtonsWrapper>
          <Styled.CopyLinkButton onClick={handleCopyUrlClick}>
            {isCopied ? "Copied!" : "Copy Link"}
          </Styled.CopyLinkButton>
          {favouriteId ? (
            <Styled.IconWrapper
              isLoading={isFavouriteLoading}
              onClick={handleRemoveFromFavourites}
            >
              <Styled.RemoveFromFavouritesIcon />
            </Styled.IconWrapper>
          ) : (
            <Styled.IconWrapper
              isLoading={isFavouriteLoading}
              onClick={handleAddToFavourites}
            >
              <Styled.AddToFavouritesIcon />
            </Styled.IconWrapper>
          )}
        </Styled.ButtonsWrapper>
        {Boolean(catBreed) && (
          <Styled.BreedsWrapper>
            <Styled.BreedsDescription>
              Breed:{" "}
              <Link to={`/breeds/${catBreed?.id}`}>{catBreed?.name}</Link>
            </Styled.BreedsDescription>
          </Styled.BreedsWrapper>
        )}
      </Styled.Wrapper>
    </Modal>
  );
};
