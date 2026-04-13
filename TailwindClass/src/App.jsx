import { Input } from "./components/Input";
import { Button } from "./components/Button";

export default function App() {
  return (
    <div className="h-screen bg-blue-700">
       <Input type="text" placeholder={"Username"}></Input>
       <Button>SignIn</Button>
    </div>
   
  );
}