import { Link } from "react-router-dom"
import Cart from "../db/Cart"
import { useContext/* , useEffect, useState  */} from "react"
import { Button } from "react-bootstrap";
import UserContext from "../context/user/UserContext";
import Products from "../db/Products";
import CartContext from "../context/CartContext";
/* import NavbarRes from "./NavRes"; */
import SkeletonNav from "../components/SkeletonNav";



const Nav = () => {
    const { /* infoUser, */ signOut, authStatus/* , verifyToken */ } = useContext(UserContext)

   /*  const [userName, setUserName] = useState("No conectado") */

    const { products, isLoading } = useContext(CartContext);
   
   /*  console.log(infoUser) */
  /*   useEffect(() => {
        const getInfoUser = async() => {
            await verifyToken()
            setUserName(infoUser.name)
        }
        getInfoUser()
    } , [userName])

 */

    //probando sin esto
   /*  useEffect(() => {
      const getInfoUser = async () => {
          await verifyToken();
      };
      getInfoUser();
  }, []);  */// Solo al montar
  
 /*  useEffect(() => {
      if (infoUser?.name) {
          setUserName(infoUser.name);
      }
  }, [infoUser]); */
  

  return (
    <header>
      
        <nav id="nav1">
          <div className="nav1-left" >
            <Link to="/"><div className="botika"></div></Link>
            <Products />
          </div>  
          <div className="nav1-right">
            <Link to="/help" onClick={window.scrollTo(0, 0)} className="text-link">
              <div >Centro de ayuda</div>
              {/*id="ayuda-logo" */}
            </Link>
            
            {authStatus ? <Button onClick={signOut} className="me-3">Logout</Button> : <Link to="/auth" className="text-link">
              <div>Log In</div>
              {/* id="login-logo" */}
              
              </Link>}
            
            
            {authStatus &&  
            <Link to="/user/profile" className="text-link">Mi Perfil</Link>
            
            }
            
            
              
            <Cart />
          </div>
        </nav>


        {/* <NavbarRes /> */}


        <nav id="nav2">
          
            <ul><Link to="/vinos" className="text-link-2 source-sans" >
              Vinos</Link>
              <ul className="new-container">
                <li>
                  <Link to="/vinoTinto" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                products.filter(products => products.sku === "00000001").map((product, i) => (
                    <div key={i} className="nav2-foto">
                      <img src={product.img} alt={product.name} />
                    </div>
                    ))}
                      Vino Tinto
                  </Link>
                  </li>
                <li><Link to="/vinoBlanco" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "vb000001").map((product, i) => (
                    <div key={i} className="nav2-foto">
                      <img src={product.img} alt={product.name} />
                    </div>
                   ))}
                  Vino Blanco
                  </Link></li>
              </ul> 
            </ul>
            <li><Link to="/cervezas" className="text-link-2 source-sans" >Cervezas</Link>
              
            </li>
            <ul><Link to="/destilados" className="text-link-2 source-sans" >Destilados</Link>
              <div className="new-container">
                <li><Link to="/pisco" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "p0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Pisco
                  </Link></li>
                <li><Link to="/tequila" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "t0000001").map((product, i) => (
                  <div key={i} className="nav2-foto ">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Tequila
                  </Link></li>
                <li><Link to="/ron" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "r0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Ron
                  </Link></li>
                <li><Link to="/vodka" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "v0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Vodka
                  </Link></li>
                <li><Link to="/whisky" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "w0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Whisky
                  </Link></li>
                <li><Link to="/gin" className="nav2-orden dest-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "g0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Gin
                  </Link></li>
              </div> 
            </ul>
            <li><Link to="/espumantes" className="text-link-2 source-sans" >Espumantes</Link>
              
            </li>
            <li><Link to="/licores" className="text-link-2 source-sans" >Licores</Link>
              
            </li>
            <li><Link to="/ofertas" className="text-link-2 source-sans" >Ofertas!</Link>
              
            </li>
            <ul><Link to="/otros" className="text-link-2 source-sans" >Otros</Link>
              <div className="new-container">
                <li><Link to="/agua" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "a0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Agua
                  </Link></li>
                <li><Link to="/bebidas" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "b0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Bebidas
                  </Link></li>
                <li><Link to="/energeticas" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "en000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  Energéticas
                  </Link></li>
                <li><Link to="/jugos" className="nav2-orden">
                  {isLoading && <SkeletonNav cards={1} />}
                  {products &&
                  products.filter(products => products.sku === "j0000001").map((product, i) => (
                  <div key={i} className="nav2-foto">
                    <img src={product.img} alt={product.name} />
                  </div>
                   ))}
                  <p>Jugos</p>
                  </Link>
                </li>
              </div>
            </ul>



            
          
        </nav>
       
        
    </header>
  )
}

export default Nav



