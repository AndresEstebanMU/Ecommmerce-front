import { Routes, Route} from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../views/Home'
import Help from '../views/Help'
import Login from '../views/Login'
import Search from '../views/Search'
import Wishlist from '../views/Wishlist'
import Buy from '../views/Buy'
import Vinos from '../views/nav2/Vinos'
import Cervezas from '../views/nav2/Cervezas'
import Destilados from '../views/nav2/Destilados'
import Espumantes from '../views/nav2/Espumantes'
import Ofertas from '../views/nav2/Ofertas'
import Otros from '../views/nav2/Otros'
import Licores from '../views/nav2/Licores'

import VinosTintos from '../db/VinosDb/VinosTintos'
import VinosBlancos from '../db/VinosDb/VinosBlancos'
import PiscosDb from '../db/DestiladosDb/PiscosDb'
import TequilasDb from '../db/DestiladosDb/tequilaDb'
import RonDb from '../db/DestiladosDb/RonDb'
import VodkaDb from '../db/DestiladosDb/VodkaDb'
import WhiskyDb from '../db/DestiladosDb/WhiskyDb'
import GinDb from '../db/DestiladosDb/GinDb'
import Aguas from '../db/OtrosDb/Aguas'
import Bebidas from '../db/OtrosDb/Bebidas'
import Energeticas from '../db/OtrosDb/Energeticas'
import Jugos from '../db/OtrosDb/Jugos'
import Auth from '../views/auth/Auth'
import Profile from '../views/profile/Profile'
import { CardBlog } from '../views/CardBlog'





const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/help' element={<Help />} />
                <Route path='/login-register' element={<Login />} />
                <Route path='/search' element={<Search />} />
                <Route path='/wishlist' element={<Wishlist />} />
                <Route path='/buy' element={<Buy />} />
                <Route path='/vinos' element={<Vinos />} />
                <Route path='/cervezas' element={<Cervezas />} />
                <Route path='/destilados' element={<Destilados />} />
                <Route path='/espumantes' element={<Espumantes />} />
                <Route path='/licores' element={<Licores />} />
                <Route path='/ofertas' element={<Ofertas />} />
                <Route path='/otros' element={<Otros />} />

                <Route path='/vinoTinto' element={<VinosTintos />} />
                <Route path='/vinoBlanco' element={<VinosBlancos />} />

                <Route path='/pisco' element={<PiscosDb />} />
                <Route path='/tequila' element={<TequilasDb />} />
                <Route path='/ron' element={<RonDb />} />
                <Route path='/vodka' element={<VodkaDb />} />
                <Route path='/whisky' element={<WhiskyDb />} />
                <Route path='/gin' element={<GinDb />} />

                <Route path='/agua' element={<Aguas/>} />
                <Route path='/bebidas' element={<Bebidas />} />
                <Route path='/energeticas' element={<Energeticas />} />
                <Route path='/jugos' element={<Jugos />} />


                <Route path='/auth' element={<Auth />} />
                <Route path='/user/profile' element={<Profile />} />
                <Route path='/cardBlog' element={<CardBlog />} />

               
            </Route>
        </Routes>
    </>
  )
}

export default AppRoutes