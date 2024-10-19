import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import Home from './pages/Home';
import Footer from './component/Footer';
import History from './pages/History';
import Service from './pages/Service';
import Fq from './pages/Fq';
import Boardstarf from './pages/Boardstarf';
import Dogaplications from './pages/Dogaplications';
import ReadytoAdopt from './pages/ReadytoAdopt';
import Adoptioninfor from './pages/Adoptioninfor';
import Discount from './pages/Discount';
import Emotional from './pages/Emotional';
import Details from './pages/Details';
import GoldenRetriever from './dogs/Large_Breeds/GoldenRetriever';
import GermanShepard from './dogs/Large_Breeds/GermanShepard';
import LabradorRetriever from './dogs/Large_Breeds/LabradorRetriever';
import Austrelia from './dogs/Large_Breeds/Austrelia';
import Maltese from './dogs/Small_breed /Maltese';
import Pug from './dogs/Small_breed /Pug';
import Chihuahua from './dogs/Small_breed /Chihuahua';
import ToyPoodle from './dogs/Small_breed /ToyPoodle';
import ShihTzu from './dogs/Small_breed /ShihTzu';
import { AuthProvider } from './context/AuthContext';
import Family from './pages/Family';
import Smaildogs from './pages/Smaildogs';
import Apartments from './pages/Apartments';
import Hypoallergenic from './pages/Hypoallergenic';
import Yorkshis_ from './Toy_breed/Yorkshis_';
import Chihuahuas from './Toy_breed/Chihuahuas';
import Poodles_ from './Toy_breed/Poodles_';
import Pomeranians_ from './Toy_breed/Pomeranians_';
import Midium_breed from './pages/Midium_breed';
import Dobermann from './pages/Dobermann';
import Alaskan from './pages/Alaskan';
import Airedale from './pages/Airedale';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <div className=' mt-11'>
          <AuthProvider>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='history' element={<History />} />
              <Route path='service' element={<Service />} />
              <Route path='fq' element={<Fq />} />
              <Route path='boardstaff' element={<Boardstarf />} />
              <Route path='dogapplication' element={<Dogaplications />} />
              <Route path='readytoadopt' element={<ReadytoAdopt />} />
              <Route path='adoptioninfo' element={<Adoptioninfor />} />
              <Route path='discount' element={<Discount />} />
              <Route path='emotional' element={<Emotional />} />
              <Route path='/details/:slug' element={<Details />} />
              <Route path='apartmentsdogs' element={<Apartments />} />
              <Route path='goldenRetriever' element={<GoldenRetriever />} />
              <Route path='germanshepherd' element={<GermanShepard />} />
              <Route path='labradorredtriever' element={<LabradorRetriever />} />
              <Route path='austrelia' element={<Austrelia />} />
              <Route path='maltese' element={<Maltese />} />
              <Route path='pug' element={<Pug />} />
              <Route path='chihuahua' element={<Chihuahua />} />
              <Route path='toypoodle' element={<ToyPoodle />} />
              <Route path='shihtzu' element={<ShihTzu />} />
              <Route path='family' element={<Family />} />
              <Route path='smaill_dogs' element={<Smaildogs />} />
              <Route path='hypoallergenic' element={<Hypoallergenic />} />
              <Route path='yorkshire' element={<Yorkshis_ />} />
              <Route path='chihuahuas' element={<Chihuahuas />} />
              <Route path='poodle' element={<Poodles_ />} />
              <Route path='pomeranian' element={<Pomeranians_ />} />
              <Route path='midum_breed' element={<Midium_breed />} />
              <Route path='dobermann' element={<Dobermann />} />
              <Route path='alaskan' element={<Alaskan />} />
              <Route path='airedale' element={<Airedale />} />


            </Routes>
          </AuthProvider>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
