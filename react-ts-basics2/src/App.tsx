import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import Form, { FormHandle } from "./components/Form";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: string};
    console.log(extractedData);
    customForm.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name"/>
        <Input type="number" label="Age" id="age"/>
        <p>
          <Button el={"button"}>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
