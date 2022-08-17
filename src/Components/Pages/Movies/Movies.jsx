import {
  Grid,
  Container,
  Box,
  Image,
  Heading,
  Link,
  Button,
  Center,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=0228b31e65217caa3256d1a04e3daafe&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data.results))

      .catch((error) => console.log(error));
  }, [page]);
  console.log(movie);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap={4} p="10px">
        {movie.map((item) => (
          <NavLink to={`/${item.id}`}>
            <Container
              w="250px"
              bg="blackAlpha.500"
              color="whiteAlpha.800"
              borderRadius="10px"
              padding="2%"
              display="flex"
              key={item.id}
            >
              <Box>
                <Heading fontSize="20px" padding="5px" textAlign="center">
                  {item.title}
                </Heading>
                <Image
                  mt="10px"
                  borderRadius="10px"
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />
              </Box>
            </Container>
          </NavLink>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" padding="20px">
        <Button mr="20px" ml="15px" onClick={() => setPage(page - 1)}>
          Prev
        </Button>
        <Button mr="20px" ml="15px" onClick={() => setPage(page + 1)}>
          Next
        </Button>
      </Box>
    </>
  );
};
