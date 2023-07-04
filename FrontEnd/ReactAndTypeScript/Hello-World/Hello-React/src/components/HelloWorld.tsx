import ModuleDetails from "./ModuleDetails";
import Title from "./TIle";
import calculateAge from "../utils/age";

export default function HelloWorld() {
  const name = 'Kaique Oliveira Reis';
  const birth = '26/05/2004';
  const age = calculateAge(birth);

  return (
    <div>
      <h1 style={{ color: 'green', textAlign: 'center' }}>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>

  )
}