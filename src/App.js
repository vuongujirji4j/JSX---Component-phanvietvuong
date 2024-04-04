import logo from './logo.svg';
import './App.css';
import Func_JSX_phanvietvuong from './component/Func_JSX_phanvietvuong';

function App() {
  return (
    <section classname="App">
      <h1>demo JSx</h1>
      <Func_JSX_phanvietvuong/>
      <Func_JSX_phanvietvuong fullname="phan viet vuong" age="20"/>
      <class_phanvietvuong/>
        <hr/>
      <class_phanvietvuong info="hoc reactjs" time="11"/>
    </section>
  );
} 

export default App;
