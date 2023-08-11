import "./Main.css";
export const Main = () => `
<section class="home" id="home">
  <div class="content">
    <img
      data-aos="fade-up"
      data-aos-delay="150"
      src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691708972/burger-baner_zf9rey_gva69o.webp"
      alt="Imagen de hamburguesa"
    />
    <h1 data-aos="fade-up" data-aos-delay="300">Burguer Bliss</h1>
    <h2 data-aos="fade-up" data-aos-delay="300">The gourmet burguers</h2>
    <p data-aos="fade-up" data-aos-delay="450">
      Maestros de la parrilla, sabores supremos!!!
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
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/title-img_bct59n_v1j2t9.webp" alt="Imagen de adorno" />
    <h3>burguers</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="100">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/Mac_Cheese_iq5ueg_otg244.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Mac&Cheese</h3>
      <div class="price">10.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. cubierta por queso cheddar fundido, bacon, mac&cheese al dente con mucho queso y lascas de parmesano en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="200">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/JucyLucy_japzxe_kmhxml.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Jucy Lucy</h3>
      <div class="price">10.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. rellena de queso cheddar fundido, bacon, pomodoro y guacamole en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="300">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/BeefBourbon_zfonke_ukk8x5.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Beef Bourbon</h3>
      <div class="price">10.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de vaca de 180g. con mezclum, cheddar fundido, bacon, onion-rings y salsa Jack Daniel's caseraen en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="400">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710242/BlackBull/CheesePorn_pmggdq_zdd5lz.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cheese Porn</h3>
      <div class="price">10.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, cheddar fundido, bacon, cheddar crunch y nuestra salsa de cheddar fundida en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="500">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/BoomBBQ_lbbsuq_arsquc.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Boom BBQ</h3>
      <div class="price">11.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, cheddar fundido, huevo, bacon, cebolla crujiente, salsa BBQ y petazetas en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="600">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/CabraLoka_rrdzhv_wzsprl.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Cabra Loka</h3>
      <div class="price">11.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con mezclum, pomodoro, bacon, cebolla caramelizada, salsa miel&mostaza y queso de cabra caramelizada en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="650">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/RibJackDaniels_c7dvtb_tb1pbm.webp" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Ribs Jack Daniel's</h3>
      <div class="price">14.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Disco de carne de 180 g. con extra de carne de costilla de cerdo ibérico cocinada a baja temperatura con salsa Jack Daniel's casera, doble de cheddar fundido, bacon, salsa BBQ y cebolla crujiente en pan brioche.</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="700">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691666505/BlackBull/BlackBullX_noa3ko.png" alt="Imagen de hamburguesa" />
      <div class="content">
      <h3>Burguer Bliss X</h3>
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
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/title-img_bct59n_v1j2t9.webp" alt="Imagen de adorno" />
    <h3>entrantes</h3>
  </div>

  <div class="box-container">
  <div class="box" data-aos="fade-up" data-aos-delay="100">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/OnionRings_vafpw0_ndgpe9.webp" alt="Imagen de aros de cebolla" />
    <div class="content">
    <h3>Onion Rings</h3>
    <div class="price">6.50€</div>
      <details class="btn"><summary>Saber más</summary>
      <p>Aros de cebolla rebozados en panko, salsa cheedar y bacon crujiente.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="200">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/BravasBlacKBull_j4dxts_uftg0r.webp" alt="Imagen de patatas bravas" />
    <div class="content">
    <h3>Bravas Burguer Bliss</h3>
    <div class="price">6.50€</div>
      <details class="btn"><summary>Saber más</summary>
      <p>Crujientes bastones de patata especiados con nuestra salsa brava de chipotles ahumados.</p>
      <p>🔥🔥</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="300">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710242/BlackBull/CheedarCrunch_jmfgpz_f9yrwx.webp" alt="Imagen de queso cheddar rebozado" />
    <div class="content">
    <h3>Cheddar Crunch</h3>
    <div class="price">7.00€</div>
      <details class="btn"><summary>Saber más</summary>
      <p>Triangulos de queso cheddar rebozados en doritos tex-mex con salsa miel&mostaza.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="400">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/ChikenCrispy_bsfr4y_o4mp0y.webp" alt="Imagen de pollo rebozado" />
    <div class="content">
    <h3>Chicken Crispy</h3>
    <div class="price">7.00€</div>
      <details class="btn"><summary>Saber más</summary>
      <p>Jugosos solomillos de pollo marinados, rebozados en cornflakes con salsa BBQ.</p>
      </details>
    </div>
  </div>

  <div class="box" data-aos="fade-up" data-aos-delay="500">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/CroquetasBlackBull_kkiokm_voluri.webp" alt="Imagen de croquetas" />
  <div class="content">
  <h3>Croquetas Burguer Bliss</h3>
  <div class="price">8.00€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>Nuestras deliciosas croquetas caseras con queso de cabra, cebolla caramelizada y pomodoro.</p>
    </details>
  </div>
</div>

<div class="box" data-aos="fade-up" data-aos-delay="600">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/ChiliCheeseFries_imjxeq_ac1r8c.webp" alt="Imagen de patatas picantes" />
  <div class="content">
  <h3>Chili&Cheese Fries</h3>
  <div class="price">9.00€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>Crujientes bastones de patata especiados con chili, salsa de queso cheddar, bacon y jalapeños.</p>
    <p>🔥</p>
    </details>
  </div>
</div>

<div class="box" data-aos="fade-up" data-aos-delay="650">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/Cabramelizada_m4elin_i7f4r8.webp" alt="Imagen de ensalada" />
  <div class="content">
  <h3>Ensalada Cabramelizada</h3>
  <div class="price">9.50€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>Mezclum de lechugas, pomodoro, pasas, nueces caramelizadas, queso de cabra caramelizado y vinagreta Burguer Bliss.</p>
    </details>
  </div>
</div>

<div class="box" data-aos="fade-up" data-aos-delay="700">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/AveCesar_j79yiv_frctbw.webp" alt="Imagen de ensalada" />
  <div class="content">
  <h3>Ensalada Ave César</h3>
  <div class="price">9.50€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>Mezclum de lechugas, pomodoro, cebolla crujiente, chicken crispy, queso parmesano y salsa césar.</p>
    </details>
  </div>
</div>

<div class="box" data-aos="fade-up" data-aos-delay="750">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/NachosMonterrey_wif3ku_tqqqqb.webp" alt="Imagen de nachos" />
  <div class="content">
  <h3>Nachos Monterrey</h3>
  <div class="price">9.50€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>Totopos con chili casero, salsa cheddar, jalapeños, guacamole y pico de gallo.</p>
    <p>🔥</p>
    </details>
  </div>
</div>

<div class="box" data-aos="fade-up" data-aos-delay="800">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/ComboBlackBull_nsogmr_txrhlp.webp" alt="Imagen de combo de alimentos" />
  <div class="content">
  <h3>Combo Burguer Bliss</h3>
  <div class="price">11.00€</div>
    <details class="btn"><summary>Saber más</summary>
    <p>6 aros de cebolla, 3 cheddar crunch, 2 chicken crispy + salsa BBQ y miel&mostaza.</p>
    </details>
  </div>
</div>
</div>
</section>

<section class="postres" id="postres">
  <div class="heading">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/title-img_bct59n_v1j2t9.webp" alt="Imagen de adorno" />
    <h3>postres</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="100">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/OreoCheeseCake_oythjn_qy0wyr.webp" alt="Imagen de tarta" />
      <div class="content">
      <h3>Cheescake oreo</h3>
      <div class="price">5.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Descripción</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="200">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/TartaKinderBueno_igbmsr_lnrfbn.webp" alt="Imagen de tarta" />
      <div class="content">
      <h3>Tarta de Kinder Bueno</h3>
      <div class="price">5.00€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Descripción</p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="300">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710241/BlackBull/BlacBullPostreX_duhr35_womuye.webp" alt="Imagen de tarta" />
      <div class="content">
      <h3>Postre Burguer Bliss X</h3>
      <div class="price">???€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Pregunta en nuestro establecimiento o consulta nuestras redes sociales para descubrir el postre de la semana.</p>
        </details>
      </div>
    </div>
  </div>
</section>

<section class="menús" id="menús">
  <div class="heading">
  <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/title-img_bct59n_v1j2t9.webp" alt="Imagen de adorno" />
    <h3>menús</h3>
  </div>

  <div class="box-container">
    <div class="box" data-aos="fade-up" data-aos-delay="100">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/FaltaImagen_vakih7_lmryfy.webp" alt="Imagen de menú" />
      <div class="content">
      <h3>Menú para dos</h3>
      <div class="price">28.00€</div>
        <details class="btn menúdos"><summary>Saber más</summary>
        <p>2 Burguer Bliss + 1 entrante a elegir (Bravas Burguer Bliss, Onion Rings, Cheddar Crunch, Sticks Provolone o Chicken Crispy) + Patatas + Bebida <span>(solo para domicilio o recoger en local)</span></p>
        </details>
      </div>
    </div>

    <div class="box" data-aos="fade-up" data-aos-delay="200">
      <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710239/BlackBull/FaltaImagen_vakih7_lmryfy.webp" alt="Imagen de menú" />
      <div class="content">
      <h3>Menú infantil</h3>
      <div class="price">6.50€</div>
        <details class="btn"><summary>Saber más</summary>
        <p>Hamburguesa 100g vacuno o solomillo Chicken crispy con queso cheddar + Patatas + Danonino.</p>
        </details>
      </div>
    </div>

  </div>
</section>

<section class="contact" id="contact">
  <div class="heading">
    <img src="https://res.cloudinary.com/dhjmt9vvq/image/upload/v1691710240/BlackBull/title-img_bct59n_v1j2t9.webp" alt="Imagen de adorno" />
    <h3>contacto</h3>
  </div>

  <div class="row">
    <iframe
      data-aos="fade-up"
      data-aos-delay="150"
      class="map"
      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12171.300997579521!2d-3.4671684406248726!3d40.30183890116066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ses!4v1691784856687!5m2!1ses!2ses"
      allowfullscreen=""
      loading="lazy" title="Google maps"
    ></iframe>

    <div class="contactar">
      <div class="icons-container">
        <div class="icons" data-aos="fade-up" data-aos-delay="150">
          <a href="https://www.facebook.com/" target="_blank">
            <i class="fab fa-facebook-f"></i>
            <h3>facebook</h3>
          </a>
        </div>

        <div class="icons" data-aos="fade-up" data-aos-delay="300">
          <a href="https://www.instagram.com/" target="_blank">
            <i class="fab fa-instagram"></i>
            <h3>instagram</h3>
          </a>
        </div>

        <div class="icons" data-aos="fade-up" data-aos-delay="450">
          <a href="tel:+34911111111">
            <i class="fas fa-phone"></i>
            <h3>111-111-111</h3>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
`;