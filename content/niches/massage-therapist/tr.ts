import { massageTherapistResearch } from "./research"
import type { NichePageContent } from "@/content/niches/types"

export const content: NichePageContent = {
  meta: {
    title: "Perelai masaj terapistleri için",
    description:
      "Herhangi bir dönem için ciroyu, kaydedilen maliyetleri ve hesaplanan kârı izleyin — müşteri geçmişi, ön ödemeli paketler ve açık bakiyeler ayrı tutulur.",
    ogImageAlt:
      "Bir masaj terapisti için Perelai finans özeti: dönem cirosu, kaydedilen maliyetler ve hesaplanan kâr — örnek veriler.",
  },

  hero: {
    eyebrow: "Masaj terapistleri için finans yazılımı",
    h1: "Dolu bir hafta ile iyi bir hafta aynı rakam değildir.",
    subhead:
      "Ciro, ona karşı kaydettiğiniz maliyetler ve ikisinin bıraktığı — bir gün, bir hafta veya bir yıl için. Yanında her muntazam müşterinin ne harcadığı, hangi ön ödemeli blokların hâlâ sürdüğü ve bir siparişte ödenmeden kalan.",
    mock: "lash-workspace",
  },

  pains: [
    {
      title: "Dolu hafta soruyu yanıtlamaz",
      body: "Arka arkaya üç Derin Doku Masajı günü doldurur, ay hakkında hiçbir şey söylemez. Önemli rakam yenilediğiniz yağların, kiraladığınız odanın veya sürdüğünüz kilometrelerin arkasındadır — ve hiçbiri az önce doldurduğunuz takvimde yoktur.",
    },
    {
      title: "Randevu burada, ödemeler orada, fişler başka yerde",
      body: "Solo uygulayıcılar çoğu zaman randevu için bir, ödeme almak için bir, fişler için bir uygulama ile biter. Her biri işler. Üçüne birden ihtiyaç duyan bir soruyu hiçbiri yanıtlamaz — aralarındaki entegrasyon siz olursunuz.",
    },
    {
      title: "Yalnız siz varsınız, admin gidecek yer bulamaz",
      body: "Devredecek bir resepsiyon yoktur. Haftayı kaydetmek, birinin sizin için kurduğu tabloyla veya toptancının defteriyle bir akşama dönüşür — ay sonunda yeniden kurulur çünkü hiçbir şey olurken toplamamıştır.",
    },
  ],

  dayInLife: {
    title: "Müşteriler arasında kaydedin. İstediğinizde bakın.",
    body: "Seansı bitirmek, ücretini almak, birinin altılı bloğunu düşmek, yağları yenilemek — sedye yenilenirken her biri bir dokunuş. Oldukları yerde kaydedildikleri için pratik, kimse oturup hatırlamadan sonra incelenebilir.",
    steps: [
      {
        title: "Bitmiş ile tahsil edilmiş iki farklı şeydir",
        body: "Gevşeme Masajı'nı işaretlemek saatin olduğunu söyler. Ödeme alınıp alınmadığını söylemez. İkisi ayrı durumlar olarak yaşar — böylece dolu bir salı, henüz gelmemiş bir rakama sessizce dönüşmez.",
      },
      {
        title: "Para ait olduğu seansa iner",
        body: "Ödeme o günün ayrışmamış kasasına değil, o müşteriyle o saate gider. Altı ay sonra tutar hâlâ kimden geldiğini ve hangi tedavi için olduğunu gösterir.",
      },
      {
        title: "Altılı bloklar kasadan değil bloktan düşer",
        body: "Ön ödemeli bloğun ortasındaki biri bir saatinizi alır ve hiçbir şey vermez — ve bu doğrudur. Krediyi düşmek kendi olay türü olarak kaydedilir; bu yüzden teslim edilen ile ödenen yanıltıcı tek toplama asla çökmez.",
      },
      {
        title: "Bir zaman dilimi seçin ve okuyun",
        body: "Gün, hafta, ay, çeyrek, yıl — gerçekten nasıl düşünüyorsanız. Ciroyu, kaydettiğiniz maliyetleri ve ikisinin bıraktığını görürsünüz. Sipariş veya taksitte hâlâ açık olan, zaten kaydedilmiş paradan ayrı kalır.",
      },
    ],
  },

  terminology: [
    {
      theirWord: "Derin Doku Masajı, Gevşeme Masajı, Spor Masajı",
      perelaiWord: "Bir Ziyaretteki hizmetler",
      why: "Masaj şablonu bu üçüyle başlar, düzenlenebilir. Her randevu müşteri, tedavi ve para hareketini birlikte taşıyan bir Ziyaret olur.",
    },
    {
      theirWord: "Seansa eklenen Sıcak Taş Eklentisi",
      perelaiWord: "Eklentiler",
      why: "Ekstra, yapıldığı Ziyarete bağlanır — kayıt başlangıçta rezerve edilenle değil gerçek seansla örtüşür.",
    },
    {
      theirWord: "Geçen perşembe ödediğiniz Masaj Yağları faturası",
      perelaiWord: "Bağlı maliyetler",
      why: "Düştüğü zaman dilimine karşı kaydedilir — yenileme desteklediği saatlerin yanında görünür. Kimse şişe tartmaz: bu girdiğiniz bir alışveriştir, bir müşterinin ne kullandığının ölçümü değil.",
    },
    {
      theirWord: "Altılı bloğun üçüncü seansındaki müşteri",
      perelaiWord: "Paket",
      why: "Krediler saat kullanıldıkça birer birer düşer. O kişiye hâlâ kalan, kartın arkasındaki not değil saklanan bir rakamdır.",
    },
    {
      theirWord: "Kursunu taksitle ödeyen biri",
      perelaiWord: "Sipariş ve taksitler",
      why: "Kalan, o belirli düzenlemeye aittir. Bir şey açık denildiğinde, yüzen belirsiz bir para hissi değil o belirli ödenmemiş tutar kastedilir.",
    },
    {
      theirWord: "Dokuz yıldır perşembe sabahı muntazam müşteri",
      perelaiWord: "Müşteri ciro geçmişi",
      why: "O kişinin sizinle gerçekten ne harcadığı, rezerve ettiği saatlerin yanında zaman içinde. Sadakat bir his olmaktan çıkar, bakabileceğiniz bir rakam olur.",
    },
    {
      theirWord: "Ayın alışverişleri çıktıktan sonra kalan",
      perelaiWord: "Kâr",
      why: "Dönemin cirosunu alır, kaydettiğiniz giderleri çıkarır. Saat ücretini yükseltmeye karar vermek için iş rakamı — kesinlikle vergi pozisyonu veya muhasebecinin alt çizgisi değil.",
    },
    {
      theirWord: "En azından bu yıl sadece siz ve bir sedye",
      perelaiWord: "Tek çalışma alanı",
      why: "Solo çalışın. İhtiyacınız olduğunda kişi ekleyin — burada ikinci bir çift el varsayılmaz ve hiç olmasa da yukarıdakilerin hiçbiri bozulmaz.",
    },
  ],

  setup: {
    title: "Bir akşam, bir hafta sonu değil.",
    body: "Üç tedavi, bir eklenti ve bir maliyet türü geldiğinizde hazır. Aşağıdakilerin hepsi isteğe bağlı düzen.",
    steps: [
      {
        title: "Masaj şablonuna inin",
        body: "Bu sayfadan gelmek Derin Doku Masajı, Gevşeme Masajı ve Spor Masajı'nı hazır verir. Kimse boş ekrana bakıp altmış dakikalık Swedish'e ne diyeceğini düşünmez.",
      },
      {
        title: "Pratiğinize uydurun",
        body: "Süreler, ücretler, Sıcak Taş Eklentisi'nin ekstra olup olmayacağı ve gerçekten yenilediğiniz şeyin yerine Masaj Yağları. Yeniden adlandırın, silin, ekleyin — hiçbiri sabit değil.",
      },
      {
        title: "Pazartesi'nin ihtiyaç duyduğunu taşıyın",
        body: "Telefondan vCard ile numaralar, içinde yaşıyorsanız Google Takvim bağlantısı ve sizi buldukları yere yapıştırılacak bir bağlantı. Dokuz yıllık geçmiş sonra gelebilir — ya da hiç.",
      },
    ],
  },

  faq: [
    {
      q: "Tedavilerim hazır mı gelecek?",
      a: "Evet. Masaj şablonu Derin Doku Masajı, Gevşeme Masajı ve Spor Masajı ile başlar; ayrıca Sıcak Taş Eklentisi ve bağlı maliyet olarak Masaj Yağları gelir. Hepsi düzenlenebilir — dört veya on iki tedavili bir menü birkaç dakikalık iştir.",
    },
    {
      q: "Perelai klinik not tutar veya sigorta faturalaması yapar mı?",
      a: "Hayır, ve bunu doğrudan söylemek gerekir. Perelai pratiği yönetmek için müşteri ve ziyaret notları tutar. Sağlık kayıt sistemi değildir: intake veya SOAP yok, tedavi planı yok, tanı takibi yok, sigorta talebi veya faturalama yok. Pratiğiniz bunlara bağlıysa, Perelai o kısım için doğru araç değildir.",
    },
    {
      q: "Haftam tamamen doluysa, bu benim cirom mu?",
      a: "Mutlaka değil — ikisini karıştırmak, güzel görünen bir haftanın sonra hayal kırıklığına uğratma yoludur. Teslim ettiğiniz saat, ödeme aldığınız saat ve birinin ön ödemeli bloğundan düşülen saat burada üç farklı durumdur. Bilerek ayrı sayılırlar; böylece baktığınız rakam tek bir somut şeyi ifade eder.",
    },
    {
      q: "Birinin altılı blokta nerede olduğunu nasıl bilirim?",
      a: "Her kredi saat kullanıldıkça düşer; kalan, çekmecedeki kartta değil o müşteriye karşı saklanır. Taksitle ödenen kurslar aynı şekilde davranır: ödenmemiş kısım, zaten aldığınız paraya katılmak yerine kendi düzenlemesine bağlı kalır.",
    },
    {
      q: "Kâr rakamı nereden gelir?",
      a: "Seçtiğiniz zaman diliminin cirosu, eksi aynı dilime kaydettiğiniz giderler. Bir saatin doğru fiyatlanıp fiyatlanmadığına karar vermek için yararlıdır. Vergi pozisyonu değil, muhasebecinin imzalayacağı alt çizgi değil, muhasebecinin yerine geçmez.",
    },
  ],

  labels: {
    terminologyTitle: "Sözlüğünüzün bizimkine nasıl denk geldiği.",
    inYourChair: "Sedyede",
    inPerelai: "Perelai'de",
    whyItMatters: "Neden önemli",
    mocksTitle: "Sizinki gibi bir pratik, canlı gösterilir.",
    mocksBody: "Aşağıdaki rakamlar örnek niteliğindedir — bu şablonun üç tedavisi, eklentisi ve maliyet türünden üretilmiştir.",
    faqTitle: "Kayıt olmadan önce sorulan.",
  },

  whatItIsNot: {
    title: "Nerede biter.",
    body: "Teslim ettiğiniz saatlere bağlı parayı izler. Bilerek yapmadığı üç şey:",
    items: [
      {
        title: "Sağlık kayıt sistemi değil",
        body: "Notlar pratiği yönetmek içindir — kim hangi basıncı tercih eder, kim iki hafta sonra gelir. Intake formları, SOAP charting, tedavi planları, tanı takibi veya sigorta talepleri yok.",
      },
      {
        title: "Muhasebe yazılımı değil",
        body: "Seçilen bir dilim için ciroyu, kaydedilen maliyetleri ve ikisinin bıraktığını alırsınız. Defter tutma, beyan ve mali danışmanlık başkasının işidir — muhasebeciniz kendi işinde kalır.",
      },
      {
        title: "Pazar yeri değil",
        body: "Rezervasyon bağlantısı size aittir. Perelai müşteri ilişkisini kiralamaz.",
      },
    ],
  },

  cta: {
    title: "Haftanın gerçekten neye geldiğini bilin.",
    body: "Bir masaj hizmet listesinden başlayın; tamamlanan işi, kaydedilen ödemeleri, ön ödemeli seansları ve açık bakiyeleri ayrı, okunabilir kayıtlar olarak tutun.",
    label: "Çalışma alanı oluştur",
    microcopy: "Kurulumu tamamlamak için doğrulama e-postası alacaksınız.",
  },

  research: massageTherapistResearch,
}
