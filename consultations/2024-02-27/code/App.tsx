import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  return (
    <div className="page_wrapper">
      <Button $btnColor={'blue'} />
      <Button $btnColor={'red'} />
      <Button $disabled={true} />
      <Input $disabled={false} />
      <Input $disabled={true} />
    </div>
  );
}

export default App;
