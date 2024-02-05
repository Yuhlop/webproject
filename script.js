const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
    developer = filters.querySelector('#developer').value,
    connection = [...filters.querySelectorAll('#connection input:checked')].map(n => n.value),
    color = [...filters.querySelectorAll('#color input:checked')].map(n => n.value),
    form = [...filters.querySelectorAll('#form input:checked')].map(n => n.value),
    face = [...filters.querySelectorAll('#face input:checked')].map(n => n.value),
    priceMin = document.querySelector('#price-min').value,
    priceMax = document.querySelector('#price-max').value;

  outputGoods(DATA.filter(n => (
    (!developer || n.developer === developer) &&
    (!color.length || color.includes(n.color)) &&
    (!connection.length || connection.includes(n.connection)) &&
    (!form.length || form.includes(n.form)) &&
    (!face.length || face.includes(n.face)) &&
    (!priceMin || priceMin <= n.cost) &&
    (!priceMax || priceMax >= n.cost)
  )));
}

function outputGoods(goods) {
  document.getElementById('goods').innerHTML = goods.map(n => `
    <div class="single-goods">
      <h3>${n.name}</h3>
      <img src="${n.image}">
      <p>Цена: ${n.cost}</p>
      <button class="add-to-cart" data-art="${n.name}">Купить</button>
    </div>
  `).join('');
}

const DATA = [
  {
    "color" : "black",
    "name" : " Logitech G102",
    "cost" : 2850,
    "developer" : "Logitech",
    "image" : "https://c.dns-shop.ru/thumb/st4/fit/0/0/aa89e564bd6581cc019681e3cee72f62/a131f53a2c5644d07b7d535eb3a2743917b33abbafd1ee834f00442d4003bc90.jpg.webp",
    "connection": "wire",
    "form" : "simm",
    "face" : "glossy"
  },
  {
    "color" : "white",
    "name" : "A4Tech Bloody W60 Max",
    "cost" : 3299,
    "developer" : "Bloody",
    "image" : "https://micro-line.ru/images/detailed/1334/1405069_v01_b.jpg",
    "connection": "wire",
    "form" : "assim",
    "face" : "mat"
  },
  {
    "color" : "pink",
    "name" : "Razer Orochi V2, Quartz",
    "cost" : 4841,
    "developer" : "Razer",
    "image" : "https://avatars.mds.yandex.net/get-mpic/7552302/img_id3942244028165498203.jpeg/optimize",
    "connection": "wireless",
    "form" : "simm",
    "face" : "mat"
  },
  {
    "color" : "black",
    "name" : "Zowie EC2-CW",
    "cost" : 23990,
    "developer" : "Zowie",
    "image" : "https://shop.benq.ru/upload/iblock/83e/wnfcibnqate3g8gc5bzrkoniv5ub2nn2.png",
     "connection": "wireless",
     "form" : "asimm",
     "face" : "glossy"
  }
];

outputGoods(DATA);