import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Heading,
  Image,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";

export const MovieDetail = () => {
  const [details, setDetails] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=0228b31e65217caa3256d1a04e3daafe`
    )
      .then((res) => res.json())
      .then(setDetails);

    console.log(details);
  }, [id]);

  if (!details) {
    return null;
  }

  return (
    <HStack>
      <Container
        mt="50px"
        borderRadius="10px"
        color="black"
        padding="2%"
        display="flex"
        key={details.id}
      >
        <Box>
          <Image
            borderRadius="10px"
            mr="10px"
            w="500px"
            src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}
          />
        </Box>
        <Container>
          <Box>
            <Heading fontSize="25px" padding="5px">
              {details.title}
            </Heading>

            <Text fontSize="15px" padding="5px">
              {details.overview}
            </Text>
            <Text fontSize="15px" padding="5px" fontWeight="bold">
              Release date: {details.release_date}
              <Button mt="10px">Watch now</Button>
            </Text>
          </Box>
        </Container>
      </Container>
    </HStack>
  );
};
