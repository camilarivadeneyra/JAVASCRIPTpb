class Producto {
    constructor (nombre, id, precio, img, descripcion) {
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
        this.img = img;
        this.descripcion = descripcion
    }
}

const catalogo = [];

const producto1 = new Producto("ALTURA 1 - Blend.","01",2400,"./pblest/images/BLEND.png","Se caracteriza por su dulzor y su prolongado retrogusto. Un café con un perfil de sabor redondo y con acidez muy balanceada. Complejo y con cuerpo.");
const producto2 = new Producto("COLOMBIA, San Lorenzo.","02",2200,"./pblest/images/COLOMBIAsl.png","Un café delicado, floral y sumamente complejo que siempre invita a una taza más.",);
const producto3 = new Producto("COLOMBIA, Cartago.","03",1800, "pblest/images/COLOMBIAca.png","Un hallazgo raro y codiciado, un híbrido que se destaca en todo sentido desde el llamativo color rosa de sus frutos hasta su sabor notablemente dulce.");
const producto4 = new Producto("ETIOPIA, Shara.","04",2400,"./pblest/images/ETIOPIAsh.png","Tan exótico como su origen, es un blend de varietales reliquia locales. Con cuerpo sedoso y acidez vibrante, se destaca por sus delicadas notas cítricas que recuerdan a la lima y al quinoto, también a los frutos amarillos.");
const producto5 = new Producto("ETIOPIA, Uraga.","05",2300,"./pblest/images/ETIOPIAu.png","Un café con atributos balanceados que abrazan el paladar. Su retrogusto jugoso, acidez vibrante y cuerpo sedoso definen una experiencia completa y agradable");
const producto6 = new Producto("GUATEMALA, Huehuetenango","06",1800,"./pblest/images/GUATEMALAhu","Es un cafe particularmente tostado, con lotes de avellanas, toffee y caramelo. Una de las tazas más sabrosas del mundo y no por nada te decimos que te roba una sonrisa.");
const producto7 = new Producto("KENIA, Kirinyaga.","07",2200,"./pblest/images/KENIAki.png","Un café particularmente mantecoso en fragancia, en boca presenta notas a manzana roja, mandarina, caramelo y miel de maple, con un retrogusto jugoso y prolongado. Se destaca por su acidez crujiente, vibrante y su cuerpo almibarado y redondo.");
const producto8 = new Producto("NICARAGUA, Jinotega.","08",1600,"./pblest/images/NICARAGUAji.png","Es un café que cautiva por su complejidad. Dulce y cremoso, con marcadas notas a frutos rojos. Una sensaciòn aromatica floral que lo convierte en ùnico.");
const producto9 = new Producto("NICARAGUA, Matagalpa.","09",1800,"./pblest/images/NICARAGUAma.png","Un café natural, exótico y complejo. Intensidad en fragancias a avellanas y aroma a frutos rojos. En frío presenta un marcado aroma a rosa mosqueta. Su sabor fresco y frutal, fondo sutil a lima y posgusto a menta y peperina.");
const producto10 = new Producto("PERU, Amazonas.","10",2100,"./pblest/images/PERUam.png","Es un lote jugoso, con cuerpo cremoso y notas cítricas que recuerdan al té de limón. Dulce, con un retrogusto limpio y acidez vibrante, expresa su mejor versión en métodos de filtro.");


catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10);

export {catalogo};











