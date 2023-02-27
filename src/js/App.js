import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import '../css/App.css';


///////////////// 1. Step  /////////////////
// Postların Fotoğraf Konumları 
const imageSources = {
  "logo" : "./images/logo.png",
  "SpordaBasari"     : "./images/SpordaBasari.webp",
  "BilimselArastirma" : "./images/BilimselArastirma.webp",
  "TubitakBasari"    : "./images/TubitakBasari.webp",
  "KureselLigdeBasari": "./images/KüreselLigdeBasari.webp",
  "IletisimBasarininAdresi" : "./images/IletisimBasarininAdresi.webp",
  "SporKarisik" : "./images/SporKarisik.webp"
}
const img = JSON.parse(JSON.stringify(imageSources));


function App() {
  return (
    
    <div className="App">

      {NavigateBar()}
      {Baslik()}
      {Blog()}
      {footer()}

    </div>
  );
}

function NavigateBar(){
return(

      <Navbar className='navbar sticky-top'  style={{backgroundColor: "darkcyan"}} >
        {Uni_Logo()}

        {redirectButtons()}

        
      </Navbar>
);
}

function Uni_Logo()
{
  return(
      <a className='navbar-brand' href='https://www.alperbesli.com'>
        <img src={require(`${img.logo}`)} className="App-logo" style={{
          float:"left",
          marginLeft:"440px",
        }} alt="logo"/>
      </a>
  );

}

function redirectButtons(){
  return(
        <div className='container-fluid'>
        <div className="collapse container navbar-collapse "   id="navbarNav"  
        style={Object.assign({},{textAlign: "center"},{marginRight:"440px",})} >

          <ul className="nav nav-pills ml-auto topnav">
              <li className="nav-item px-2"  > 
                <a className="nav-link active" style={Object.assign({},{color:"white"},{fontSize:30},{backgroundColor:"black"})} href="https://www.alperbesli.com">Ana Sayfa <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" style={Object.assign({},{color:"white"},{fontSize:30})} href="https://www.12ssxca.com">Haberler</a>
              </li>
              <li className="nav-item px-2">
                 <a className="nav-link" style={Object.assign({},{color:"white"},{fontSize:30})} href="https://www.2321312besli.com">İletişim</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" style={Object.assign({},{color:"white"},{fontSize:30})} href="https://www.a2131254rbesli.com">Sınav Sonuçları</a>
              </li>
              <li className="nav-item px-2">
                <a className="nav-link" style={Object.assign({},{color:"red"},{fontSize:30})} href="https://www.a2131254rbesli.com">Giriş Yap</a>
              </li>
          </ul>
        </div>
        </div>
  
  );
}


function Baslik()
{
  return(
      <div>
        <h1 style={{color: "darkcyan"}}>
          Üsküdar Üniversitesi
        </h1>
      </div>

  );
}

function Image(source)
{
  const image = require(`${source}`);
  return (
    <img src={image} className="card-img-top" alt= "img" />
  );
}

///////////////// 2. Step  /////////////////
// Postların texti raw haliyle kendi fonksiyonalrının içine yerleştiriliyor.
function BilimselArastirma(_className)
{
  let text ="Bilimsel Araştırma ile ilgili yazı.";
  return (BlogText_p(_className,text));
}

function SpordaBasari(_className)
{
  let text ="Sporda Başarı ile ilgili yazı.";
  return (BlogText_p(_className,text));
}

function TubitakBasari(_className)
{
  let text ="Tübitak ile ilgili yazı.";
  return (BlogText_p(_className,text));
}

function KureselLigdeBasari(_className)
{
  let text="Küresel Ligde Başarı ile ilgili yazı.";
  return(BlogText_p(_className,text));
}

function IletisimBasarininAdresi(_className)
{
  let text="İletişim Başarının Adresi ile ilgili yazı.";
  return(BlogText_p(_className,text));
}

function SporKarisik(_className){
  let text="Spor ile ilgili yazı.";
  return(BlogText_p(_className,text));
}


///////////////// 3. Step  /////////////////
// Postların Texti burada konfigüre ediliyor
function Text(description,min_description)
{
  let BilimselArastirma_p =  BilimselArastirma("card-text");
  let SpordaBasari_p = SpordaBasari("card-text");
  let TubitakBasari_p = TubitakBasari("card-text");
  let KureselLigdeBasari_p = KureselLigdeBasari("card-text");
  let IletisimBasarininAdresi_p = IletisimBasarininAdresi("card-text");
  let SporKarisik_p = SporKarisik("card-text");
  switch(description){

    case "BilimselArastirma":
      return cardBody(BilimselArastirma_p,min_description);
    case "SpordaBasari":
      return cardBody(SpordaBasari_p,min_description);
    case "TubitakBasari":
      return cardBody(TubitakBasari_p,min_description);
    case "KureselLigdeBasari":
      return cardBody(KureselLigdeBasari_p,min_description);
    case "IletisimBasarininAdresi":
      return cardBody(IletisimBasarininAdresi_p,min_description);
    case "SporKarisik":
      return cardBody(SporKarisik_p,min_description);
    default:
      return "No Value Found";

  }
  
}



///////////////// 4. Step  /////////////////
// postların oluşturulduğu kısım
function postLoop(){

  const _posts = [
    Post(img.SpordaBasari,"SpordaBasari","3"),
    Post(img.BilimselArastirma,"BilimselArastirma","7"),
    Post(img.TubitakBasari,"TubitakBasari","9"),
    Post(img.KureselLigdeBasari,"KureselLigdeBasari","4"),
    Post(img.IletisimBasarininAdresi,"IletisimBasarininAdresi","2"),
    Post(img.SporKarisik,"SporKarisik","6"),
    Post(img.SpordaBasari,"SpordaBasari","3"),
    Post(img.BilimselArastirma,"BilimselArastirma","7"),
    Post(img.TubitakBasari,"TubitakBasari","9"),
    Post(img.KureselLigdeBasari,"KureselLigdeBasari","4"),
    Post(img.IletisimBasarininAdresi,"IletisimBasarininAdresi","2"),
    Post(img.SporKarisik,"SporKarisik","6"),
    Post(img.SpordaBasari,"SpordaBasari","3"),
    Post(img.BilimselArastirma,"BilimselArastirma","7"),
    Post(img.TubitakBasari,"TubitakBasari","9"),
    Post(img.KureselLigdeBasari,"KureselLigdeBasari","4"),
    Post(img.IletisimBasarininAdresi,"IletisimBasarininAdresi","2"),
    Post(img.SporKarisik,"SporKarisik","6")
  
  ]

  let results =[];

  _posts.forEach((element,index)=>{
    results.push(
      <div className="col-md-4">
        <div key={index} className="card mb-4 box-shadow">
          {element}
        </div>
      </div>
    );
  })

  return results;
}

function cardBody(cardText,min_description){
  return(
    <div className="card-body">
        {cardText}
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <button type="button" className="btn btn-sm btn-outline-secondary">Görüntüle</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Paylaş</button>
          </div>
          <small className="text-muted">{min_description} dk.</small>
        </div>
    </div>
  );
}

function BlogText_p(_className,text)
{
  return (<p className={_className}style={Object.assign({},{fontSize:20})}>{text}</p>);

}

function Post(Image_Source,Text_Source,min_description)
{
  
  return( 
  
    <div>
      {Image(Image_Source)}
      {Text(Text_Source,min_description)}
    </div>
  
  
  );
}

function Blog(){

  const results = postLoop();

  return(
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row"> 
               {results}
        </div>
      </div>
    </div>
  );
}

function footer(){

  return(
    <footer className="text-muted" style={{backgroundColor:"darkcyan"}}>
      <div className="container">
        
        <p>Üsküdar Üniversitesi &copy; Resmi Web Sayfasıdır.</p>
        <p>
          İnstagram : <a href="../../"> Instagram logo </a> 
          Facebook : <a href="../../getting-started/"> Facebook Logo </a>
          Twitter : <a href="../../getting-started/"> Twitter Logo </a>
        </p>
      </div>
    </footer>
  );
}
export default App;
