import React,{useState} from 'react';
import Booklist from './components/booklist';
import Book from './components/book';
import "./app.css";
const kitaplar=[
	{
		"id":1,
		"name":"Kara Kutu",
		"link":"https://i.idefix.com/cache/600x600-0/originals/0001846855001-1.jpg",
		"author":"Soner Yalçın",
		"slogan":"Bu bir cinayet romanı değil…Modern tıbbın karanlık yüzü aydınlanıyor…Rockefeller’ın kozmik odasındaki Türkler kim?Neyin karşılığı, ne kadar para aldılar?Tabular yıkılacak… Ezberler bozulacak…Artık yüzleşme vakti…"
	},
	{
		"id":2,
		"name":"Var mısın? - Güçlü Bir Yaşam İçin Öneriler",
		"link":"https://i.idefix.com/cache/500x400-0/originals/0001903548001-1.jpg",
    "author":"Doğan Cüceloğlu",
		"slogan":"Ömür yolculuğunda neyin önemli olduğunu"
	},
	{
		"id":3,
		"name":"İrade Terbiyesi",
		"link":"https://i.idefix.com/cache/500x400-0/originals/0001776241001-1.jpg",
		"author":"Jules Payet",
		"slogan":"Cemil Meric'in Disiplin içinde çalışmayı bu kitaptan öğrendim.diye tarif ettiği İrade Terbiyesi İlk yayımlandığı tarihten itibaren pek çok dile çevrilmiş ve tembellik, İsteksizlik gibi huylardan kurtulmak isteyenlerin başucu kitabı olmuştur."
	},
	{
		"id":4,
		"name":"1984",
		"link":"https://i.idefix.com/cache/500x400-0/originals/0000000064038-1.jpg",
		"author":"George Orwel",
		"slogan":"Distopya olarak nitelendirilen George Orwell’ın bu şahane eseri, geçmişin aslında ne kadar da gelecekten izler taşıdığını ortaya koyuyor. 1948’de kaleme aldığı bu eser ile Orwell, günümüz modern dünyasına bir protesto bırakıyor. "
	},
	{
		"id":5,
		"name":"Hayır Diyebilme Sanatı",
		"link":"https://i.idefix.com/cache/500x400-0/originals/0001835964001-1.jpg",
		"author":"Müthiş Psikoloji",
		"slogan":"Dilediğiniz zaman dilediğiniz yemeği yiyebiliyor olmak mıdır sizce özgürlük? Toplumsal hiçbir baskı hissetmeden içinizden geldiği gibi giyinebiliyor olmak mı yoksa?"
	},
	{
		"id":6,
		"name":"Fareler ve İnsanlar",
		"link":"https://i.idefix.com/cache/500x400-0/originals/0000000411500-1.jpg",
		"author":"John Steinbeck",
		"slogan":"Nobel ödüllü yazar John Steinbeck’in ilk kez 1937 yılında yayınlanan eseri; çiftlikten çiftliğe dolaşarak çalışan iki yakın arkadaşın başından geçen maceraları ve onların hayallerine sıkı sıkıya olan bağlılığını konu ediniyor."
	}
];

export const BookContext=React.createContext(kitaplar);
function App() {
  const [kitapAra,setKitapAra]=useState("");
  const KitapAra=(e)=>{
      setKitapAra(e.target.value);
  }



  return (
    <div className="App">
      <section className="page-section bg-light pt-3" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">React Kitap Uygulaması</h2>
                    <h3 className="section-subheading text-muted">React İle Kitap Uygulaması Yapımı</h3>
                </div>
                <div className="col-md-4 mx-auto">
                  <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Kitap<i className="fas fa-search-plus"></i></span>
                    <input type="text" onChange={KitapAra} className="form-control" placeholder="Kitap İsmini Yazınız" aria-label="Search" aria-describedby="addon-wrapping"/>
                  </div>
                </div>
				
                {kitapAra==="" ? <BookContext.Provider value={kitaplar}>
				<Booklist/>
			</BookContext.Provider> : <div className="row">
			{	
				kitaplar.filter((kits)=>kits.name.toLowerCase().includes(kitapAra)).map((kitaplar,index)=>
					<Book key={index} name={kitaplar.name} yazar={kitaplar.author} 
					link={kitaplar.link} slogan={kitaplar.slogan}/>   
				)
			}
			
		</div>}
                
            </div>
        </section>
    </div>
  );
}

export default App;
