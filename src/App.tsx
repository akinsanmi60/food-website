import CustomMenu from './shared/Menu/menu';
import Table from './shared/Table';
import { ReactComponent as DottedAction } from './assets/dottedThree.svg';

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-[80%]">
        <Table />

        <CustomMenu upwardThreeDot={true} />
      </div>
    </div>
  );
}

export default App;
