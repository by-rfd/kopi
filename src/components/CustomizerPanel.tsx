import React, { useMemo } from "react";
import { CoffeeRecipe, CustomSettings, CupSize, CoffeeMethod, SweetnessLevel, CoffeeLevel, IceLevel } from "../types";
import { calculateIngredients, getVolumeInMl } from "../data/recipes";
import { 
  CupSoda, 
  Beaker, 
  Coffee, 
  Droplet, 
  Thermometer, 
  Sparkles, 
  ChevronRight, 
  AlertCircle, 
  BookOpen, 
  BadgeHelp,
  Hammer
} from "lucide-react";

interface CustomizerPanelProps {
  recipe: CoffeeRecipe;
  settings: CustomSettings;
  onChangeSettings: (settings: CustomSettings) => void;
  children?: React.ReactNode;
}

export default function CustomizerPanel({ recipe, settings, onChangeSettings, children }: CustomizerPanelProps) {
  // Update helpers
  const handleUpdate = <K extends keyof CustomSettings>(key: K, value: CustomSettings[K]) => {
    onChangeSettings({
      ...settings,
      [key]: value
    });
  };

  const calculatedIngredients = useMemo(() => {
    return calculateIngredients(recipe.id, settings);
  }, [recipe.id, settings]);

  const volumeMl = getVolumeInMl(settings.cupSize);

  // Dynamic instructional steps based on selected custom values!
  const dynamicSteps = useMemo(() => {
    const isEspresso = settings.method === "Espresso";
    const sizeStr = settings.cupSize;
    const isIce = settings.iceLevel !== "Non Ice";
    const sweetnessText = settings.sweetness;

    const stepsList: string[] = [];

    // Preparation step
    stepsList.push(
      `Siapkan gelas saji atau tumbler berukuran minimal **${sizeStr}** (${volumeMl} ml). Pastikan seluruh peralatan bersih dan siap digunakan.`
    );

    // 1. SPECIFIC COFFEE STEPS

    if (recipe.id === "vietnam-drip") {
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan **Susu Kental Manis (SKM)** sesuai takaran di dasar gelas saji sebagai pondasi manis.`
        );
      }
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso murni berkrim harum memakai portafilter atau alat manual espresso.`
        );
        stepsList.push(
          `Letakkan phin filter khas Vietnam di atas gelas. Tuangkan espresso hangat bersuhu 90°C tersebut, tekan dengan dumper sedang, lalu alirkan kucuran air panas melingkar untuk penyaringan tetesan.`
        );
      } else {
        stepsList.push(
          `Masukkan bubuk kopi sachet instan murni tanpa ampas ke dalam phin filter Vietnam.`
        );
        stepsList.push(
          `Kunci saringan penekan (dumper) secara medium, tuangkan sedikit air mendidih untuk merendam kopi, lalu isi penuh air panas mendidih. Diamkan tetesan kopi meluncur perlahan selama 5 menit.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Aduk rata lapisan kopi pekat di atas dengan paduan manis susu kental manis di dasar gelas, kemudian masukkan balok es batu kristal secara perlahan.`
        );
      } else {
        stepsList.push(
          `Sajikan hangat. Aduk rata susu kental manis di bawah sesaat sebelum menikmatinya agar rasanya membaur mantap.`
        );
      }

    } else if (recipe.id === "susu-gula-aren") {
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan sirup **Gula Aren Cair** murni ke dasar gelas saji sebagai lapisan terbawah.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Masukkan **Es Batu Kristal** penuh langsung di atas sirup gula aren. Es batu tebal ini berfungsi menahan tumpukan susu segar dingin agar warnanya tidak lekas bercampur.`
        );
      }
      stepsList.push(
        `Tuang krimer/susu evaporasi gurih terlebih dahulu, kemudian disusul guyuran **Susu Segar Cair (UHT)** murni dari pinggir gelas agar menghasilkan lapisan gradasi putih yang estetik.`
      );
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso murni segar, lalu alirkan pelan-pelan di bagian atas cup memakai punggung sendok penyangga agar tercipta efek 3-warna yang megah.`
        );
      } else {
        stepsList.push(
          `Larutkan bubuk kopi instan dengan sangat sedikit air panas mendidih hingga mengental pekat, lalu tuangkan halus di bagian paling atas busa susu.`
        );
      }
      stepsList.push(
        `Aduk rata paduan arenal, susu murni, dan espresso harum tersebut sebelum diseruput!`
      );

    } else if (recipe.id === "cafe-latte" || recipe.id === "cappuccino" || recipe.id === "flat-white") {
      const isCap = recipe.id === "cappuccino";
      const isFlat = recipe.id === "flat-white";
      
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso segar ganda (double shot) murni yang kuat langsung ke dalam gelas atau cangkir saji Anda.`
        );
      } else {
        stepsList.push(
          `Sajikan konsentrat kopi dengan melarutkan bubuk kopi instan memakai sedikit air mendidih murni di cangkir.`
        );
      }
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tambahkan gula sirup cair sesuai takaran presisi, lalu aduk hingga melarut homogen di dasar kopi panas.`
        );
      }

      if (isIce) {
        stepsList.push(
          `Sajikan butiran es batu kristal pelan ke dalam kopi.`
        );
        if (isCap) {
          stepsList.push(
            `Kocok/froth susu segar hingga mengembang tebal menghasilkan foam kaku dingin. Tuang susu dingin perlahan dan letakkan foam tebal di bagian pucuk.`
          );
        } else {
          stepsList.push(
            `Tuang susu segar cair murni dingin langsung untuk melarutkan rasa kopi susu, sajikan segera.`
          );
        }
      } else {
        stepsList.push(
          `Panaskan susu segar cair full cream menggunakan frother/steam wand hingga suhu optimum 65°C demi memicu cita rasa manis laktosa natural.`
        );
        if (isCap) {
          stepsList.push(
            `Kocok susu hingga menghasilkan foam mikro tebal 1.5 - 2 cm, lalu tuangkan perlahan menahan busa, sendokkan foam tebal tersebut di atasnya, hias dengan taburan bubuk cokelat manis.`
          );
        } else if (isFlat) {
          stepsList.push(
            `Froth susu secara lembut (stretch seminimal mungkin) untuk membentuk microfoam super tipis berkilau (0.5 cm). Tuangkan memutar menyatu kokoh dengan espresso.`
          );
        } else {
          stepsList.push(
            `Froth susu membentuk busa mikro setebal 1 cm, ketuk pitcher agar buih kasar pecah, tuangkan perlahan melingkar dari ketinggian sedang lalu gambar lukisan latte art (Rsetta atau Tulip).`
          );
        }
      }

    } else if (recipe.id === "caramel-macchiato") {
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan **Sirup Vanilla Premium** di bagian dasar cangkir.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Masukkan es batu kristal ke dalam gelas, lalu tuang susu cair dingin murni hingga menyisakan ruang 2cm dari bibir.`
        );
      } else {
        stepsList.push(
          `Tuang susu segar panas yang ber-steam foam lembut langsung di atas sirup vanilla.`
        );
      }
      if (isEspresso) {
        stepsList.push(
          `Ambil ekstraksi espresso panas perlahan, tuangkan tepat di bagian tengah gelas membelah foam susu hingga meninggalkan tanda noda kecokelatan yang estetik.`
        );
      } else {
        stepsList.push(
          `Larutkan kopi sachet instan dengan sangat sedikit air panas mendidih, siramkan di atas tengah foam susu.`
        );
      }
      stepsList.push(
        `Gunakan **Saus Karamel** pekat untuk melukis jaring laba-laba bersilangan di permukaan foam. Nikmati lapisan rasa manis vanilla, creamy susu, pahit kopi, dan gurih karamel secara bertahap!`
      );

    } else if (recipe.id === "americano") {
      if (isIce) {
        stepsList.push(
          `Isi gelas dengan bongkahan es batu kristal dingin.`
        );
        stepsList.push(
          `Tuangkan air mineral steril dingin ke dalam gelas saji mendinginkan es.`
        );
      } else {
        stepsList.push(
          `Masukkan air panas mendidih murni bersuhu optimum 90°C ke dalam cangkir saji.`
        );
      }
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso panas murni langsung di atas air dingin/panas tersebut (Americano style) agar crema keemasan yang manis harum tetap terjaga utuh mengambang di atas.`
        );
      } else {
        stepsList.push(
          `Aduk rata bubuk kopi instan dengan air hangat tersebut hingga larut menyeluruh.`
        );
      }
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Campurkan simple syrup secukupnya jika Anda menyukai rasa manis penyegar dahaga.`
        );
      }

    } else if (recipe.id === "mochaccino") {
      stepsList.push(
        `Tuang saus cokelat pekat di dasar gelas atau lumuri dinding gelas interior dengan gulungan cokelat artistik.`
      );
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso murni pekat panas di atas cokelat, aduk cepat agar saus cokelat meleleh membaur menyatu sempurna dengan kehangatan kopi.`
        );
      } else {
        stepsList.push(
          `Larutkan bubuk moka murni dengan air panas, campur merata bersama saus cokelat dasar.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Masukkan es batu kristal secukupnya ke campuran moka cokelat.`
        );
        stepsList.push(
          `Tuangkan susu segar murni dingin. Tambahkan whipped cream semprot jika disukai dan parutan coklat di atas.`
        );
      } else {
        stepsList.push(
          `Tuangkan steamed fresh milk hangat, aduk pelan agar gradasi warnanya berpadu moka krem yang cantik.`
        );
      }

    } else if (recipe.id === "cold-brew") {
      stepsList.push(
        `Siapkan wadah toples jar kaca kering. Masukkan bubuk kopi gilingan kasar.`
      );
      stepsList.push(
        `Guyur air dingin bersuhu ruangan secara melingkar perlahan di atas bubuk kopi kasar. Tutup rapat toples.`
      );
      stepsList.push(
        `Rendam toples di dalam lemari es selama minimal 12 - 24 jam penuh agar zat ekstraksinya halus lembut tanpa asam tinggi.`
      );
      stepsList.push(
        `Saring cairan konsentrat dingin tersebut menggunakan filter kertas V60 ganda agar sejernih kristal tanpa ampas halus.`
      );
      stepsList.push(
        `Sajikan di gelas estetik bersama es batu kristal penuh. Opsional tambah sirup gula cair jika ingin rasa manis.`
      );

    } else if (recipe.id === "affogato") {
      stepsList.push(
        `Siapkan cangkir atau mangkuk dessert kecil lebar tahan dingin.`
      );
      stepsList.push(
        `Dinginkan mangkuk di freezer kulkas sebentar agar es batu / es krim tidak lekas meleleh saat tersiram espresso panas.`
      );
      stepsList.push(
        `Gunakan scoop es krim untuk meletakkan 1 atau 2 scoop es krim vanilla premium padat tepat di tengah mangkuk.`
      );
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso panas berkrema murni memakai cangkir kecil penampung terpisah.`
        );
        stepsList.push(
          `Sesaat sebelum dimakan, tuangkan secara dramatis espresso panas mengepul harum tersebut langsung di atas scoop es krim vanilla dingin.`
        );
      } else {
        stepsList.push(
          `Larutkan bubuk kopi instan dengan sesedikit air mendidih murni agar melumer sekental sirup coklat, siram di atas es.`
        );
      }
      stepsList.push(
        `Nikmati sensasi tabrakan kontras dari es manis beku vanilla berpadu espresso pekat pahit panas.`
      );

    } else if (recipe.id === "espresso") {
      stepsList.push(
        `Giling biji kopi premium Arabica-Robusta dengan kehalusan ultra halus (fine) sesuai gramasi parameter.`
      );
      stepsList.push(
        `Masukkan ke portafilter, ratakan menyeluruh menggunakan jarum distributor agar merata padat.`
      );
      stepsList.push(
        `Lakukan tamping mendatar lurus ke bawah dengan tekanan mantap agar tidak berlobang (channelling) saat diekstrak.`
      );
      stepsList.push(
        `Pasang portafilter ke mesin kopi, jalankan tuas ekstraksi selama 25-30 detik penuh menghasilkan cairan kopi berkilau minyak emas.`
      );
      stepsList.push(
        `Sajikan hangat dalam cangkir kecil demitasse bersama segelas air mineral penyegar lidah.`
      );

    } else if (recipe.id === "spanish-latte") {
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan **Susu Kental Manis (SKM)** putih pekat ke dasar gelas saji.`
        );
      }
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso ganda panas murni langsung dituangkan di atas susu kental manis.`
        );
        stepsList.push(
          `Aduk cepat memakai sendok agar susu kental manis meleleh larut seutuhnya bersama espresso panas.`
        );
      } else {
        stepsList.push(
          `Seduh kopi instan bubuk sachet pekat, satukan dengan susu kental manis dan aduk sampai halus.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Masukkan es batu kristal ke cangkir.`
        );
        stepsList.push(
          `Guyur **Susu Segar Cair UHT** dingin perlahan di atas paduan kopi aren-susu kental manis tersebut.`
        );
      } else {
        stepsList.push(
          `Tuangkan susu panas yang di-steam berbusa tipis pelan-pelan.`
        );
      }

    } else if (recipe.id === "kopi-tubruk") {
      stepsList.push(
        `Siapkan **${settings.coffeeLevel === "Light" ? "8" : settings.coffeeLevel === "Normal" ? "12" : "18"}g** kopi bubuk tradisional berserat halus-sedang.`
      );
      stepsList.push(
        `Masukkan kopi langsung ke gelas keramik atau kaca tebal.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Masukkan gula pasir putih tebu murni sesuai berat kalkulator di sebelah kopi.`
        );
      }
      stepsList.push(
        `Didihkan air mineral murni bersuhu tinggi mendekati 96°C.`
      );
      stepsList.push(
        `Gerojok air mendidih tersebut melingkar cepat langsung memukul kopi tubruk. Aduk merata 10 detik agar buih crema kopi meluap naik.`
      );
      stepsList.push(
        `Tutup rapat gelas saji, diamkan selama **4 menit** penuh agar ampas kasarnya tenggelam aman ke dasar gelas sebelum diminum perlahan!`
      );

    } else if (recipe.id === "dalgona-coffee") {
      stepsList.push(
        `Campar bubuk kopi instan murni sachet, gula pengembang, dan air panas mendidih dengan takaran seimbang.`
      );
      stepsList.push(
        `Kocok super cepat berputar berulang menggunakan mixer atau frother listrik mungil selama 3 menit hingga berubah cokelat emas berkilau kaku kembung (stiff-peak).`
      );
      stepsList.push(
        `Siapkan gelas tinggi berisi es batu kristal dan **Susu Segar Cair UHT** penuh lemak dingin.`
      );
      stepsList.push(
        `Sendokkan foam dalgona mousse cokelat tebal tersebut mengapung estetik di permukaan susu putih.`
      );
      stepsList.push(
        `Siap disuguhkan! Mintalah pelanggan mengaduk foam gurih tersebut membaur bersama susu dingin saat meminumnya.`
      );

    } else if (recipe.id === "v60-drip") {
      stepsList.push(
        `Siapkan alat dripper V60, teko leher angsa, filter kertas ukuran 02, server cangkir bawah, serta timbangan.`
      );
      stepsList.push(
        `Lipat ujung kertas filter, masukkan ke dripper V60, siram seluruh permukaan kertas dengan air panas (rincing) untuk membasuh debu kertas dan membuangnya dari server.`
      );
      stepsList.push(
        `Masukkan kopi gilingan medium-kasar Arabica pilihan Anda ke dalam filter saring, ratakan permukaannya.`
      );
      stepsList.push(
        `Semburkan 40ml air panas mendidih 91°C melingkar pelan di atas kopi kopi. Lakukan 'Blooming (pra-basah)' selama 40 detik untuk melepas gas karbondioksida pahit kopi.`
      );
      stepsList.push(
        `Lakukan penuangan air utama memutar konstan dari tengah keluar secara bertahap dalam 3 termin tuangan. Biarkan air meresap turun perlahan hingga berat cairan target tercapai dalam total waktu 2.5 - 3 menit.`
      );
      stepsList.push(
        `Singkirkan ampas, goyangkan carrafe kopi server agar tingkat keasaman murni Arabica menyatu seimbang. Sajikan hangat.`
      );

    } else if (recipe.id === "butterscotch-latte" || recipe.id === "hazelnut-latte" || recipe.id === "vanilla-latte") {
      const flavorName = recipe.id === "butterscotch-latte" ? "Butterscotch Syrup" : recipe.id === "hazelnut-latte" ? "Sirup Hazelnut Panggang" : "Sirup Vanilla Aromatik";
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan **${flavorName}** premium ke bagian dasar cangkir saji Anda.`
        );
      }
      if (isEspresso) {
        stepsList.push(
          `Ekstrak espresso murni (double shot) langsung mengucur di cangkir, aduk cepat bersama sirup mentega/kacang rasa pilihan tersebut.`
        );
      } else {
        stepsList.push(
          `Larutkan bubuk kopi instan dengan sangat sedikit air panas mendidih, tuang menyatu melarutkan sirup.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Masukkan es batu kristal memenuhi cangkir.`
        );
        stepsList.push(
          `Tuangkan **Susu Segar UHT** dingin perlahan. Selesaikan sajian es kopi rasa butterskotch / hazelnut / vanilla yang harum gurih!`
        );
      } else {
        stepsList.push(
          `Panaskan susu segar cair full cream hingga suhu 65°C berbusa lembut, tuang merata menggambar kepulan latte di permukaan lattes.`
        );
      }
      if (recipe.id === "butterscotch-latte") {
        stepsList.push(
          `Tambahkan biskuit mentega caramel renyah yang dihancurkan kasar sebagai garnish gurih di atas foam susu.`
        );
      }

    // 2. SPECIFIC NON-COFFEE STEPS (Matcha, taro, red velvet, chocolate, tea, sparkling etc.)

    } else if (recipe.id === "matcha-latte") {
      stepsList.push(
        `Masukkan bubuk teh hijau Jepang premium murni (Uji Matcha) ke mangkok pengaduk.`
      );
      stepsList.push(
        `Tuang air panas 80°C sekitar 40ml. Kocok cepat memakai bamboo whisk chasen atau frother kecil membentuk gerakan huruf 'W' cepat selama 30 detik sampai larut berbusa halus tanpa gumpalan.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tambahkan simple syrup cair manis ke larutan matcha, aduk.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Siapkan gelas estetik baru, isi es batu kristal penuh, lalu tuang **Susu Segar Cair (UHT)** dingin memenuhi 3/4 gelas.`
        );
        stepsList.push(
          `Tuangkan larutan matcha hijau menyala tersebut di paling atas cup secara melingkar perlahan demi gradasi hijau-putih yang memukau.`
        );
      } else {
        stepsList.push(
          `Gerojok susu segar panas yang sudah di-steamed setebal 1cm foam lembut langsung ke atas adonan matcha manis hangat, sajikan cantik.`
        );
      }

    } else if (recipe.id === "taro-latte" || recipe.id === "red-velvet") {
      const powderName = recipe.id === "taro-latte" ? "Taro (Ubi Ungu)" : "Red Velvet";
      stepsList.push(
        `Masukkan bubuk rasa **${powderName}** premium ke dalam wadah pelarut.`
      );
      stepsList.push(
        `Tuangkan sedikit air panas bersuhu 80°C sekitar 40-55ml, aduk melingkar berputar hingga melumer pekat gumpal pasta halus berwarna pastel yang harum.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Masukkan kental manis putih atau sirup gula penyelarasan rasa pasta.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Isi gelas saji dengan butir es batu kristal melimpah.`
        );
        stepsList.push(
          `Guyur **Susu Segar Cair UHT** dingin murni menyisakan ruang 2cm dari atas.`
        );
        stepsList.push(
          `Tuangkan pasta berwarna pastel (${recipe.id === "taro-latte" ? "Ungu Taro" : "Merah Red Velvet"}) di bagian paling atas susu murni, biarkan partikel pasta tenggelam bergulung-gulung estetik.`
        );
      } else {
        stepsList.push(
          `Tuangkan susu segar panas yang telah di-froth tebal lembut langsung dari atas pitcher, aduk homogeny.`
        );
      }

    } else if (recipe.id === "chocolate-signature") {
      stepsList.push(
        `Gunakan saus cokelat hitam kental, semprotkan meliuk-liuk di dalam sekeliling dinding gelas agar membentuk guratan seni lumeran batangan cokelat.`
      );
      stepsList.push(
        `Larutkan bubuk kakao dark coklat murni Belgia memakai sedikit sekali air panas mendidih di wadah sekunder hingga mencair lumer pekat pekat.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Satukan simple syrup murni ke pasta cokelat hangat tersebut agar rasanya berbobot manis gurih cokelat seimbang.`
        );
      }
      if (isIce) {
        stepsList.push(
          `Letakkan es batu mampat padat, isi susu segar full cream dingin murni sampai hampir penuh.`
        );
        stepsList.push(
          `Guyurkan pasta Belgian cokelat kental melingkar di atas es susu, lalu hiasi dengan foam whipped cream melimpah dan taburan serutan coklat batang di paling pucuk cup.`
        );
      } else {
        stepsList.push(
          `Campurkan adonan coklat Belgian bersama steamed milk panas murni hingga bertekstur cokelat kental hangat elegan.`
        );
      }

    } else if (recipe.id === "thai-tea") {
      stepsList.push(
        `Rebus air mineral bersih hingga bergelembung penuh mendidih, lalu seduh daun teh Thailand Cha Tra Mue selama 5 menit penuh agar aromatik rempahnya terekstrak tebal.`
      );
      stepsList.push(
        `Saring ampas teh menggunakan jaring kain saring tarik tradisional Thailand secara bolak-balik.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Masukkan susu kental manis putih langsung ke dalam kuah teh merah pekat selagi panas membara, lalu aduk cepat hingga berwarna oranye jingga muda susu khas Thailand.`
        );
      }
      stepsList.push(
        `Isikan gelas takeaway tinggi berukuran ${settings.cupSize} dengan bongkahan es batu kristal penuh hingga meluap ke atas.`
      );
      stepsList.push(
        `Tuang teh jingga manis tersebut melingkari es batu, kemudian guyur bagian atas cup penyajian terakhir dengan **Susu Evaporasi** cair gurih berminyak dingin mengambang menggiurkan.`
      );

    } else if (recipe.id === "lemon-passionfruit") {
      stepsList.push(
        `Seduh daun ramuan jasmine green tea (teh hijau melati wangi) bersuhu 90°C selama 3 menit, saring ampas daunnya.`
      );
      stepsList.push(
        `Peras buah lemon segar murni murni di perasan manual untuk mengeluarkan air lemon asam segar tanpa biji.`
      );
      stepsList.push(
        `Siapkan gelas pengocok shaker minuman dingin (bila es) atau gelas saji. Masukkan sirup buah markisa (passion fruit) tropis, es batu penuh, perasan air lemon murni, lalu diguyur seduhan teh melati dingin.`
      );
      stepsList.push(
        `Kocok/shake kuat-kuat selama 10 detik penuh agar rasa asam asri, manis buah tropis markisa, dan teh wangi blosom melati membaur menjadi kristal beku.`
      );
      stepsList.push(
        `Tuang isi shaker ke dalam gelas kaca saji, hias dengan potongan irisan jeruk lemon tipis melingkar di dinding gelas dan sehelai daun mint di atas.`
      );

    } else if (recipe.id === "lychee-yakult") {
      stepsList.push(
        `Ambil buah leci manis segar kalengan, letakkan di dasar gelas saji tinggi, bejek memar sedikit agar sari rasa leci menyebar.`
      );
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuangkan sirup leci konsentrat murni manis ke dasar gelas.`
        );
      }
      stepsList.push(
        `Timbun gelas dengan tumpukan es batu kristal sedang penuh.`
      );
      stepsList.push(
        `Buka botol minuman susu fermentasi Yakult steril dari lemari es, tuangkan langsung Yakult tersebut menerobos sela-sela es mendinginkan.`
      );
      stepsList.push(
        `Guyur bagian atas cup penyajian dengan air soda tawar dingin (Sprite atau air soda kaleng) sampai penuh menggelitik berdesis. Sajikan dengan tusukan dua buah buah leci cantik.`
      );

    } else if (recipe.id === "brown-sugar-milk") {
      if (sweetnessText !== "Non Sugar") {
        stepsList.push(
          `Tuang sirup gula aren kental murni (brown sugar) meliuk di dinding lingkar dalam cup agar membentuk pola dekorasi lumeran karamel kental yang indah ke bawah.`
        );
      }
      stepsList.push(
        `Masukkan butiran mutiara tapioka kenyal manis (boba aren hangat lembut) ke dasar cup.`
      );
      stepsList.push(
        `Letakkan butiran es batu kristal silinder mampat perlahan agar tidak mengacaukan boba.`
      );
      stepsList.push(
        `Tuangkan **Susu Segar Cair (Fresh Milk Full Cream dingin)** segar secara perlahan sampai penuh mendamaikan suasana.`
      );
      stepsList.push(
        `Nikmati sensasi dingin boba aren manis kenyal berpadu gurihnya susu murni segar tanpa kopi murni.`
      );

    } else if (recipe.id === "strawberry-matcha") {
      stepsList.push(
        `Ambil puree/selai stroberi merah tebal buatan dapur kafe, masukkan di dasar gelas saji sebagai pondasi warna merah segar lumeran buah pertama.`
      );
      stepsList.push(
        `Letakkan es buah batu kristal pelan-pelan memenuhi 2/3 isi gelas.`
      );
      stepsList.push(
        `Tuang **Susu Segar Cair (UHT)** dingin putih penuh lemak pelan-pelan menyusuri es batu, menyisakan batas gradasi putih di atas lapisan stroberi merah.`
      );
      stepsList.push(
        `Seduh bubuk matcha hijau jepang organik memakai 40ml air hangat 80°C, kocok/whisk hingga larut jernih hijau pekat berbusa halus.`
      );
      stepsList.push(
        `Alirkan cairan matcha hijau pekat tersebut di paling pucuk es batu memakai bantuan punggung sendok secara terlindung agar terbentuk Visual Sempurna 3-Warna: Merah Stroberi dasar, Putih Susu tengah, Hijau Matcha puncak!`
      );

    } else if (recipe.id === "cookies-cream") {
      stepsList.push(
        `Masukkan kepingan biskuit coklat Oreo murni sesuai takaran resep ke dalam blender.`
      );
      stepsList.push(
        `Tambahkan scoop padat es krim vanilla premium, susu segar UHT cair full cream dingin, dan sedikit sirup manis gula aren.`
      );
      stepsList.push(
        `Blender padat berkecepatan tinggi selama 30-45 detik hingga seluruh biskuit Oreo dan es krim vanilla beku melumer menyatu menjadi krim milkshake yang tebal halus berbintik hitam.`
      );
      stepsList.push(
        `Tuangkan milkshake Oreo kental ke gelas saji tinggi.`
      );
      stepsList.push(
        `Semprotkan busa whipped cream gembung di atas, lalu tumpuk hias dengan taburan serpihan renyah bscuit Oreo kasar dan sebutir biskuit Oreo utuh tegak berdiri.`
      );
    }

    return stepsList;
  }, [recipe.id, settings, volumeMl]);

  // Check if active recipe is coffee
  const isCoffeeRecipe = recipe.isCoffee !== false;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start w-full" id="customizer-panel">
      
      {/* LEFT COLUMN: Controls, Custom Name Preset Form, and Tips */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* 1. SELECTION CONTROLS */}
        <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-xs">
          <h3 className="mb-5 flex items-center gap-2 text-base font-bold text-stone-900 border-b border-amber-50 pb-3">
            <Hammer className="h-5 w-5 text-amber-900" />
            Kustomisasi Resep Barista
          </h3>

          <div className="grid grid-cols-1 gap-5">
            
            {/* Cup Size */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                <CupSoda className="h-3.5 w-3.5 text-amber-900" />
                Ukuran Cup (Volume)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(["12 oz", "13 oz", "14 oz", "16 oz", "200 ml", "250 ml", "500 ml", "1 L"] as CupSize[]).map((size) => (
                  <button
                    key={size}
                    id={`btn-size-${size.replace(" ", "-")}`}
                    onClick={() => handleUpdate("cupSize", size)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                      settings.cupSize === size
                        ? "bg-amber-950 text-white shadow-xs"
                        : "bg-amber-50/50 text-amber-950 hover:bg-amber-100/70 border border-amber-100"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Coffee Method (Only shown for coffee recipes!) */}
            {isCoffeeRecipe ? (
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                  <Coffee className="h-3.5 w-3.5 text-amber-900" />
                  Metode Ekstraksi Kopi
                </label>
                <div className="flex gap-2">
                  {(["Espresso", "Kopi Sachet"] as CoffeeMethod[]).map((met) => (
                    <button
                      key={met}
                      id={`btn-method-${met.replace(" ", "-")}`}
                      onClick={() => handleUpdate("method", met)}
                      className={`flex-1 rounded-lg py-2 text-xs font-bold transition-all border ${
                        settings.method === met
                          ? "bg-amber-900 text-white border-amber-950 shadow-xs"
                          : "bg-amber-50/50 text-amber-950 hover:bg-amber-100/70 border-amber-100"
                      }`}
                    >
                      {met}
                    </button>
                  ))}
                </div>
                {settings.method === "Kopi Sachet" && (
                  <p className="text-[10px] text-stone-500 italic mt-0.5 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 shrink-0 text-amber-700" />
                    Menggunakan formula kopi bubuk instan murni tanpa ampas.
                  </p>
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-center rounded-xl bg-orange-50/20 border border-amber-100/50 p-3">
                <h4 className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-amber-800 animate-pulse" />
                  Formula Non-Kopi
                </h4>
                <p className="text-[10px] text-stone-600 mt-1 leading-relaxed">
                  Minuman segar berenergi yang disuguhkan 100% bebas dari bubuk kafein kopi murni. Sangat ramah dinikmati oleh segala usia kapan pun sepanjang hari.
                </p>
              </div>
            )}

            {/* Sweetness */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                <Droplet className="h-3.5 w-3.5 text-amber-900" />
                Kadar Kemanisan (Sweetness)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(["Non Sugar", "Less Sugar", "Normal", "Sweet", "Extra Sweet"] as SweetnessLevel[]).map((sweet) => (
                  <button
                    key={sweet}
                    id={`btn-sweet-${sweet.replace(" ", "-")}`}
                    onClick={() => handleUpdate("sweetness", sweet)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                      settings.sweetness === sweet
                        ? "bg-amber-900 text-white shadow-xs"
                        : "bg-amber-50/50 text-amber-950 hover:bg-amber-100/70 border border-amber-100"
                    }`}
                  >
                    {sweet === "Non Sugar" ? "Tanpa Gula" : sweet === "Less Sugar" ? "Sedikit" : sweet === "Normal" ? "Normal" : sweet === "Sweet" ? "Manis" : "Extra Manis"}
                  </button>
                ))}
              </div>
            </div>

            {/* Coffee/Flavor Level */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                <Beaker className="h-3.5 w-3.5 text-amber-900" />
                {isCoffeeRecipe ? "Kepekatan Kopi (Coffee Level)" : "Intensitas Kekentalan Rasa"}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(["Light", "Normal", "Strong", "Extra Strong"] as CoffeeLevel[]).map((lvl) => (
                  <button
                    key={lvl}
                    id={`btn-level-${lvl.replace(" ", "-")}`}
                    onClick={() => handleUpdate("coffeeLevel", lvl)}
                    className={`rounded-lg px-2.5 py-1.5 text-xs font-semibold transition-all ${
                      settings.coffeeLevel === lvl
                        ? "bg-amber-900 text-white shadow-xs"
                        : "bg-amber-50/50 text-amber-950 hover:bg-amber-100/70 border border-amber-100"
                    }`}
                  >
                    {lvl === "Light" 
                      ? "Ringan" 
                      : lvl === "Normal" 
                        ? "Sedang" 
                        : lvl === "Strong" 
                          ? (isCoffeeRecipe ? "Kuat" : "Mantap") 
                          : (isCoffeeRecipe ? "Sangat Kuat" : "Ekstra Mantap")}
                  </button>
                ))}
              </div>
            </div>

            {/* Ice Level */}
            <div className="flex flex-col gap-2">
              <label className="flex items-center gap-1.5 text-xs font-bold text-stone-700 uppercase tracking-wider">
                <Thermometer className="h-3.5 w-3.5 text-amber-900" />
                Takaran Es Batu (Ice Level)
              </label>
              <div className="flex flex-wrap gap-1.5">
                {(["Non Ice", "Less Ice", "Normal Ice", "Extra Ice"] as IceLevel[]).map((ice) => (
                  <button
                    key={ice}
                    id={`btn-ice-${ice.replace(" ", "-")}`}
                    onClick={() => handleUpdate("iceLevel", ice)}
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                      settings.iceLevel === ice
                        ? "bg-amber-900 text-white shadow-xs"
                        : "bg-amber-50/50 text-stone-800 hover:bg-amber-100/70 border border-amber-100"
                    }`}
                  >
                    {ice === "Non Ice" ? "Suhu Hangat / Tanpa Es" : ice === "Less Ice" ? "Sedikit Es" : ice === "Normal Ice" ? "Normal Es" : "Ekstra Es"}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Dynamic drink profile preview box */}
          <div className="mt-5 rounded-xl bg-amber-50/40 p-4 border border-amber-100/70">
            <p className="text-xs text-amber-950 font-medium leading-relaxed flex items-start gap-2">
              <Sparkles className="h-4 w-4 shrink-0 text-amber-800 mt-0.5" />
              <span>
                <strong>Profil Minumanmu:</strong> Gelas <strong>{settings.cupSize}</strong> (~{volumeMl} ml) kopi <strong>{recipe.name}</strong> dengan metode penyajian rasa kopi <strong>{settings.coffeeLevel === "Light" ? "Ringan" : settings.coffeeLevel === "Normal" ? "Sedang" : settings.coffeeLevel === "Strong" ? "Pekat Kuat" : "Ekstra Kuat Barista"}</strong>, rasa kemanisan <strong>{settings.sweetness === "Non Sugar" ? "Tanpa Gula" : settings.sweetness === "Less Sugar" ? "Lebih Sedikit" : settings.sweetness === "Normal" ? "Sedang Enak" : settings.sweetness === "Sweet" ? "Manis Nyata" : "Ekstra Manis"}</strong>, serta disuguhkan dengan kadar es batu <strong>{settings.iceLevel === "Non Ice" ? "Hangat Nikmat" : settings.iceLevel === "Less Ice" ? "Lebih Dingin Sedikit" : settings.iceLevel === "Normal Ice" ? "Seger Es Sedang" : "Dingin Es Ekstra"}</strong>.
              </span>
            </p>
          </div>
        </div>

        {/* Dynamic children from App.tsx (Preset Save box) */}
        {children}

        {/* 4. TIPS & RECOMMENDATION SECTION */}
        <div id="tips-and-recommendations" className="rounded-2xl border border-amber-100 bg-amber-50/20 p-6 shadow-xs">
          <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-stone-900">
            <BadgeHelp className="h-4.5 w-4.5 text-amber-900" />
            Tips & Rekomendasi Barista
          </h3>
          
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-white p-4 border border-amber-100/60 shadow-xxs">
              <h4 className="text-xs font-bold text-amber-950 mb-1">Rekomendasi Biji Kopi:</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Untuk kopi <strong>{recipe.name}</strong>, disarankan memakai <strong>{recipe.recommendedBeans}</strong> agar cita rasanya menonjol seimbang.
              </p>
            </div>

            <div className="rounded-xl bg-white p-4 border border-amber-100/60 shadow-xxs">
              <h4 className="text-xs font-bold text-amber-950 mb-1">Kualitas Air & Es Batu:</h4>
              <p className="text-xs text-stone-600 leading-relaxed">
                Gunakan air TDS 100-150 ppm bersuhu <strong>{recipe.temperatureCelcius}</strong>. Es batu kristal tabung (tube ice) meleleh lebih lambat dibanding es serut, menjaga rasa tetap pekat.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: Calculations & Steps */}
      <div className="lg:col-span-7 flex flex-col gap-6">
        
        {/* 2. INGREDIENTS CALCULATION SECTION */}
        <div id="ingredient-calculations" className="rounded-2xl border border-amber-100 bg-[#FCFAF6] p-6 shadow-xs">
          <div className="mb-4 flex items-center justify-between border-b border-amber-100/60 pb-3">
            <h3 className="flex items-center gap-2 text-base font-bold text-stone-900">
              <Beaker className="h-5 w-5 text-amber-950" />
              Takaran Formula Presisi ({settings.cupSize})
            </h3>
            <span className="rounded-md bg-amber-900/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-amber-900 uppercase tracking-wider">
              AUTO SCALE
            </span>
          </div>

          <p className="text-xs text-stone-600 mb-4 leading-relaxed">
            Resep otomatis disesuaikan secara proporsional berdasarkan takaran volume cup, kepekatan rasa kopi, kemanisan gula, dan pelelehan es batu:
          </p>

          {/* List of calculated ingredients */}
          <div className="flex flex-col gap-3">
            {calculatedIngredients.map((ing, i) => (
              <div 
                key={i} 
                className="flex flex-col sm:flex-row sm:items-center justify-between p-3.5 rounded-xl border border-amber-100/50 bg-white shadow-xs hover:border-amber-200 transition-all"
              >
                <div className="flex items-start gap-2.5">
                  <span className="mt-1 h-2 w-2 rounded-full bg-amber-800 shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold text-stone-850">
                      {ing.name}
                    </h4>
                    {ing.notes && (
                      <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">
                        {ing.notes}
                      </p>
                    )}
                  </div>
                </div>
                <div className="mt-2 sm:mt-0 flex items-center justify-end font-mono">
                  <span className="text-sm font-black text-amber-950 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-100">
                    {ing.amount} <span className="text-[10px] text-amber-800 uppercase font-bold">{ing.unit}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Informative advice on barista parameters */}
          <div className="mt-5 rounded-xl bg-amber-50/20 p-4 border border-amber-100/40 flex items-start gap-2.5">
            <AlertCircle className="h-4.5 w-4.5 text-amber-900 shrink-0 mt-0.5" />
            <div className="text-[11px] leading-relaxed text-stone-700">
              <span className="font-bold text-amber-950">Catatan Rasio:</span> Suhu penyeduhan stabil di kisaran <strong>{recipe.temperatureCelcius}</strong> akan memelihara senyawa asam & minyak aromatik secara maksimal. Apabila diganti alternatif susu nabati seperti oatmilk, kurangi gula cair sekitar 5ml karena susu nabati umumnya sudah membawa rasa manis natural.
            </div>
          </div>
        </div>

        {/* 3. HOW TO MAKE SECTION */}
        <div id="how-to-make" className="rounded-2xl border border-amber-100 bg-white p-6 shadow-xs">
          <h3 className="mb-4 flex items-center gap-2 text-base font-bold text-stone-900 border-b border-amber-150 pb-3">
            <BookOpen className="h-5 w-5 text-amber-900" />
            Cara Membuat (Panduan Langkah Kerja)
          </h3>
          
          <div className="relative border-l-2 border-dashed border-amber-200 pl-6 ml-3 space-y-6">
            {dynamicSteps.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline dot */}
                <span className="absolute -left-[31px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-900 text-[10px] font-black text-white ring-4 ring-white group-hover:scale-110 transition-all">
                  {idx + 1}
                </span>
                <p className="text-xs leading-relaxed text-stone-700">
                  {/* Manual simple markdown-bold converter */}
                  {step.split("**").map((text, sIdx) => 
                    sIdx % 2 === 1 ? <strong key={sIdx} className="text-amber-950 font-extrabold">{text}</strong> : text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
