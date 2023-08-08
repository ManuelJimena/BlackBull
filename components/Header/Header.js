import "./Header.css";
export const Header = () => `
<div id="menu-btn" class="fas fa-bars icons"></div>
      <div id="search-btn" class="fas fa-search icons"></div>

      <nav class="navbar">
        <a href="#home">inicio</a>
        <a href="#menu">burguers</a>
        <a href="#entrantes">entrantes</a>
        <span class="space"></span>
        <a href="#postres">postres</a>
        <a href="#contact">contacto</a>
        <a href="#blogs">blogs</a>
      </nav>

      <a href="#" class="fas fa-shopping-cart icons"></a>

      <a href="#home" class="logo"><img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/logo_cmpk7e.png" alt="Imagen del logo" /></a>

      <form action="" class="search-form">
        <input
          type="search"
          name=""
          placeholder="buscar aquí..."
          id="search-box"
        />
        <label for="search-box" class="fas fa-search icons"></label>
      </form>
`;