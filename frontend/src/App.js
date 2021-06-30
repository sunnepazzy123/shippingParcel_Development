import HomeScreen from './screens/HomeScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen'
import SendPackageScreen from './screens/SendPackageScreen'
import SearchTrackingScreen from './screens/SearchTrackingScreen'
import PackageListScreen from './screens/PackageListScreen'
import UserListScreen from './screens/UserListScreen'
import EditPackageScreen from './screens/EditPackageScreen'
import UserEditScreen from './screens/UserEditScreen'
import AboutScreen from './screens/AboutScreen'

import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'


function App() {
  return (
   <Router>
     <Header />
     <main className='py-3'>
      <Container>
        <Route path='/' component={HomeScreen} exact />
        <Route path='/register' component={RegisterScreen} exact />
        <Route path='/login' component={LoginScreen} exact />
        <Route path='/admin/profile' component={ProfileScreen} exact />
        <Route path='/admin/sendPackage' component={SendPackageScreen} exact />
        <Route path='/searchTracking' component={SearchTrackingScreen} exact />
        <Route path='/admin/packagelist' component={PackageListScreen} exact />
        <Route path='/admin/userlist' component={UserListScreen} exact />
        <Route path='/admin/users/:id' component={UserEditScreen} exact />
        <Route path='/admin/parcels/:id' component={EditPackageScreen} exact />
        <Route path='/aboutUs' component={AboutScreen} exact />





       


        

      </Container>
     </main>
     <Footer />
   </Router>
  );
}

export default App;
