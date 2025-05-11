import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import logo from "./assets/logo.svg";
import { CompetitionCard } from "./components/competition-card";
import { ArrowRight, ExternalLink, Mail } from "lucide-react";
import {
  SiInstagram,
  SiSpotify,
  SiWhatsapp,
  SiX,
} from "@icons-pack/react-simple-icons";

const socialLinks = [
  {
    name: "Instagram",
    icon: SiInstagram,
    url: "https://www.instagram.com/teksound8/",
    color: "text-[#FF0069]",
  },
  { name: "X.com", icon: SiX, url: "https://x.com/teksound" },
  {
    name: "Spotify",
    icon: SiSpotify,
    url: "https://open.spotify.com/show/08aF8dUgzEWNWl1P1S7us4",
    color: "text-[#1ED760]",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:teksound.sman8jkt@gmail.com",
    color: "text-[#EA4335]",
  },
];

const mainContacts = [
  {
    name: "Henokh",
    specialty: "CP Umum",
    contact: "https://wa.me/6287882829131",
  },
  {
    name: "Aldi",
    specialty: "CP Tournament",
    contact: "https://wa.me/6287764825736",
  },
];

const competitions = [
  {
    title: "Mobile Legends",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contact: "https://wa.me/6289531671507",
    name: "Ryan",
  },
  {
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contact: "https://wa.me/6281905318471",
    name: "Fathur",
  },
  {
    title: "CCInformatika",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    contact: "https://wa.me/6285215319829",
    name: "Farrell",
  },
];

export default function EventPage() {
  return (
    <div className="bg-yummers flex min-h-screen w-full items-center justify-center p-4">
      {/* Header */}
      <div className="border-styled from-back-100 to-back-100 flex h-full w-full max-w-5xl flex-col items-center gap-6 rounded-lg bg-gradient-to-b p-6 shadow-lg">
        <div className="bg-back-200 flex aspect-square w-56 items-center justify-center rounded-full p-3 shadow-md">
          <img
            src={logo}
            className="motion-preset-expand size-full"
            alt="logo"
          />
        </div>
        <div className="motion-preset-blur-down mt-4 text-center">
          <h1 className="from-crimson-600 to-tx-500 bg-gradient-to-br bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            T<span className="font-black">8</span>CHNOFEST
          </h1>

          <h2 className="text-tx-800 mt-1 text-xs font-medium md:text-sm">
            8 Technology Festival
          </h2>

          <p className="mt-3 text-sm font-medium md:text-base">
            Teknologi dan Soundsystem
          </p>
        </div>

        {/* CTA Register */}
        <a
          href="https://placehold.co/600x400?text=Not+Ready"
          className="motion-preset-expand group shoadow-lg from-tx-500 to-crimson-600 hover:from-tx-400 hover:to-crimson-500 mt-4 flex items-center rounded-lg bg-linear-to-br px-4 py-3 font-bold text-white transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-2 inline-block" />
          Daftar Sekarang
          <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Main Contacts */}
        <div className="flex w-full flex-wrap items-center justify-center gap-6">
          {mainContacts.map((contact, index) => (
            <a
              key={index}
              href={contact.contact}
              className="motion-preset-expand group flex w-min items-center rounded-lg bg-[#25D366] px-4 py-3 font-bold whitespace-nowrap text-white transition duration-200 hover:bg-[#25D366]/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiWhatsapp className="mr-2 inline-block" />
              {contact.specialty} ({contact.name})
            </a>
          ))}
        </div>

        <div className="my-4 w-full overflow-hidden rounded-sm">
          <hr className="bg-crimson-600 h-1 w-full border-0" />
          <hr className="h-1 w-full border-0 bg-[#f98800]" />
          <hr className="bg-tx-500 h-1 w-full border-0" />
        </div>

        {/* 3 Competitions */}
        <h2 className="relative mb-6 text-center text-2xl font-bold md:text-3xl">
          <span className="relative inline-block">
            Cabang Lomba
            <span className="from-crimson-600 to-tx-500 absolute right-0 -bottom-2 left-0 h-1 rounded-full bg-linear-to-b"></span>
          </span>
        </h2>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6">
          {competitions.map((competition, index) => (
            <CompetitionCard
              key={index}
              title={competition.title}
              description={competition.description}
              contact={competition.contact}
              name={competition.name}
            />
          ))}
        </div>

        <div className="my-4 w-full overflow-hidden rounded-sm">
          <hr className="bg-crimson-600 h-1 w-full border-0" />
          <hr className="h-1 w-full border-0 bg-[#f98800]" />
          <hr className="bg-tx-500 h-1 w-full border-0" />
        </div>

        {/* Rules, General + 3 for comps */}
        <h2 className="relative mb-6 text-center text-2xl font-bold md:text-3xl">
          <span className="relative inline-block">
            Juklak Juknis
            <span className="from-crimson-600 to-tx-500 absolute right-0 -bottom-2 left-0 h-1 rounded-full bg-linear-to-b"></span>
          </span>
        </h2>
        <div className="border-styled bg-back-50 w-full rounded-lg">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="bg-back-100 h-full w-full max-w-full rounded-lg p-1 shadow-sm">
              <div className="flex w-full items-center overflow-x-auto">
                <TabsTrigger
                  value="general"
                  className="from-crimson-600 to-tx-500 w-full border-0 data-[state=active]:bg-linear-to-br data-[state=active]:text-white"
                >
                  Ketentuan Umum
                </TabsTrigger>
                <TabsTrigger
                  value="mobile-legends"
                  className="from-crimson-600 to-tx-500 w-full border-0 data-[state=active]:bg-linear-to-br data-[state=active]:text-white"
                >
                  Mobile Legends
                </TabsTrigger>
                <TabsTrigger
                  value="web-design"
                  className="from-crimson-600 to-tx-500 w-full border-0 data-[state=active]:bg-linear-to-br data-[state=active]:text-white"
                >
                  Web Design
                </TabsTrigger>
                <TabsTrigger
                  value="ccinformatika"
                  className="from-crimson-600 to-tx-500 w-full border-0 data-[state=active]:bg-linear-to-br data-[state=active]:text-white"
                >
                  CCInformatika
                </TabsTrigger>
              </div>
            </TabsList>
            <TabsContent
              value="general"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Ketentuan Umum</h2>
              <ul>
                <li>
                  Peserta yang diizinkan untuk mendaftar dalam ajang 8
                  Technology Festival atau T8chnofest merupakan siswa/i aktif
                  SMP/Sederajat atau SMA/Sederajat, kecuali cabang lomba Cerdas
                  Cermat yang hanya diperuntukkan untuk siswa/i aktif
                  SMA/Sederajat.
                </li>
                <li>
                  Peserta mendaftarkan diri pada formulir yang tertera pada link
                  berikut: LINK FORMULIR.
                </li>
                <li>
                  Peserta lomba wajib menunjukkan bukti kartu pelajar atau surat
                  keterangan dari sekolah asal pada formulir pendaftaran.
                </li>
                <li>
                  Peserta membayar biaya pendaftaran dengan rincian sebagai
                  berikut:
                  <br />
                  E-Sports Mobile Legends: Rp100.000,00.
                  <br />
                  Web Design: Rp65.000,00.
                  <br />
                  Cerdas Cermat Informatika: Rp75.000,00.
                </li>
                <li>
                  Peserta lomba wajib memasuki grup WhatsApp yang diberikan pada
                  saat selesai melakukan pendaftaran.
                </li>
                <li>
                  Peserta hanya diperbolehkan mengikuti satu cabang lomba.
                </li>
                <li>
                  Peserta mengikuti ketentuan sesuai cabang lomba masing-masing.
                </li>
                <li>
                  Peserta dilarang melakukan segala bentuk pelanggaran. Jika
                  ditemukan tim/peserta yang melakukan pelanggaran, maka peserta
                  bersedia menerima konsekuensi yang ditentukan oleh panitia,
                  termasuk didiskualifikasi.
                </li>
                <li>
                  Pelaksanaan seluruh cabang lomba akan dilaksanakan di SMA
                  Negeri 8 Jakarta.
                </li>
                <li>
                  Segala keputusan panitia T8chnofest bersifat mutlak dan tidak
                  dapat diganggu gugat.
                </li>
                <li>
                  Informasi tambahan akan diumumkan oleh panitia baik di grup WA
                  maupun langsung on site.
                </li>
                <li>
                  Untuk informasi lebih lanjut dapat menghubungi WA
                  0878-8282-9131 atas nama Henokh Dava Kainama.
                </li>
              </ul>
              <h2>Ketentuan Pendaftaran</h2>
              <ul>
                <li>
                  Ketua tim mengisi formulir pendaftaran yang tertera pada
                  Linktree.
                </li>
                <li>
                  Ketua tim melakukan pembayaran via transfer ke rekening XXXXX
                  atas nama XXX. Kemudian, bukti pembayaran diupload ke formulir
                  pendaftaran.
                </li>
                <li>
                  Setelah mengisi formulir pendaftaran, ketua tim memasuki
                  WhatsApp group melalui link yang tertera di formulir
                  pendaftaran. Hanya ketua tim yang diperkenankan untuk memasuki
                  group.
                </li>
              </ul>
            </TabsContent>
            <TabsContent
              value="mobile-legends"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Sistem Pendaftaran</h2>
              <ul>
                <li>
                  Setiap ketua tim wajib memasuki grup whatsapp yang sudah
                  disediakan setelah pendaftaran.
                </li>
                <li>
                  Pengundian bracket/urutan pertandingan akan dilaksanakan saat
                  Technical Meeting.
                </li>
                <li>
                  Tim yang sudah terdaftar tidak dapat mengubah anggotanya
                  (roster lock).
                </li>
              </ul>

              <h2>Sistem Registrasi Ulang</h2>
              <ul>
                <li>
                  Seluruh tim <b>wajib</b> datang ke booth untuk registrasi
                  ulang.
                </li>
                <li>
                  Setiap anggota tim <b>wajib</b> menandatangani registrasi
                  ulang.
                </li>
                <li>
                  Jika terdapat anggota yang belum menandatangani registrasi
                  ulang maka tim tersebut belum diperbolehkan mengikuti
                  Tournament.
                </li>
                <li>
                  Jika terdapat tim yang seluruh anggotanya belum melakukan
                  registrasi ulang hingga batas waktu yang sudah ditentukan
                  panitia, maka tim tersebut otomatis{" "}
                  <b className="text-crimson-500">DIDISKUALIFIKASI</b>.
                </li>
              </ul>

              <h2>Sistem Pertandingan</h2>
              <ul>
                <li>
                  Seluruh pertandingan akan dilaksanakan secara offline di SMA
                  Negeri 8 Jakarta.
                </li>
                <li>
                  Penentuan <i>first/second pick</i> akan ditentukan pada
                  bracket, jika tim berada di atas bracket maka tim tersebut
                  first pick.
                </li>
              </ul>

              <h2>Peraturan Nickname & ID</h2>
              <ul>
                <li>
                  Nickname peserta tidak boleh mengandung unsur SARA (Suku Ras
                  Agama dan Antar Golongan).
                </li>
                <li>
                  Roster yang bermain harus menggunakan akun dengan ID yang sama
                  terdaftar (pemain yang menggunakan ID yang berbeda maka
                  dilarang bermain pada pertandingan).
                </li>
              </ul>

              <h2>Peraturan Umum Tournament</h2>
              <ul>
                <li>
                  Setiap tim memiliki jumlah pemain <b>minimal</b> sebanyak 5
                  orang (diperbolehkan membawa 1 pemain cadangan).
                </li>
                <li>
                  Anggota tim{" "}
                  <b>wajib berstatus pelajar SMP/SMA/SMK/MA/sederajat</b>.
                </li>
                <li>
                  Anggota tim yang sudah terdaftar{" "}
                  <b>tidak boleh mendaftar di tim lain</b> (no multi slot).
                </li>
                <li>
                  Turnamen ini dikhususkan untuk Student Amatir.{" "}
                  <b>
                    Pro Player dan Ex Pro Player tidak diperkenankan mengikuti
                    cabang lomba ini
                  </b>{" "}
                  (Pro Player & Ex Pro Player adalah pemain yang pernah
                  berkontrak resmi dengan suatu organisasi apapun untuk
                  kebutuhan bermain kepada Tim Esport dan telah bermain di
                  kompetisi pro seperti MPL/MDL)
                </li>
                <li>Mode Game yang dimainkan adalah draft pick.</li>
                <li>
                  Penggunaan program ilegal (cheating) dalam bentuk apapun akan
                  dikenakan hukuman{" "}
                  <b className="text-crimson-500">BAN PERMANEN</b> baik itu ID,
                  device, dan hak keikutsertaan.
                </li>
                <li>
                  Seluruh peserta <b>dilarang</b> membawa barang/properti yang
                  dapat mengganggu jalannya pertandingan (peluit, terompet, dan
                  lainnya).
                </li>
                <li>
                  Seluruh peserta <b>wajib</b> menjunjung tinggi sikap{" "}
                  <b>sportif</b> dan <b>adil</b> (tidak taunting secara
                  berlebihan).
                </li>
                <li>
                  Setiap tim akan mendapatkan jatah <b>pause</b> sebanyak dua
                  kali (sistem <b>pause </b>hanya berlaku jika tidak ada{" "}
                  <b>war</b> yang berlangsung saat pertandingan berjalan).
                </li>
                <li>
                  Seluruh peserta{" "}
                  <b>
                    dilarang menggunakan BUG apapun yang merugikan maupun
                    menguntungkan kedua belah pihak
                  </b>
                  .
                </li>
                <li>
                  Panitia <b>tidak menyediakan wifi</b> maupun{" "}
                  <b>kuota internet</b>.
                </li>
                <li>
                  Seluruh pertandingan akan di <b>spectate</b> oleh panitia.
                </li>
                <li>
                  Segala bentuk kelalaian yang disebabkan oleh peserta adalah{" "}
                  <b>di luar tanggung jawab panitia</b> (Error device, koneksi
                  internet, dan lainnya)
                </li>
              </ul>

              <h2>Before-After Match</h2>
              <ul>
                <li>
                  Seluruh peserta <b>wajib</b> menjaga <i>attitude</i> yang baik
                  kepada panitia maupun kepada peserta lainnya.
                </li>
                <li>
                  Setiap peserta dan seluruh tim wajib hadir dan menunggu di
                  ruang tunggu yang sudah disediakan.
                </li>
                <li>
                  Setiap tim akan dipanggil oleh panitia saat <i>match</i> akan
                  berlangsung.
                </li>
                <li>
                  Ketentuan jika terdapat anggota tim yang belum hadir pada
                  jadwal pertandingan yang telah ditentukan maka pertandingan
                  tersebut akan dipindahkan ke jam <i>slot</i> berikutnya. Jika
                  setelah diundur tim tersebut masih belum lengkap/tidak dapat
                  hadir maka tim tersebut{" "}
                  <b className="text-crimson-500">DIDISKUALIFIKASI</b>.
                </li>
                <li>
                  Sebelum <i>match</i> dimulai setiap kapten tim wajib
                  memberikan ID <i>account</i> dirinya sendiri ke panitia.
                </li>
                <li>
                  <i>Room Custom Mode</i> akan dibuat oleh panitia, sehingga
                  cukup kapten tim yang memasuki <i>match room</i>.
                </li>
                <li>
                  <b>Tidak</b> diperbolehkan adanya{" "}
                  <b>
                    <i>observer</i>
                  </b>{" "}
                  di dalam ruangan pertandingan maupun <i>Custom Room</i>,
                  kecuali dari pihak panitia.
                </li>
                <li>
                  Pergantian pemain diperbolehkan sebelum <i>match</i> dimulai
                  dan <b>hanya</b> diizinkan mengganti pemain dengan pemain
                  cadangan atau <i>roster</i> yang sudah <b>terdaftar</b>.
                </li>
                <li>
                  Seluruh peserta <b>dilarang</b> melakukan <i>taunting</i> yang
                  berlebihan, lakukan taunting yang <i>sewajarnya</i>{" "}
                  <i>(NO RADIO ALL & NO CHAT ALL)</i>.
                </li>
                <li>
                  Pelanggaran format turnamen akan diberikan satu kali{" "}
                  <b>peringatan</b> atau{" "}
                  <b className="text-crimson-500">diskualifikasi</b> secara
                  langsung.
                </li>
                <li>
                  Seluruh keputusan dari panitia bersifat <b>MUTLAK</b>.
                </li>
                <li>
                  Setiap tim membayar biaya total Rp 100.000,00 dengan rincian
                  Rp 60.000,00 untuk biaya operasional dan Rp 40.000,00 untuk
                  uang jaminan. Uang jaminan akan dikembalikan ketika
                  pelaksanaan perlombaan.
                </li>
                <li>
                  Tidak ada pengembalian uang (<i>refund</i>) jika tim
                  mengundurkan diri.
                </li>
                <li>
                  Babak penyisihan akan menggunakan format BO3 (<i>Best of 3</i>
                  ) dan final akan menggunakan BO5 (<i>Best of 5</i>)
                </li>
                <li>
                  Setiap sekolah diperbolehkan mengirimkan lebih dari satu tim
                </li>
                <li>Peserta diperbolehkan membawa suporter saat bertanding.</li>
                <li>
                  Tim yang belum hadir sesuai dengan jadwal pertandingan yang
                  telah ditentukan (bahkan setelah ada toleransi pengunduran
                  jadwal) akan langsung dianggap gugur atau{" "}
                  <i>
                    <b>Walk Out</b>
                  </i>
                  .
                </li>
              </ul>
            </TabsContent>
            <TabsContent
              value="web-design"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Persyaratan Peserta</h2>
              <ul>
                <li>
                  Peserta merupakan siswa aktif SMA/MA/sederajat se-Jabodetabek
                </li>
                <li>
                  Kompetisi bersifat kelompok yang terdiri dari 1 - 3 orang
                </li>
                <li>
                  Setiap tim hanya diperbolehkan mengirim{" "}
                  <b>maksimal 1 karya</b>
                </li>
                <li>Peserta melakukan pendaftaran melalui linktree</li>
                <li>
                  Setiap tim membayar biaya total 65.000 dengan rincian 40.000
                  untuk biaya operasional dan 25.000 untuk uang jaminan
                </li>
                <li>
                  Uang jaminan akan dikembalikan ketika pelaksanaan perlombaan
                </li>
                <li>
                  Tidak ada pengembalian uang (<i>refund</i>) jika tim
                  mengundurkan diri
                </li>
                <li>
                  Peserta wajib memahami dan menyepakati seluruh syarat lomba.
                </li>
                <li>
                  Peserta yang lolos final wajib mengikuti seluruh rangkaian
                  kegiatan lomba
                </li>
              </ul>

              <h2>
                Ketentuan Pembuatan <i>Website</i>
              </h2>
              <ul>
                <li>
                  Bentuk <i>website</i> yang dibuat merupakan <i>website</i>{" "}
                  statis
                </li>
                <li>
                  <i>Website</i> dapat berupa <i>website</i> sekolah,
                  jurnalistik, atau perorangan (<i>Personal Website</i>)
                </li>
                <li>
                  Teknik pembuatan <i>website</i> bebas, namun dilarang
                  menggunakan sistem <i>drag and drop</i> dalam pembuatan
                  website.
                </li>
                <li>
                  <i>Website</i> tidak boleh mengandung unsur SARA, pornografi,
                  dan/atau melanggar hak cipta
                </li>
                <li>
                  <i>Website</i> dikumpulkan dalam bentuk File ZIP
                </li>
                <li>
                  Keputusan panitia bersifat final dan mutlak (tidak dapat
                  diganggu gugat)
                </li>
                <li>
                  Hosting website <b>tidak diwajibkan</b>. Presentasi dilakukan
                  pada komputer peserta lomba
                </li>
                <li>
                  Kecuali sistem <i>drag and drop</i>, bahasa pemrograman
                  dibebaskan, namun akan dinilai dengan nilai yang berbeda
                  sesuai tingkat kesulitan bahasanya
                </li>
              </ul>

              <h2>Kriteria Penilaian</h2>
              <ul>
                <li>Orisinalitas</li>
                <li>Kebermanfaatan</li>
                <li>Kreativitas</li>
                <li>
                  <i>User Interface</i> (UI)
                </li>
                <li>
                  Bahasa pemrograman (semakin susah bahasa pemrograman yang
                  digunakan, semakin besar nilainya)
                </li>
                <li>
                  Kemampuan Presentasi
                  <br />
                  Mempresentasikan hasil web design-nya dan menjelaskan latar
                  belakang pemilihan <i>design</i>, tujuan pemilihan{" "}
                  <i>design</i>, dan manfaat yang didapatkan
                </li>
              </ul>
            </TabsContent>
            <TabsContent
              value="ccinformatika"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Petunjuk Umum</h2>
              <ul>
                <li>
                  Setiap tim terdiri dari 3 (tiga) orang. Jika ada anggota tim
                  yang berhalangan hadir, maka anggota tersebut tidak bisa
                  digantikan.
                </li>
                <li>
                  Cabang Lomba CCI (Cerdas Cermat Informatika) dilaksanakan
                  dalam 3 (tiga) babak: Penyisihan, Semifinal, dan Grand Final.
                </li>
                <li>
                  Setiap peserta dilarang untuk menggunakan alat bantu hitung
                  dalam bentuk apapun.
                </li>
                <li>
                  Selain kepada rekan satu timnya, setiap peserta dilarang untuk
                  meminta bantuan ataupun bekerja sama dengan siapapun.
                </li>
                <li>
                  Dilarang keras mendokumentasikan soal dan/atau
                  menyebarluaskannya tanpa izin tertulis dari panitia.
                </li>
              </ul>

              <h2>Petunjuk Teknis Babak Penyisihan</h2>
              <ul>
                <li>
                  Babak Penyisihan CCI akan dilaksanakan melalui suatu platform
                  kuis online.
                </li>
                <li>
                  Setiap tim wajib membawa laptop atau tablet untuk mengerjakan
                  soal.
                </li>
                <li>
                  Panitia tidak menyediakan wifi dan kuota internet. Oleh karena
                  itu, setiap tim diharuskan untuk menyediakan hotspot untuk
                  timnya. Gawai yang digunakan sebagai hotspot tersebut
                  diletakkan di sudut depan meja masing-masing dengan posisi
                  layar menghadap meja.
                </li>
                <li>
                  Dilarang membawa perangkat elektronik selain laptop/tablet
                  untuk mengerjakan soal dan gawai sebagai hotspot.
                </li>
                <li>
                  Soal babak penyisihan terdiri dari 30 soal pilihan ganda dan
                  10 soal isian singkat yang memiliki poin sesuai dengan
                  ketepatan dan kecepatan menjawab.
                </li>
                <li>
                  Dilarang membuka dan/atau beralih ke tab dan/atau aplikasi
                  lain saat mengerjakan soal kecuali platform pengerjaan soal.
                </li>
                <li>Durasi pengerjaan soal ialah selama 60 menit.</li>
                <li>
                  Ketika waktu habis, semua peserta harus mengangkat kedua
                  tangan ke atas dan menunggu aba-aba selanjutnya dari panitia.
                </li>
                <li>
                  Tim yang lolos ke Babak Semifinal ialah 9 (sembilan) tim
                  dengan perolehan poin tertinggi dari hasil pengerjaan soal
                  Babak Penyisihan.
                </li>
              </ul>

              <h2>Petunjuk Teknis Babak Semifinal</h2>
              <ul>
                <li>
                  Tim-tim yang lolos ke Babak Semifinal akan dibagi ke dalam 3
                  kloter. Pembagian kloter akan ditentukan secara acak oleh
                  panitia.
                </li>
                <li>
                  Babak Semifinal akan dilaksanakan dalam 2 (dua) Sesi, yaitu
                  Sesi Wajib dan Sesi Rebutan.
                </li>
                <li>
                  Sebelum kedua sesi dilaksanakan, setiap tim akan diminta untuk
                  memeriksa apakah sistem tombolnya bekerja dengan menekan
                  tombolnya masing-masing.
                </li>
              </ul>
              <p>Peraturan Sesi Wajib:</p>
              <ul>
                <li>
                  Penentuan urutan pemilihan paket soal adalah sebagai berikut:
                  urutan 1 adalah tim yang memiliki perolehan poin tertinggi di
                  antara ketiga tim, urutan 2 adalah tim yang memiliki perolehan
                  poin kedua tertinggi di antara ketiga tim, urutan 3 adalah tim
                  yang memiliki perolehan poin terendah di antara ketiga tim.
                </li>
                <li>
                  Setiap paket terdiri dari 5 soal yang akan diberikan kepada
                  tim yang memilih paket soal tersebut.
                </li>
                <li>
                  Setiap soal yang diberikan kepada tim yang ditujukan harus
                  dijawab dalam durasi 15 detik.
                </li>
                <li>
                  Jika menjawab dengan benar, maka tim tersebut akan memperoleh
                  +20 poin.
                </li>
                <li>
                  Jika menjawab dengan salah atau waktu habis, maka soal
                  tersebut hangus bagi tim yang ditujukan dan akan dilempar ke
                  tim lain. Tim pertama yang menekan bel berhak untuk menjawab
                  soal tersebut dengan ketentuan yang sama.
                </li>
              </ul>
              <p>Peraturan Sesi Rebutan:</p>
              <ul>
                <li>
                  Dalam Sesi Rebutan, terdapat 20 soal yang akan diperebutkan
                  oleh ketiga tim.
                </li>
                <li>
                  Tim pertama yang menekan bel berhak untuk menjawab soal yang
                  diberikan dalam waktu 15 detik.
                </li>
                <li>
                  Jika menjawab dengan tepat, maka tim tersebut akan memperoleh
                  +30 poin.
                </li>
                <li>
                  Jika menjawab dengan salah atau waktu habis, maka poin total
                  tim tersebut akan berkurang sebanyak 10 poin dan soal akan
                  dilempar ke tim lain. Tim pertama yang menekan bel berhak
                  untuk menjawab soal tersebut dengan ketentuan yang sama.
                </li>
                <li>
                  Jika tidak ada tim yang dapat menjawab soal dengan tepat, maka
                  soal akan hangus.
                </li>
                <li>
                  Di akhir Sesi Rebutan, akan dilakukan perhitungan poin. 1
                  (satu) tim dengan perolehan poin tertinggi berhak untuk lanjut
                  ke Babak Grand Final.
                </li>
              </ul>

              <h2>Petunjuk Teknis Babak Grand Final</h2>
              <p>
                Babak Grand Final akan dilaksanakan dalam 3 (tiga) Sesi, yaitu
                Sesi Rebutan, Tic-tac-toe, dan Jeopardy. Petunjuk lebih lanjut
                akan dijelaskan oleh panitia tepat sebelum Babak Grand Final
                dilaksanakan.
              </p>

              <h2>Silabus</h2>
              <p>
                Silabus Cabang Lomba Cerdas Cermat Informatika (CCI) mengikuti
                Silabus OSN-K Informatika.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA #2 */}
        <a
          href="https://placehold.co/600x400?text=Not+Ready"
          className="motion-preset-expand group shoadow-lg from-tx-500 to-crimson-600 hover:from-tx-400 hover:to-crimson-500 mt-4 flex items-center rounded-lg bg-linear-to-br px-4 py-3 font-bold text-white transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ExternalLink className="mr-2 inline-block" />
          Daftar Sekarang
          <ArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-0.5" />
        </a>

        {/* Footer */}
        <div className="my-4 w-full overflow-hidden rounded-sm">
          <hr className="bg-crimson-600 h-1 w-full border-0" />
          <hr className="h-1 w-full border-0 bg-[#f98800]" />
          <hr className="bg-tx-500 h-1 w-full border-0" />
        </div>
        <div className="flex flex-col items-center justify-between gap-4 p-4 pt-0">
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className={`text-2xl ${link.color} transition-opacity duration-200 hover:opacity-80`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <link.icon />
              </a>
            ))}
          </div>
          <p className="text-crimson-600 text-sm">
            © 2025 Teknologi dan Soundsystem
          </p>
        </div>
      </div>
    </div>
  );
}
