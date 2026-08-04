import { personalTrainerResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai kişisel antrenörler için",
    description:
      "Seans cirosu, kayıtlı maliyetler ve hesaplanan kârı herhangi bir dönem için takip edin — müşteri geçmişi ve paket kullanımları okunabilir kalsın.",
    ogImageAlt:
      "Bir kişisel antrenör için Perelai finans özeti: seans cirosu, kayıtlı maliyetler ve dönem için hesaplanan kâr — örnek veriler.",
  },

  hero: {
    eyebrow: "Kişisel antrenörler için finans yazılımı",
    h1: "Kişisel antrenman finanslarınıza net bir bakış.",
    subhead:
      "Gün, hafta, ay, çeyrek veya yıl için seans cirosu, kayıtlı maliyetler ve hesaplanan kârı takip edin. Tamamlanan seanslar, kayıtlı ödemeler ve paket kullanımları ayrı kalırken sonucu müşteri ve hizmet kategorisine göre inceleyin.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Dolu bir takvim soruyu yanıtlamaz",
      body: "Arka arkaya 1:1 eğitim seansları, güç koçluğu randevuları ve değerlendirmeler günü doldurur ve ay hakkında hiçbir şey söylemez. Salon kirası, müşteri lokasyonlarına seyahat ve fitness ekipmanı değişim maliyetleri antrenmanların arkasında durur — ve bunların hiçbiri takvimde yok.",
    },
    {
      title: "Ön ödemeli paket blokları dönem takibini bulanıklaştırır",
      body: "Bir fitness müşterisi on seanslık bir bloğu peşin aldığında, o toplu ödemeyi ilk gün saymak sonraki koçluk haftalarını kayıtsız gösterir. Müşteri her antrenmana geldikçe paket kullanımlarını takip etmek tamamlanan fitness işini net tutar.",
    },
    {
      title: "Seanslar, ödemeler ve giderler farklı yerlerde yaşar",
      body: "Randevular bir takvim uygulamasında, müşteri ödeme kayıtları başka bir araçta, salon giderleri defterlerde veya kağıt fişlerde durur. Dönemi gözden geçirmek bu kayıtları yeniden bir araya getirmek demektir.",
    },
  ],

  dayInLife: {
    title: "Her seansı kaydedin. Dönemi ihtiyaç duyduğunuzda inceleyin.",
    body: "Seansları tamamlayın, ödemeleri kaydedin, paket kredilerini kullanın ve normal yönetim sırasında iş giderleri ekleyin. Perelai bu kayıtları müşteri, hizmet kategorisi ve seçilen döneme bağlı tutar.",
    steps: [
      {
        title: "Seans tamamlama ve ödeme ayrı kalır",
        body: "Bir 1:1 Eğitim Oturumunu tamamlamak seansın gerçekleştiğini kaydeder. Ödeme kaydetmez. Ödeme durumu aynı Ziyaretin ayrı bir parçası olarak kalır.",
      },
      {
        title: "Ödeme seans ve müşteriyle bağlı kalır",
        body: "Kayıtlı bir ödeme ilgili seans ve müşteriye bağlı kalır, böylece finans geçmişi arkasındaki işe kadar izlenebilir.",
      },
      {
        title: "Paket kredileri katılınan seanslara uygulanır",
        body: "Bir müşteri ön ödemeli Eğitim Paketi kullandığında, bir kredinin kullanılması nakit dışı bir ödeme olarak kaydedilir. Verilen seanslar ve kayıtlı ödemeler ayrı kalır.",
      },
      {
        title: "Dönem antrenman toplamlarını okuyun",
        body: "Gün, hafta, ay, çeyrek veya yıl için seans cirosu, kayıtlı maliyetler ve hesaplanan kârı müşteri ve hizmet kategorisine göre değerlendirin.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Keşif Oturumu, 1:1 Eğitim Oturumu, Eğitim Paketi, Çevrimiçi Koçluk Planı",
      perelaiWord: "Bir Ziyaretteki Hizmetler",
      why: "Kişisel antrenör şablonu fitness koçluğu, kondisyon ve antrenman programlama için dört başlangıç hizmeti sunar. Her rezerve seans müşteri, hizmet ve ödeme kaydını birlikte taşıyan bir Ziyaret olur.",
    },
    {
      theirWord: "Özel Yemek/Eğitim Planı",
      perelaiWord: "Bir Ziyaretteki Ek Hizmet",
      why: "1:1 seanslar veya antrenman paketleriyle birlikte sunulan beslenme veya antrenman ek hizmeti ziyaret kaydının parçası olur.",
    },
    {
      theirWord: "Salon kirası, müşteri seyahati, ekipman",
      perelaiWord: "Kayıtlı Gider",
      why: "Bir dönem için salon ücretleri, seyahat ve ekipman maliyetlerini kaydedin. Seçilen dönemin hesaplanan kârına katkıda bulunurlar.",
    },
    {
      theirWord: "On seanslık blok",
      perelaiWord: "Ön ödemeli paket",
      why: "Ön ödemeli müşteri paketleri kredi bakiyesi olarak durur, dönem cirosunu bozmadan seans seans kullanılır.",
    },
  ],

  setup: {
    title: "Boş bir sayfadan değil, bir kişisel antrenörün hizmet listesinden başlayın.",
    body: "Kişisel antrenör şablonu dört düzenlenebilir hizmet ve bir ek hizmetle açılır — ilk ekranınız zaten çalışan bir fitness pratiğine benzer.",
    steps: [
      {
        title: "Kişisel antrenör çalışma alanını açın",
        body: "Bu sayfadan gelmek, onboarding'de kişisel antrenör şablonunu Keşif Oturumu, 1:1 Eğitim Oturumu, Eğitim Paketi ve Çevrimiçi Koçluk Planı ile önceden yüklenmiş olarak ilk sıraya koyar.",
      },
      {
        title: "Hizmetleri ve maliyet kategorilerini ayarlayın",
        body: "Antrenman seans sürelerinizi ve fiyatlarınızı belirleyin, sunuyorsanız Özel Yemek/Eğitim Planını ek hizmet olarak tutun ve ilgili salon giderlerini seçilen dönemlere kaydedin.",
      },
      {
        title: "Seansları kaydedin ve dönem sonuçlarını inceleyin",
        body: "Ziyaretleri tamamlandı olarak işaretleyin, ödemeleri kaydedin, paket kredilerini kullanın ve gün, hafta, ay, çeyrek veya yıl için ciro, kayıtlı giderler ve hesaplanan kârı inceleyin.",
      },
    ],
  },

  faq: [
    {
      q: "Ön ödemeli antrenman paketleri nasıl işlenir?",
      a: "Ön ödemeli paketler kredi bakiyesi olarak kaydedilir. Müşteri bir antrenmana geldiğinde bir kredi kullanılır — tamamlanan iş ve kayıtlı ödemeler ayrı kalır.",
    },
    {
      q: "Salon kirası veya seyahat gibi giderleri kaydedebilir miyim?",
      a: "Evet. Bir dönem için ilgili iş giderlerini kaydedebilirsiniz. Seçilen dönemin kayıtlı maliyetlerine ve hesaplanan kârına dahil edilirler.",
    },
    {
      q: "Bir seansı tamamlamak ödeme de kaydeder mi?",
      a: "Hayır. Tamamlama ve ödeme durumu ayrı kaydedilir. Ödeme kaydedilmeden önce tamamlanmış bir seans var olabilir.",
    },
    {
      q: "Şablon hizmetleri düzenlenebilir mi?",
      a: "Evet. Şablon hizmetleri (Keşif Oturumu, 1:1 Eğitim Oturumu, Eğitim Paketi, Çevrimiçi Koçluk Planı) ve Özel Yemek/Eğitim Planı ek hizmeti tamamen düzenlenebilir.",
    },
  ],

  labels: {
    terminologyTitle: "Kişisel antrenman terimleri ve Perelai kavramları.",
    inYourChair: "Pratiğinizde",
    inPerelai: "Perelai'de",
    whyItMatters: "Neden önemli",
    mocksTitle: "Kişisel antrenman verileri, üründe gösterildiği gibi.",
    mocksBody: "Örnek veriler kişisel antrenör şablonunun kendi hizmetlerini ve ek hizmetini kullanır.",
    faqTitle: "Sık sorulan sorular.",
  },

  whatItIsNot: {
    title: "Ne olmadığı konusunda net.",
    body: "Perelai tamamlanan antrenman seanslarını, kayıtlı maliyetleri ve hesaplanan kârı seçilen dönemlerde takip eder. Tam bir salon back office'i değildir.",
    items: [
      {
        title: "Muhasebe yazılımı değil",
        body: "Ciro, giderler ve hesaplanan kâr bir dönem için takip edilir. Perelai defter tutmaz, vergi beyannamesi yapmaz ve finansal danışmanlık sunmaz — muhasebecinizin yerini almaz.",
      },
      {
        title: "Fitness takipçisi veya antrenman planlayıcısı değil",
        body: "Hizmetleri, ek hizmetleri ve paket kullanımlarını takip edebilirsiniz. Antrenman programlama, tekrarlar ve fitness ilerlemesi bunun parçası değil.",
      },
      {
        title: "Marketplace değil",
        body: "Rezervasyon bağlantınız size aittir. Perelai müşteri ilişkisini kiralamaz.",
      },
    ],
  },

  cta: {
    title: "Dönemin ne getirdiğini bilin.",
    body: "Tamamlanan seansları, kayıtlı ödemeleri, paket kullanımlarını ve açık sipariş bakiyelerini yapılandırılmış ve okunabilir tutmak için bir kişisel antrenör hizmet menüsüyle başlayın.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },

  research: personalTrainerResearch,
}
