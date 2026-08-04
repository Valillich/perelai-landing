import { hairSalonResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai kuaför salonu sahipleri için",
    description:
      "Herhangi bir dönem için ciroyu, kaydedilen maliyetleri ve hesaplanan kârı izleyin — sonuç hizmet kategorisi ve müşteriye göre gruplanır.",
    ogImageAlt:
      "Bir kuaför salonu için Perelai finans özeti: dönem cirosu, maliyetler ve hesaplanan kâr ile hizmet kategorisi dağılımı — örnek veriler.",
  },

  hero: {
    eyebrow: "Kuaför salonu sahipleri için finans yazılımı",
    h1: "Salonunuzun ayını elle yeniden kurmadan görün.",
    subhead:
      "Herhangi bir dönem için ciroyu, kaydedilen maliyetleri ve hesaplanan kârı izleyin. Sonucu hizmet kategorisi ve müşteriye göre inceleyin; kaydedilen ödemeler ile açık sipariş veya taksit bakiyeleri ayrı kalsın.",
    mock: "colorist-workspace",
  },

  pains: [
    {
      title: "Ay okunmaz, yeniden kurulur",
      body: "Ciro randevu sisteminde, ödemeler hesaplara dağılmış, ürün maliyetleri tedarikçi faturalarında haftalar sonra geliyor. Ay sonu, olanı hafızadan ve kart terminali özetinden yeniden kurduğunuz bir akşama dönüşüyor.",
    },
    {
      title: "Tek başına ciro ayın neye mal olduğunu göstermez",
      body: "Dolu bir program yine de ürün maliyetlerini, kirayı ve diğer kaydedilmiş giderleri gizleyebilir. Deneyimli sahipler bir rakama güvenmeden önce neyin zaten dahil olduğunu sorar. Perelai ciroyu, kaydedilen maliyetleri ve hesaplanan kârı ayrı rakamlar olarak görünür tutar.",
    },
    {
      title: "Araçlar tek bir hikâye anlatmaz",
      body: "Randevular, müşteri geçmişi ve ödeme kayıtları çoğu zaman veri paylaşmayan farklı sistemlerde yaşar; bir soruyu yanıtlamak için iki-üç yere bakmak gerekir. Perelai her kaydedilmiş finansal olayı müşteriye ve arkasındaki işe bağlı tutar.",
    },
  ],

  dayInLife: {
    title: "Günü olurken kaydedin. Ayı gerektiğinde okuyun.",
    body: "Ziyaretleri tamamlayın, ödemeleri kaydedin, paketleri kullanın ve maliyetleri günün işinin parçası olarak ekleyin. Perelai her kaydı müşteriye, hizmet kategorisine ve ait olduğu döneme bağlar — ay sonu incelemesi bir yeniden kurulumdan değil bir kayıttan başlar.",
    steps: [
      {
        title: "Randevu tamamlandı, henüz tahsil edilmedi",
        body: "Kadın Saç Kesimi'ni tamamlandı işaretlemek işin olduğunu kaydeder. Paranın geldiğini iddia etmez. Ziyaret, sessizce ciroya sayılmak yerine görebildiğiniz bir durumda kalır.",
      },
      {
        title: "Ödeme, ödediği işe kaydedilir",
        body: "Müşteri ödediğinde ödeme, gün sonu anonim toplamına değil o ziyarete bağlanır — rakam müşteri ve hizmet kategorisiyle bağlantısını korur.",
      },
      {
        title: "Paket kullanımı yeni ödeme olmadan kapatır",
        body: "Ön ödemeli bir müşteri Tedavi kullandığında ziyaret kapanır ve o gün para hareket etmez. Perelai kullanımı kaydeder; kaydedilen ödemeler ile tahsil edilmiş ciro yanıltıcı tek rakam yerine iki ayrı sayı olarak kalır.",
      },
      {
        title: "Dönem yanıt verir",
        body: "Gün, hafta, ay, çeyrek veya yıl seçin; ciroyu, kaydedilen maliyetleri ve hesaplanan kârı okuyun — altında kategori ve müşteri dağılımı, açık sipariş bakiyesi ayrı tutulsun.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Kadın Saç Kesimi, Kök Rengi, Balayaj / Boyutsal Renk, Parlak ve Toner, Tedavi",
      perelaiWord: "Bir Ziyaretteki hizmetler",
      why: "Salon şablonu bu beşiyle başlar, düzenlenebilir. Her randevu müşteri, hizmet ve para hareketini birlikte taşıyan bir Ziyaret olur.",
    },
    {
      theirWord: "Koltukta eklenen Fön ve Şekil Verme veya Bağ Tedavisi",
      perelaiWord: "Eklentiler",
      why: "Ekstra iş, yapıldığı Ziyarete bağlanır — kayıt başlangıçta rezerve edilenle değil olanla örtüşür.",
    },
    {
      theirWord: "Renk işi ile bitirme işinin karşılaştırması",
      perelaiWord: "Hizmet kategorisi",
      why: "Ciro ve maliyetler kategoriye göre gruplanır; dağılım renk işini bitirme ile karşılaştırır. Menüdeki her hizmet için ayrı rakam vermez.",
    },
    {
      theirWord: "Renkli Ürün ve Tek Kullanımlık Sarf Malzemeleri",
      perelaiWord: "Bağlı maliyetler",
      why: "Dönem maliyetleri olarak kaydedilir — destekledikleri kategori cirosuyla aynı görünümde çıkar, yalnızca tedarikçi ekstresinde değil. Perelai tek bir formülün ne kadar ürün kullandığını ölçmez.",
    },
    {
      theirWord: "Ön ödemeli randevu kursundaki müşteri",
      perelaiWord: "Paket",
      why: "Krediler Ziyaretler kullanıldıkça düşer. Kullanım ziyareti kapatır ve nakit hareketi oluşturmaz — bu yüzden kullanılan iş ile kaydedilen ödemeler farklı şeyler olarak gösterilir.",
    },
    {
      theirWord: "Taksitle ödenen tedavi kursu",
      perelaiWord: "Sipariş ve taksitler",
      why: "Hâlâ borçlu olunan, o siparişe bağlı kalır — açık tutarın belirsiz bir his yerine tanımlı bir kapsamı vardır.",
    },
    {
      theirWord: "Ciro eksi dönemin kaydedilen maliyetleri",
      perelaiWord: "Kâr",
      why: "Perelai'deki kâr rakamı, seçtiğiniz dönemin cirosundan o döneme kaydedilen giderlerin çıkarılmasıdır. Salonu yönetmek için operasyonel bir sayı — muhasebe veya vergi sonucu değil.",
    },
    {
      theirWord: "Her ekip üyesinin erişebildiği",
      perelaiWord: "Personel veya Süpervizör erişimi",
      why: "Herkes bir rolle davet edilir ve erişim o rolü izler — ekip, her hesabın aynı şekilde kurulmasına gerek kalmadan tek çalışma alanında çalışabilir.",
    },
  ],

  setup: {
    title: "Boş sayfadan değil, bir salonun hizmet listesinden başlayın.",
    body: "Salon şablonu beş düzenlenebilir hizmet, iki eklenti ve iki bağlı maliyet türüyle açılır — ilk ekran zaten çalışan bir salona benzer.",
    steps: [
      {
        title: "Salon çalışma alanını açın",
        body: "Bu sayfadan gelmek, onboarding'de salon şablonunu ilk sıraya koyar. Kadın Saç Kesimi, Kök Rengi, Balayaj / Boyutsal Renk, Parlak ve Toner ve Tedavi ile başlarsınız — listeyi sıfırdan adlandırmak yerine.",
      },
      {
        title: "Menüyü ve maliyetleri kendinizin yapın",
        body: "Süreleri ve fiyatları ayarlayın; sunuyorsanız Fön ve Şekil Verme ile Bağ Tedavisi'ni eklenti olarak tutun; Renkli Ürün ve Tek Kullanımlık Sarf Malzemeleri'ni her dönem kaydettiğiniz maliyet türleri olarak bırakın.",
      },
      {
        title: "Salonda çalışanları ekleyin",
        body: "Ekip üyelerini Personel veya Süpervizör erişimiyle davet edin; çalışma saatlerini, izinleri ve atanan hizmetleri bir arada tutun. Erişim, her kişinin davet edildiği rolü izler.",
      },
      {
        title: "Bu haftaya yarayanı getirin",
        body: "vCard ile kişileri içe aktarın, Google Takvim'i bağlayın ve rezervasyon bağlantınızı paylaşın. Migrasyon için salonu durdurmak yerine önümüzdeki haftalardan başlayın.",
      },
    ],
  },

  faq: [
    {
      q: "Salonun hizmetleri hazır mı gelecek?",
      a: "Evet. Salon şablonu Kadın Saç Kesimi, Kök Rengi, Balayaj / Boyutsal Renk, Parlak ve Toner ve Tedavi ile başlar; ayrıca Fön ve Şekil Verme ile Bağ Tedavisi eklenti, Renkli Ürün ve Tek Kullanımlık Sarf Malzemeleri bağlı maliyet olarak gelir. Hepsi düzenlenebilir.",
    },
    {
      q: "Hizmet dağılımı ne kadar ayrıntılı?",
      a: "Ciro ve maliyetler hizmet kategorisine göre gruplanır — seçilen dönemde renk işini bitirme ile karşılaştırabilir, bir müşterinin ciro geçmişini zaman içinde görebilirsiniz. Perelai menüdeki her hizmetin kârlılığını hesaplamaz.",
    },
    {
      q: "Perelai her formüldeki rengi takip eder mi?",
      a: "Hayır. Perelai maliyetleri dönem ve hizmet kategorisine göre kaydeder. Renk tartmaz, formül düzeyinde kullanım hesaplamaz, backbar stoku yönetmez. Tek bir formülün tam ürün maliyetine ihtiyacınız varsa, bu başka bir araçtır.",
    },
    {
      q: "Tamamlanan randevu alınan para sayılır mı?",
      a: "Hayır. Tamamlanan iş, tahsil edilmiş ciro ve kaydedilen ödemeler ayrı izlenir. Bir randevu bitmiş ve hâlâ ödeme bekliyor olabilir; ön ödemeli paket o gün para hareket etmeden ziyareti kapatabilir. Üçünü ayrı tutmak, dönem rakamına anlam verir.",
    },
    {
      q: "Kâr rakamı neyi kapsar?",
      a: "Seçtiğiniz dönemin cirosu, eksi o döneme kaydedilen giderler. Salonu yönetmek için bir hesaplama — muhasebe veya vergi sonucu değil ve muhasebecinizin yerini almaz.",
    },
    {
      q: "Ekibim aynı çalışma alanını kullanabilir mi?",
      a: "Evet. Ekip üyelerini Personel veya Süpervizör erişimiyle davet edin. Çalışma saatleri, izinler ve atanan hizmetler aynı alanda kalır; erişim role göredir.",
    },
  ],

  labels: {
    terminologyTitle: "Salon kelimeleri — Perelai'de ne denir.",
    inYourChair: "Salonunuzda",
    inPerelai: "Perelai'de",
    whyItMatters: "Neden önemli",
    mocksTitle: "Salon verileri, üründe gösterildiği gibi.",
    mocksBody: "Örnek veriler salon şablonunun hizmetlerini, eklentilerini ve bağlı maliyetlerini kullanır.",
    faqTitle: "Kuaför salonu sahiplerinin ilk sorduğu.",
  },

  whatItIsNot: {
    title: "Ne olmadığı konusunda net.",
    body: "Perelai salonunuzun yaptığı işe bağlı parayı izler. Back office'inizin geri kalanı olduğunu iddia etmez.",
    items: [
      {
        title: "Muhasebe yazılımı değil",
        body: "Bir dönem için ciroyu, maliyetleri ve hesaplanan kâr rakamını kaydeder. Defter tutmaz, vergi beyanı yapmaz, mali danışmanlık vermez ve muhasebecinizin yerini almaz.",
      },
      {
        title: "Bordro veya İK değil",
        body: "Ekip üyelerini davet edip çalışma saatlerini, izinleri ve atanan hizmetleri bir arada tutabilirsiniz. Maaş, komisyon ve puantaj parçası değildir.",
      },
      {
        title: "Backbar stoku değil",
        body: "Renkli Ürün ve Tek Kullanımlık Sarf Malzemeleri dönem maliyeti olarak kaydedilir. Perelai ürün tartmaz, formül başına kullanımı izlemez, stok sipariş etmez.",
      },
    ],
  },

  cta: {
    title: "Ayı yeniden kurmadan görün.",
    body: "Bir salon hizmet listesinden başlayın; tamamlanan işi, kaydedilen ödemeleri, paket kullanımlarını ve açık sipariş bakiyelerini ayrı, okunabilir kayıtlar olarak tutun.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },

  research: hairSalonResearch,
}
