import "./Main.css";
export const Main = () => `
<section class="home" id="home">
  <div class="content">
    <img
      data-aos="fade-up"
      data-aos-delay="150"
      src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691671444/BlackBull/burger-baner_zf9rey.png"
      alt="Imagen de hamburguesa"
    />
    <h1 data-aos="fade-up" data-aos-delay="300">Black Bull</h1>
    <h2 data-aos="fade-up" data-aos-delay="300">
      The gourmet burguers <span>by Javito</span>
    </h2>
    <p data-aos="fade-up" data-aos-delay="450">
      Tu cabeza quiere gimnasio... Pero tu corazón quiere hamburguesas!!!
    </p>
  </div>
</section>

<section class="service">
  <div class="box" data-aos="fade-up" data-aos-delay="150">
    <i class="fas fa-hamburger"></i>
    <h3>máxima calidad</h3>
    <p>
    Nuestros productos son de máxima calidad y colaboramos exclusivamente con proveedores que comparten nuestra pasión por la excelencia.
    </p>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="300">
    <i class="fas fa-shipping-fast"></i>
    <h3>servicio a domicilio</h3>
    <p>
      Disponemos de servicio a domicilio, para que puedas disfrutar de nuestros productos sin salir de casa.
    </p>
  </div>
</section>

<section class="menu" id="menu">
  <div class="heading">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/title-img_bct59n.png" alt="Imagen de adorno" />
    <h3>burguers</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="150">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/Mac_Cheese_iq5ueg.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Mac&Cheese</h3>
      <div class="price">10.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. cubierta por queso cheddar fundido, bacon, mac&cheese al dente con mucho queso y lascas de parmesano en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="300">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/JucyLucy_japzxe.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Jucy Lucy</h3>
      <div class="price">10.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. rellena de queso cheddar fundido, bacon, pomodoro y guacamole en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="450">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666504/BlackBull/BeefBourbon_zfonke.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Beef Bourbon</h3>
      <div class="price">10.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. con mezclum, cheddar fundido, bacon, onion-rings y salsa Jack Daniel's caseraen en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="600">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/CheesePorn_pmggdq.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheese Porn</h3>
      <div class="price">10.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, cheddar fundido, bacon, cheddar crunch y nuestra salsa de cheddar fundida en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="750">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/BoomBBQ_lbbsuq.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Boom BBQ</h3>
      <div class="price">11.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, cheddar fundido, huevo, bacon, cebolla crujiente, salsa BBQ y petazetas en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="900">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/CabraLoka_rrdzhv.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cabra Loka</h3>
      <div class="price">11.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, pomodoro, bacon, cebolla caramelizada, salsa miel&mostaza y queso de cabra caramelizada en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1050">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691673378/BlackBull/FaltaImagen_vakih7.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Mac&Cabra</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con queso cheddar fundido, bacon, mac&cheese al dente con mucho queso, queso de cabra caramelizado, salsa miel&mostaza y cebolla caramelizada en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1300">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691673378/BlackBull/FaltaImagen_vakih7.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Jucy Lucy Porn</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. rellena de queso cheddar fundido, guacamole, cheddar fundido, bacon, cheddar crunch y salsa cheddar en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1450">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691673378/BlackBull/FaltaImagen_vakih7.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Boom Bourbon</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, guacamole, cheddar fundido, bacon crispy, huevo, onion-rings, salsa bourbon de tennese y petazetas en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1600">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691673378/BlackBull/FaltaImagen_vakih7.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Crunch Cheesebacon</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. doble de cheddar fundido, doble de bacon, confitura de bacon casera, salsa bourbon y nuestro pan crujiente de provolone fundido.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1700">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691654066/BlackBull/RibJackDaniels_c7dvtb.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Ribs Jack Daniel's</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con extra de carne de costilla de cerdo ibérico cocinada a baja temperatura con salsa Jack Daniel's casera, doble de cheddar fundido, bacon, salsa BBQ y cebolla crujiente en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="1800">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/BlackBullX_noa3ko.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Black Bull X</h3>
      <div class="price">???€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Pregunta en nuestro establecimiento o consulta nuestras redes sociales para descubrir la hamburguesa del mes.</p>
        </details>
      </div>
    </div>

  </div>
</section>

<section class="entrantes" id="entrantes">
  <div class="heading">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/title-img_bct59n.png" alt="Imagen de adorno" />
    <h3>entrantes</h3>
  </div>

  <div class="box-container">
  <div class="box" data-aos="fade-up" data-aos-delay="150">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-1_wfu8kq.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="300">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-2_pku6dh.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="450">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-3_vgdfyt.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="600">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-4_ix6enk.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="750">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-5_v3l6pa.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="900">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/about-img_xptjxk.png" alt="Imagen de hamburguesa" />
    <div class="content">
    <h3>Cheeseburguer</h3>
    <div class="price">16.99€</div>
      <details class="btn"><summary>Read More</summary>
      <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
      </details>
    </div>
  </div>
</div>
</section>

<section class="postres" id="postres">
  <div class="heading">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/title-img_bct59n.png" alt="Imagen de adorno" />
    <h3>postres</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="150">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-1_wfu8kq.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="300">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-2_pku6dh.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="450">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-3_vgdfyt.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="600">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-4_ix6enk.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="750">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/product-5_v3l6pa.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="900">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/about-img_xptjxk.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheeseburguer</h3>
      <div class="price">16.99€</div>
        <details class="btn"><summary>Read More</summary>
        <p>Lorem fistrum sexuarl diodeno de la pradera llevame al sircoo jarl está la cosa muy malar fistro al ataquerl. Qué dise usteer ahorarr mamaar apetecan no te digo trigo por no llamarte Rodrigor por la gloria de mi madre. A peich amatomaa tiene musho peligro pecador va usté muy cargadoo amatomaa. Ahorarr a wan la caidita caballo blanco caballo negroorl tiene musho peligro apetecan.</p>
        </details>
      </div>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <div class="heading">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/title-img_bct59n.png" alt="Imagen de adorno" />
    <h3>contacto</h3>
  </div>

  <div class="row">
    <iframe
      data-aos="fade-up"
      data-aos-delay="150"
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.4042444683428!2d-3.44156813600311!3d40.3022110135694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd423f0b0e7931d9%3A0xb8857ad35f5d55d5!2sCalle%20Carr.%20de%20Loeches%2C%207%2C%2028500%20Arganda%20del%20Rey%2C%20Madrid!5e0!3m2!1ses!2ses!4v1691433512274!5m2!1ses!2ses"
      allowfullscreen=""
      loading="lazy" title="Google maps"
    ></iframe>

    <div class="contactar">
      <div class="icons-container">
        <div class="icons" data-aos="fade-up" data-aos-delay="150">
          <a href="https://www.facebook.com/people/Blackbull-Arganda/100064152609459/" target="_blank">
            <i class="fab fa-facebook-f"></i>
            <h3>facebook</h3>
            <p>facebook/Blackbull</p>
          </a>
        </div>

        <div class="icons" data-aos="fade-up" data-aos-delay="300">
          <a href="https://www.instagram.com/blackbull__arganda/" target="_blank">
            <i class="fab fa-instagram"></i>
            <h3>instagram</h3>
            <p>instagram/BlackBull</p>
          </a>
        </div>

        <div class="icons" data-aos="fade-up" data-aos-delay="450">
          <a href="tel:+34917036113">
            <i class="fas fa-phone"></i>
            <h3>teléfono</h3>
            <p>917-036-113</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="blogs" id="blogs">
  <div class="heading">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494036/BlackBull/title-img_bct59n.png" alt="Imagen de adorno" />
    <h3>daily posts</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="150">
      <div class="image">
        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/blog-1_trtblj.png" alt="Imagen hamburguesa" />
        <div class="icons">
          <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
          <a href="#"> <i class="fas fa-user"></i> by admin </a>
        </div>
      </div>
      <div class="content">
        <h3>blog title goes here.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptas, maxime.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="300">
      <div class="image">
        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/blog-2_lwgzqp.jpg" alt="Imagen hamburguesa" />
        <div class="icons">
          <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
          <a href="#"> <i class="fas fa-user"></i> by admin </a>
        </div>
      </div>
      <div class="content">
        <h3>blog title goes here.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptas, maxime.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="450">
      <div class="image">
        <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691494037/BlackBull/blog-3_kenfpd.jpg" alt="Imagen hamburguesa" />
        <div class="icons">
          <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2022 </a>
          <a href="#"> <i class="fas fa-user"></i> by admin </a>
        </div>
      </div>
      <div class="content">
        <h3>blog title goes here.</h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Voluptas, maxime.
        </p>
        <a href="#" class="btn">read more</a>
      </div>
    </div>
  </div>
</section>
`;