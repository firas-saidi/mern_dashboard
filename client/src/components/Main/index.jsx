import '../../App.css'
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RigtSide/RightSide';
import Sidebar from '../../components/Sidebar';
import Topbar from '../topbar/Topbar';

function Main() {
  return (
    <>
    <Topbar/>
    <div className="App">
      <div className="AppGlass">
        <Sidebar/>
        <MainDash/>
        <RightSide/>
      </div>
    </div>
    </>
  );
}

export default Main;
