import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
  return (
    <header>
        <h1>Coca-Cola Shop</h1>

        <nav>

            <ul>

                <li style={{color:"red"}}>Coca-Cola</li>
                <li style={{color:"green"}}>Sprite</li>
                <li style={{color:"orange"}}>Fanta</li>               

            </ul>

        </nav>

        <CartWidget />

    </header>
  )
}

export default NavBar
