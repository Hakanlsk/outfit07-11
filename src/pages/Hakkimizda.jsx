import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Hakkimizda() {
    return ( 
      <div>
        <Navbar/>
        <div className=" min-h-screen p-4 md:p-8">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-800 mb-6">Hakkımızda</h2>
          <div className="bg-white rounded-lg  p-6 md:p-10">
            
            <p className="text-lg md:text-xl text-gray-700 leading-7">
            FitMatch, modanın sınırlarını zorlayan ve giyim tarzınızı yeniden tanımlamanıza yardımcı olan bir moda ve kombin öneri platformudur. Biz, giyim tarzınızı kişiselleştirmeniz için size rehberlik ederken, en güncel moda trendlerini takip etmeyi ve renk uyumunu öğrenmeyi kolaylaştırıyoruz.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6">Moda ve Kombin Önerileri</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-7 mt-4">
            FitMatch, sizin için özel giyim kombinlerini oluşturmanıza yardımcı olur. Hangi üst giyim ile alt giyim kombinini tercih edeceğiniz, hangi renkleri kullanmanız gerektiği ve hangi tarzın size en iyi uyduğu konularında size rehberlik ederiz. Moda konusundaki önerilerimizle, günlük yaşamınızdan özel etkinliklere kadar her durum için mükemmel bir görünüm elde etmenize yardımcı oluruz.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6">Güncel Haberler</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-7 mt-4">
            FitMatch, modaya dair en son gelişmeleri takip eden bir haber kaynağıdır. Moda dünyasındaki en yeni trendler, tasarım koleksiyonları, defileler ve daha fazlası hakkında güncel haberler sunarız. Bu sayede her zaman moda dünyasının nabzını tutabilir ve tarzınızı güncel tutabilirsiniz.
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-6">Renk Uyumu Rehberi</h3>
            <p className="text-lg md:text-xl text-gray-700 leading-7 mt-4">
            Renklerin büyülü dünyasını keşfetmek istiyorsanız, FitMatch Renk Uyumu Rehberi sayfamıza göz atın. Kıyafet kombinlerinizde mükemmel renk uyumunu yakalamak için size ilham veren öneriler sunuyoruz. Hangi renklerin bir arada kullanılması gerektiği hakkında fikir sahibi olun ve giyim tarzınızı daha da geliştirin.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-7 mt-4">
            FitMatch olarak, sizin için en iyi kombinleri ve en güncel moda haberlerini sunma misyonunu taşıyoruz. Tarzınızı ifade etmek ve güvenle dolaşmak için bize katılın. FitMatch, tarzınızın Fit halini bulmanıza yardımcı olur.
            </p>
          </div>
        </div>
        </div>
        <Footer/>
      </div>
      
      
     );
}

export default Hakkimizda;