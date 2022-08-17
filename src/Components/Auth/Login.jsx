import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

const schema = object({
  email: string().email("Invalid email").required(),
  password: string().min(8).required(),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async ({ email, password }) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=0228b31e65217caa3256d1a04e3daafe",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: email, password }),
      }
    );
    const user = await response.json();
    console.log(user);
  };

  return (
    <>
      <VStack as="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.email}>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" {...register("email")} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.password}>
          <FormLabel htmlFor="password">Password</FormLabel>
          <Input id="password" {...register("password")} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          size="md"
          w="100%"
          colorScheme="blue"
          isLoading={isSubmitting}
        >
          Login
        </Button>
      </VStack>
    </>
  );
};
