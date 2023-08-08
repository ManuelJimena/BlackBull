import "./BurguerCard.css";
export const BurguerCard = (burguer) => `
<div class="portfolio-box">
      <img src=${burguer.image} alt=${burguer.description}/>
    <div class="portfolio-layer">
      <h4>${burguer.description}</h4>
    </div>
</div>
`;