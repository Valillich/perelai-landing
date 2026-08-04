import { independentColoristResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Bağımsız Renk Uzmanları (Colorist) için Perelai",
    description: "Renk randevularınızı, müşteri taleplerinizi ve nakit akışınızı yönetmenin daha huzurlu bir yolu.",
    ogImageAlt: "Bağımsız bir renk uzmanı için renklendirme ziyaretleri, takvim ve finansal özet içeren Perelai çalışma alanı",
  },
  hero: {
    eyebrow: "Bağımsız Renk Uzmanları İçin",
    h1: "Çift randevu çakışması tüm gününüzü mahvedebileceğinde.",
    subhead: "Yoğun DM mesajlarını, renk ziyaretlerini ve bugünkü kazancınızı çalışma şeklinize göre tasarlanmış tek bir alanda toplayın.",
    mock: "colorist-workspace",
  },
  pains: [
    { title: "Instagram DM kutunuz tamamen dolup taşıyor", body: "Bir randevu talebi; boya formülü sorusu, bir fotoğraf ve gece yarısı gelen saat değiştirme mesajıyla yan yana durmamalıdır." },
    { title: "On dakikalık bir gecikme tüm günü mahvetmiş gibi hissettirir", body: "Dip boyası, balyaj ve son dakika fönü farklı sürelere sahiptir. Takviminizin işinizin gerçek yapısını yansıtması gerekir." },
    { title: "«Bir dahakine öderim» lafı ucu açık bir sorun olarak kalır", body: "Gerçekte ne kadar tahsil ettiğinizi kaydedin, ne kadar alacağınız kaldığını görün ve renk ürünleri ile sarf malzemelerini takip edin." },
  ],
  dayInLife: {
    title: "Gün kontrolden çıksa bile, bir sonraki adımı tam olarak bilirsiniz.",
    body: "Perelai, renklendirme gününün iş akışını gece hafızanızdan toplamak zorunda kalmadan göz önünde tutar.",
    steps: [
      { title: "Danışmanlık ve tutam testi", body: "Ziyareti renk planını belirleyen ana hizmetle başlatın." },
      { title: "Dip boyası veya boyutlu renklendirme", body: "Günün renk hizmetini, gerektirdiği süreyle birlikte takvimde tutun." },
      { title: "Bakım kürü ve şekillendirme", body: "Müşterinizin seçtiği ek seçenekler de dahil olmak üzere ziyareti tamamlayan işleri ekleyin." },
      { title: "Ödeme ve takip adımı", body: "Alınan tutar, kalan ödeme ve bir sonraki karar Operasyonel Gelen Kutusu'nda görünür şekilde günü tamamlayın." },
    ],
  },
  terminology: [
    { theirWord: "Dip boyası, balyaj veya cila / tonlama", perelaiWord: "Ziyaret", why: "Hizmeti, müşteri notlarını ve ödeme geçmişini bir arada tutar." },
    { theirWord: "Bakım kürü, uzun saç ek ücreti veya fön", perelaiWord: "Ek Seçenekler", why: "Ek çalışmayı ilgili Ziyarete bağlar." },
    { theirWord: "Boya ürünleri ve tek kullanımlık malzemeler", perelaiWord: "Bağlı Giderler", why: "Maliyetleri ait oldukları hizmetin yanında gösterir." },
    { theirWord: "Önceden ödenmiş cila tazeleme paketi", perelaiWord: "Paket", why: "Ön ödemeli bakiye, Ziyaretler kullanıldıkça düşer." },
    { theirWord: "«Bir dahakine öderim»", perelaiWord: "Sipariş", why: "Alacaklarınızı resmi bir fatura olarak adlandırmadan takip edin." },
    { theirWord: "Müşteriye ödemenin alındığını bildirmek", perelaiWord: "Ödeme Onayı", why: "Müşterinizin bir bağlantıyla açabileceği onay gönderin." },
    { theirWord: "Son müşteriden sonra kararınızı bekleyen işler", perelaiWord: "Operasyonel Gelen Kutusu Ötesi", why: "Sadece okuyana kadar değil, siz çözene kadar orada durur." },
  ],
  setup: {
    title: "Zaten yapmakta olduğunuz renklendirme hizmetleriyle başlayın.",
    body: "Jenerik boş listeler yok. Renk uzmanı şablonu; düzenlenebilir hizmetler, ek seçenekler ve bağlı giderlerle hazır gelir.",
    steps: [
      { title: "Renk Uzmanı Çalışma Alanını Açın", body: "Bu sayfadan geldiğinizde onboarding sırasında bağımsız renk uzmanı şablonu varsayılan olarak seçili gelecektir." },
      { title: "Listeyi Kendinize Göre Düzenleyin", body: "Danışmanlık, Dip Boyası, Balyaj / Boyutlu Renk, Renk Düzeltme, Cila & Tonlama ve Kesim & Fön ile başlayın. İhtiyacınıza göre özelleştirin." },
      { title: "En Önemli Verilerinizi Getirin", body: "vCard ile kişileri içe aktarın, Google Takvim'i bağlayın ve kendi randevu bağlantınızı paylaşın." },
    ],
  },
  faq: [
    { q: "Renk hizmetlerim hazır gelecek mi?", a: "Evet. Şablon; Dip Boyası, Balyaj, Renk Düzeltme, Cila ve Kesim gibi 6 düzenlenebilir ana hizmet ve ek bakım seçenekleriyle birlikte gelir." },
    { q: "Müşteriler DM'den yazmadan randevu alabilir mi?", a: "Randevu bağlantınızı profilinizde paylaşın veya mesajla gönderin. Müşteriler hizmet, uzman ve saat seçer." },
    { q: "Biri gelmediğinde (No-show) ne olur?", a: "Perelai e-posta, uygulama içi ve push ile otomatik hatırlatmalar gönderebilir. İş ve gelir ayrı takip edildiği için gelinmeyen randevu gelir sayılmaz." },
    { q: "Bir boya gününün gerçekten karlı olup olmadığını görebilir miyim?", a: "Tahsil edilen miktarı kaydedin, ürün ve malzeme giderlerini bağlayın; gelir, gider ve alacakları tablo tutmadan görün." },
    { q: "Her şeyi bir hafta sonu içinde mi taşımalıyım?", a: "Hayır. Kişilerinizi vCard ile aktararak başlayın ve isteğe bağlı olarak Google Takvim'i bağlayın. Hizmet listenizi zamanla adım adım ayarlayabilirsiniz." },
  ],
  labels: {
    terminologyTitle: "Salonunuzdaki terimlerin Perelai'da karşılığı var.",
    inYourChair: "Koltukta",
    inPerelai: "Perelai'da",
    whyItMatters: "Neden Önemli",
    mocksTitle: "Bir renk uzmanının verileri üründe nasıl görünür?",
    mocksBody: "Örnek veriler, renk uzmanı şablonundaki hizmetleri, ek seçenekleri ve bağlı giderleri kullanır.",
    faqTitle: "Renk uzmanlarının geçiş yapmadan önce sorduğu sorular.",
  },
  whatItIsNot: {
    title: "Ne olmadığı konusunda tam açıklık.",
    body: "Perelai, renk işinizin müşteri, randevu ve para tarafını yönetmek içindir. Uzmanlaşmış araçların yerini alma iddiasında değildir.",
    items: [
      { title: "Muhasebe Yazılımı Değildir", body: "Nakit akışını görmeniz için randevu alınan, tamamlanan ve ödenen işleri kaydeder. Vergi beyannamesi vermez." },
      { title: "Pazar Yeri (Marketplace) Değildir", body: "Randevu bağlantınız size aittir." },
      { title: "Tıbbi Kayıt Sistemi Değildir", body: "Klinik kayıtlar, tanı takibi veya hasta yönetimi sunmaz." },
    ],
  },
  cta: {
    title: "Günü gece yeniden toparlamak zorunda kalmadan renklendirme işinizi kontrol altında tutun.",
    body: "Renk hizmetlerinizle başlayan ve ziyaretleri, nakit akışını ve sonraki adımları tek bir yerde tutan bir çalışma alanı oluşturun.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },
  research: independentColoristResearch,
}
