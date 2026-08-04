import { lashArtistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Bağımsız Kirpik Uzmanları (Lash Artist) için Perelai",
    description: "Mesajlar ve gecikmeler gününüzü bölse bile kirpik randevularınızı, müşteri takibinizi ve gelirinizi kontrol altında tutun.",
    ogImageAlt: "Bağımsız bir kirpik uzmanı için ziyaretler, takvim ve finansal özet içeren Perelai çalışma alanı",
  },
  hero: {
    eyebrow: "Bağımsız Kirpik Uzmanları İçin",
    h1: "Bütün gün mesajlara cevap veremezsiniz.",
    subhead: "İpek kirpik uygulamalarını, bakımları ve gerçek gelirinizi tek bir çalışma alanında tutun. Geciken bir müşteri gece tüm günü baştan toplamanıza neden olmasın.",
    mock: "lash-workspace",
  },
  pains: [
    { title: "Randevu talebi mesaj geçmişinde sıkışıp kalmamalı", body: "Uygun saatler, kapora soruları, referans fotoğraflar ve saat değişiklikleri sizi müşteriler arasında mesaj aramaya mecbur bırakmamalıdır. Ekran görüntüleriyle dolu bir chat, güne başlamak için güvenli bir yer değildir." },
    { title: "Kaymış bir zaman dilimi tüm günü etkileyebilir", body: "Lash Lifting & Kirpik Boyama bir bakım süresine sığmaz; geciken bir ipek kirpik seti sonraki tüm randevuları kaydırır. Takviminizde işi genel bir blok olarak değil, hizmetin kendisi olarak takip edin." },
    { title: "Zamanınız, malzemeleriniz ve geliriniz aynı görünümü gerektirir", body: "Tahsil edilen tutarı yazın, malzeme ve yapıştırıcı giderlerini işe bağlayın ve alacakları Excel tabloları olmadan görün." },
    { title: "Müşteri geçmişini bulmak kolay olmalı", body: "Düzenli bir müşteri bakıma geldiğinde; ziyaretleri, notları ve ödemeleri kendi kartında hazır olmalıdır. Müşteri sedyeye yatmadan önce detay bulmak için eski mesajları taramak zorunda kalmamalısınız." },
    { title: "Son mesaj akşamınızı esir almamalı", body: "Müşterileriniz doğrudan soru sorabilir. Ancak rutin randevular kendi bağlantınıza kayarak son müşteri ile akşamınız arasında net bir sınır oluşturur." },
  ],
  dayInLife: {
    title: "Program kaysa bile neyin dikkat gerektirdiğini tam olarak bilirsiniz.",
    body: "Perelai, sabahki kaş tasarımından son bakımdan sonraki gelire kadar kirpik gününün tüm parçalarını görünür tutar.",
    steps: [
      { title: "Kaş işlemleri net bir başlangıca sahiptir", body: "Kaş tasarımı, kaş boyama ve brow lamination işlemlerini gün içinde kendi süreleriyle ayrı hizmetler olarak ekleyin." },
      { title: "Lifting hak ettiği süreyi alır", body: "Lash Lifting & Kirpik Boyama işlemini, hızlı işler araya girmeden önce takvimde görünür tutun." },
      { title: "Yeni ipek kirpik seti yerini bulur", body: "İpek Kirpik uygulamasını mesajlarda tutmak yerine müşteri detayları ve gereken süreyle bir Ziyaret olarak ekleyin." },
      { title: "Bakım randevusu bağlantılı kalır", body: "Kirpik Bakımını günün geri kalanıyla birlikte takvimde tutun, detayları son mesajlarda aramayın." },
      { title: "Sonraki randevu bilinçli bir seçimdir", body: "Biri saat sorduğunda gerçek boşlukları görün. Doğrudan randevu bağlantısı müşterinin hizmet, uzman ve saat seçmesini sağlar." },
      { title: "Hizmet listeniz tanıdık kalır", body: "Müşterilerinizin bildiği isimleri düzenlenebilir bir hizmet listesinde tutun." },
      { title: "Kirpik işinin kendine ait bir ritmi vardır", body: "Temizleme, izolasyon, uygulama, kıvrım seçimi ve kalıcılık her hizmette farklı dikkat gerektirir." },
      { title: "Düzenli müşteri sadece boş bir slot değildir", body: "Bakım hakkındaki görüşme; müşterinin ziyaret geçmişi, notları ve ödemeleriyle aynı yerde başlar." },
      { title: "Malzemeler hesaba katılır", body: "Malzeme ve yapıştırıcı giderlerini alışveriş fişleri yerine yapılan işe bağlayın." },
      { title: "Para ve açık kalan işler görünür kalır", body: "Tahsil edileni kaydedin, malzemeleri bağlayın ve bir sonraki kararı Operasyonel Gelen Kutusu'nda bırakın." },
      { title: "Ödeme makbuzunun net bir bitişi vardır", body: "Ödeme kaydedildiğinde müşteriye bir bağlantı olarak Ödeme Onayı gönderilebilir." },
      { title: "Yarın gerçek bir listeyle başlar", body: "Cevaplanmamış bir soru veya ödenmemiş bakiye, çözülene kadar Operasyonel Gelen Kutusu'nda kalır." },
    ],
  },
  terminology: [
    { theirWord: "Kaş tasarımı, boyama veya Brow Lamination", perelaiWord: "Ziyaret", why: "Hizmeti, müşteri notlarını ve ödemeleri bir arada tutar." },
    { theirWord: "Lash Lifting & Boyama, İpek Kirpik veya Bakım", perelaiWord: "Ziyaret", why: "Her kirpik işlemine takvimde kendi alanını verir." },
    { theirWord: "Kaş & Kirpik Boyama kombosu eklendi", perelaiWord: "Ek Seçenekler", why: "Ek çalışmayı ait olduğu Ziyarete ekler." },
    { theirWord: "Günün malzeme ve yapıştırıcı gideri", perelaiWord: "Bağlı Giderler", why: "Maliyetleri kullanılan hizmetin yanında gösterir." },
    { theirWord: "Önceden ödenmiş kirpik bakım paketi", perelaiWord: "Paket", why: "Ön ödemeli bakiye Ziyaretler yapıldıkça düşer." },
    { theirWord: "Kalanı sonra ödeyecek müşteri", perelaiWord: "Sipariş", why: "Açık bakiyeleri fatura demeden takip edin." },
    { theirWord: "İşlem sonrası takip veya kural soruları", perelaiWord: "Operasyonel Gelen Kutusu Ötesi", why: "Yeni mesajların arasında kaybolmadan siz çözene kadar durur." },
  ],
  setup: {
    title: "Zaten yaptığınız kirpik işleriyle başlayın.",
    body: "Jenerik boş formlar yok. Kirpik uzmanı şablonu düzenlenebilir hizmetler, boyama ek seçeneği ve bağlı malzeme giderleriyle başlar.",
    steps: [
      { title: "Kirpik Uzmanı Çalışma Alanını Açın", body: "Bu sayfadan geldiğinizde onboarding sırasında kirpik uzmanı şablonu varsayılan olarak seçili gelir." },
      { title: "Hizmet Listenizi Özelleştirin", body: "Kaş Tasarımı, Kaş Boyama, Brow Lamination, Lash Lifting & Boyama, İpek Kirpik ve Kirpik Bakımı ile başlayın." },
      { title: "En Önemli Verileri Getirin", body: "vCard ile kişileri aktarın, Google Takvim'i bağlayın ve randevu bağlantınızı paylaşın." },
    ],
  },
  faq: [
    { q: "Kirpik hizmetlerim hazır gelecek mi?", a: "Evet. Şablon; Kaş Tasarımı, Boyama, Brow Lamination, Lash Lifting, İpek Kirpik ve Bakım gibi 6 düzenlenebilir hizmetle gelir." },
    { q: "Müşteriler mesaj atmadan randevu alabilir mi?", a: "Randevu bağlantınızı bio'da veya mesajda paylaşın. Müşteriler hizmet, uzman ve saat seçer." },
    { q: "Müşteri geç kalırsa veya gelmezse ne olur?", a: "Perelai otomatik e-posta, push ve uygulama içi hatırlatmalar gönderir. İş ve ödeme ayrı tutulduğu için gelinmeyen randevu gelir sayılmaz." },
    { q: "Haftanın gerçekten ne kazandırdığını görebilir miyim?", a: "Gerçek tahsilatları yazın, yapıştırıcı ve malzeme giderlerini bağlayın; gelir, gider ve alacakları tablo tutmadan görün." },
    { q: "Her şeyi bir hafta sonu içinde mi taşımalıyım?", a: "Hayır. vCard ile kişileri aktararak başlayın ve isteğe bağlı Google Takvim'i bağlayın. Hizmet listenizi zamanla düzenleyebilirsiniz." },
  ],
  labels: {
    terminologyTitle: "Stüdyonuzdaki terimlerin Perelai'da karşılığı var.",
    inYourChair: "Sedyenizde",
    inPerelai: "Perelai'da",
    whyItMatters: "Neden Önemli",
    mocksTitle: "Bir kirpik uzmanının verileri üründe nasıl görünür?",
    mocksBody: "Örnek veriler kirpik uzmanı şablonundaki hizmetleri ve giderleri kullanır.",
    faqTitle: "Kirpik uzmanlarının geçiş yapmadan önce sorduğu sorular.",
  },
  whatItIsNot: {
    title: "Ne olmadığı konusunda tam açıklık.",
    body: "Perelai, kirpik işinizin müşteri, randevu ve finans tarafını yönetmek içindir. Uzmanlaşmış yazılımların yerini alma iddiasında değildir.",
    items: [
      { title: "Muhasebe Yazılımı Değildir", body: "Nakit akışını görmeniz için randevu alınan, tamamlanan ve ödenen işleri kaydeder. Vergi beyannamesi vermez." },
      { title: "Pazar Yeri Değildir", body: "Bağlantınız size aittir." },
      { title: "Tıbbi Kayıt Sistemi Değildir", body: "Klinik kayıtlar, tanı takibi veya hasta yönetimi sunmaz." },
    ],
  },
  cta: {
    title: "Son müşteriden sonra bile kirpik gününüzü net ve düzenli tutun.",
    body: "Hizmetlerinizle başlayan ve ziyaretleri, ödemeleri ve sonraki adımları aynı yerde toplayan bir çalışma alanı oluşturun.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },
  research: lashArtistResearch,
}
