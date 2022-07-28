import Input from "../Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { userSignThunk } from "../../store/modules/user/thunks";
import { Form } from "./style";
import Button from "../Button";

const Login = () => {
  const dispatch = useDispatch();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatório!"),
    instrument: yup.string().required("Campo Obrigatório!"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFunction = (data) => {
    dispatch(userSignThunk(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <Input
        label="Nome"
        placeholder="Digite seu nome"
        register={register}
        name="name"
        error={errors.name?.message}
      />
      <Input
        label="Instrumento Musical"
        placeholder="Digite seu Instrumento Musical Favorito"
        register={register}
        name="instrument"
        error={errors.instrument?.message}
      />
      <Button type="submit">Entrar</Button>
    </Form>
  );
};

export default Login;
