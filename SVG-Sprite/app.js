import RatingStar from './rating-star.svg';
import LogoE from './logo-e.svg';

(function() {

  var insertHtml = `
    <div>
      <svg class="rating-star"><use xlink:href="${RatingStar}"/></svg>
    </div>
    <div>
      <svg class="logo-e" style="fill: #333;"><use xlink:href="${LogoE}"/></svg>
    </div>
  `;
  document.write(insertHtml);
}());
