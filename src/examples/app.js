import {init} from './../map';
function main() {
  const element = document.getElementById('map');

  init('map-config.json', element).then((map) => {
    console.log(map.getZoom());

    const layers = map.getLayers();
    const cartoLayer = layers[1];

    const toggleBtn = document.getElementById('toggleBtn');
    toggleBtn.addEventListener('click', () => {
      if (cartoLayer.isVisible()) {
        cartoLayer.hide();
      } else {
        cartoLayer.show();
      }
    });

    const changeSqlBtn = document.getElementById('changeSqlBtn');
    changeSqlBtn.addEventListener('click', () => {
      cartoLayer.setSQL('select * from european_countries_e LIMIT 10');
    });
  });
}

document.addEventListener('DOMContentLoaded', main);
