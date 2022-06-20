import Navbar from './components/Navbar/Navbar';
import Alert from './components/Alert/Alert';
import {Button} from './components/Button/Button';
import Spacer from './components/Spacer/Spacer';
import Card from './components/Card/Card';
import './App.css';

function App() {
  return (
    <div className="outer-container">
      <Navbar title="Hello"/>
      <Spacer />
      <Alert 
        text="This is a demo showing the success alert!"
        type="success"
        isStatic={true}
      />
      <div style={{width: '50%', display: 'flex', flexDirection: 'row'}}>
            <Card data={
                {title: 'Netherlands', desc: 'A country in northwestern Europe, is known for a flat landscape of canals, tulip fields, windmills and cycling routes', img: 'https://www.expatica.com/app/uploads/sites/3/2014/05/permanent-residence-netherlands.jpg'}
            }/>
            <Card data={{title: 'India', desc: ' It is the seventh-largest country by area, the second-most populous country, and the most populous democracy in the world.', img: 'https://cdn.mos.cms.futurecdn.net/3FnczamRyWU6MvRMEXWaGD.jpg'}}/>
        </div>
      <Button variant="outline">This is a button</Button>
    </div>
  );
}

export default App;