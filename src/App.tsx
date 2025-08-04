import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import logo from "./assets/logo.jpg";
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
      "Turnamen 5 vs 5 yang menuntut strategi tim, komunikasi, dan eksekusi tepat dalam meraih kemenangan di arena Land of Dawn.",
    contact: "https://wa.me/6289531671507",
    name: "Ryan",
  },
  {
    title: "Web Design",
    description:
      "Tantangan kreativitas untuk merancang dan mempresentasikan tampilan situs web yang menarik, fungsional, dan responsif sesuai kebutuhan user.",
    contact: "https://wa.me/6281905318471",
    name: "Fathur",
  },
  {
    title: "CCInformatika",
    description:
      "Kompetisi kuis berkelompok yang mengasah kecepatan dan ketepatan menjawab soal-soal seputar bidang Informatika. (KHUSUS SMAN 8 JAKARTA)",
    contact: "https://wa.me/6285215319829",
    name: "Farrell",
  },
];

export default function EventPage() {
  return (
    <div className="bg-yummers flex min-h-screen w-full items-center justify-center p-4">
      {/* Header */}
      <div className="border-styled from-back-100 to-back-100 flex h-full w-full max-w-5xl flex-col items-center gap-6 rounded-lg bg-gradient-to-b p-6 shadow-lg">
        <div className="bg-back-200 flex aspect-square w-56 items-center justify-center rounded-full p-3 shadow-md overflow-hidden">
          <img
            src={logo}
            className="motion-preset-expand size-full rounded-full"
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
          <p className="text-tx-800 mt-1 text-xs font-medium md:text-sm">
            Dilaksanakan pada <b>10 & 16 Agustus</b>
          </p>

          <p className="mt-3 text-sm font-medium md:text-base">
            Teknologi dan Soundsystem
          </p>
        </div>

        {/* CTA Register */}
        <a
          href="https://forms.gle/uDJkofNaucRPPQkj8"
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
                  Peserta 8 Technology Festival atau T8chnofest merupakan siswa/i aktif <b>SMP/MTs/Sederajat</b> atau <b>SMA/SMK/MA/Sederajat</b>, kecuali cabang lomba Cerdas Cermat yang hanya diperuntukkan untuk siswa/i aktif kelas X/XI SMA Negeri 8 Jakarta.
                </li>
                <li>
                  Peserta mendaftarkan diri pada formulir berikut: <a
                    href="https://forms.gle/jZT3F2AyxBfFpGsn9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://forms.gle/jZT3F2AyxBfFpGsn9
                  </a>
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">WAJIB</b> menunjukkan <b>kartu pelajar</b> atau <b>surat keterangan dari sekolah asal</b> pada formulir pendaftaran.
                </li>
                <li>
                  Nama tim (seluruh cabang lomba) dan nickname (Mobile Legends) <b className="text-tex-crimson-500">DILARANG</b> mengandung unsur <b>SARA</b> (Suku, Agama, Ras, dan Antargolongan) dan/atau <b>pornografi</b>.
                </li>
                <li>
                  Peserta membayar biaya pendaftaran dengan rincian sebagai berikut:
                  <br />
                  Mobile Legends: Rp100.000,00
                  <br />
                  Web Design: Rp65.000,00
                  <br />
                  Cerdas Cermat Informatika: GRATIS (khusus internal SMAN 8 Jakarta)
                </li>
                <li>
                  Tidak ada pengembalian uang (<i>no refund</i>) jika peserta mengundurkan diri.
                </li>
                <li>
                  Ketua tim <b className="text-tex-crimson-500">WAJIB</b> memasuki grup WhatsApp yang diberikan pada saat selesai melakukan pendaftaran.
                </li>
                <li>
                  Peserta hanya diperbolehkan mengikuti <b>1 (satu) cabang lomba</b>.
                </li>
                <li>
                  Tim yang sudah terdaftar <b className="text-tex-crimson-500">TIDAK DAPAT</b> menggantikan anggotanya. Jika salah satu anggota berhalangan hadir ketika perlombaan berlangsung, maka anggota tersebut <b className="text-tex-crimson-500">TIDAK DAPAT DIWAKILKAN</b> oleh orang lain, kecuali cabang lomba Mobile Legends yang memiliki anggota cadangan.
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">WAJIB</b> mengikuti ketentuan sesuai cabang lomba masing-masing.
                </li>
                <li>
                  Seluruh cabang lomba akan dilaksanakan secara <b>offline</b> di SMA Negeri 8 Jakarta.
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">DILARANG</b> membawa barang/properti yang dapat mengganggu jalannya perlombaan (peluit, terompet, dan sebagainya).
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">WAJIB</b> menjaga <i>attitude</i> yang baik kepada panitia maupun kepada peserta lainnya.
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">WAJIB</b> menjunjung tinggi sikap <b>sportif</b> dan <b>adil</b>.
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">DILARANG</b> melakukan tindakan provokatif dalam bentuk apa pun.
                </li>
                <li>
                  Panitia <b className="text-tex-crimson-500">TIDAK MENYEDIAKAN</b> wifi maupun kuota internet.
                </li>
                <li>
                  Segala bentuk kelalaian yang disebabkan oleh peserta adalah <b>di luar tanggung jawab panitia</b> (error device, koneksi internet, dan sebagainya).
                </li>
                <li>
                  Peserta <b className="text-tex-crimson-500">DILARANG</b> melakukan segala bentuk pelanggaran. Jika ditemukan tim/peserta yang melakukan pelanggaran, maka peserta bersedia menerima konsekuensi yang ditentukan oleh panitia, termasuk <b className="text-tex-crimson-500">DIDISKUALIFIKASI</b>.
                </li>
                <li>
                  Segala keputusan panitia T8chnofest bersifat <b className="text-tex-crimson-500">MUTLAK</b> dan <b className="text-tex-crimson-500">TIDAK DAPAT DIGANGGU GUGAT</b>.
                </li>
                <li>
                  Informasi tambahan akan diumumkan oleh panitia baik di grup WA maupun langsung on site.
                </li>
                <li>
                  Untuk informasi lebih lanjut dapat menghubungi <b>contact person</b> yang tertera pada website ini.
                </li>
              </ul>
              <h2>Ketentuan Pendaftaran</h2>
              <ul>
                <li>
                  Ketua tim mengisi formulir pendaftaran yang tertera pada
                  Linktree.
                </li>
                <li>
                  Ketua tim melakukan pembayaran via transfer ke rekening <b>006-00-1315318-8 (Mandiri)</b> 
                  atas nama <b>Ahmad Kautsar Ar-Ridho</b>. Kemudian, bukti pembayaran diupload ke formulir
                  pendaftaran.
                </li>
                <li>
                  Setelah mengisi formulir pendaftaran, <b>ketua tim memasuki grup Whatsapp </b>
                   melalui link yang tertera di formulir
                  pendaftaran. Hanya ketua tim yang diperkenankan untuk memasuki
                  group.
                </li>
              </ul>
              <h2>Teknis Registrasi Ulang</h2>
              <ul>
                <li>Seluruh tim <b>wajib</b> datang ke <i>booth</i> di SMAN 8 Jakarta pada saat hari-H perlombaan untuk registrasi ulang.</li>
                <li>Setiap anggota tim <b>wajib</b> menandatangani registrasi ulang.</li>
                <li>Jika terdapat anggota yang belum menandatangani registrasi ulang, maka tim tersebut belum diperbolehkan mengikuti Tournament.</li>
                <li>Jika terdapat tim yang seluruh anggotanya belum melakukan registrasi ulang hingga batas waktu yang sudah ditentukan panitia, maka tim tersebut otomatis <b className="text-crimson-500">DIDISKUALIFIKASI</b>.</li>
              </ul>
            </TabsContent>
            <TabsContent
              value="mobile-legends"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Peraturan Umum Tournament</h2>
              <ul>
                <li>Setiap tim memiliki jumlah pemain sebanyak <b>5 orang</b> (diperbolehkan membawa <b>1 pemain cadangan</b>).</li>
                <li>Anggota tim yang sudah terdaftar <b>tidak boleh mendaftar di tim lain (<i>no multi slot</i>)</b>.</li>
                <li>Turnamen ini dikhususkan untuk Student Amatir. <b>Pro Player</b> dan <b>Ex Pro Player</b> tidak diperkenankan mengikuti cabang lomba ini (<b>Pro Player & Ex Pro Player</b> adalah pemain yang pernah berkontrak resmi dengan suatu organisasi apapun untuk kebutuhan bermain kepada Tim Esport dan telah bermain di kompetisi pro seperti MPL/MDL).</li>
                <li>Roster yang bermain <b>WAJIB</b> menggunakan akun dengan ID yang sama terdaftar (pemain yang menggunakan ID yang berbeda <b>DILARANG</b> bermain pada pertandingan).</li>
                <li>Pengundian bracket/urutan pertandingan akan dilaksanakan saat Technical Meeting.</li>
                <li>Penentuan <i>first/second pick</i> akan ditentukan pada bracket, jika tim berada di atas bracket maka tim tersebut <i>first pick</i>.</li>
                <li>Mode Game yang dimainkan adalah <b>Draft Pick</b>.</li>
                <li>Penggunaan program ilegal (<i>cheating</i>) dalam bentuk apapun akan dikenakan hukuman <b>BAN PERMANEN</b> baik itu <i>ID, device,</i> maupun hak keikutsertaan.</li>
                <li>Setiap tim akan mendapatkan jatah <i>pause</i> sebanyak dua kali (sistem <i>pause</i> hanya berlaku jika tidak ada <i>war</i> yang berlangsung saat pertandingan berjalan).</li>
                <li>Seluruh peserta <b>DILARANG menggunakan <i>BUG</i> apapun yang merugikan maupun menguntungkan kedua belah pihak</b>.</li>
                <li>Seluruh pertandingan akan di-<i>spectate</i> oleh panitia.</li>
              </ul>
              <h2>Before-After Match</h2>
              <ul>
                <li>Setiap peserta dan seluruh tim <b>WAJIB</b> hadir dan menunggu di ruang tunggu yang sudah disediakan.</li>
                <li>Setiap tim akan dipanggil oleh panitia saat <i>match</i> akan berlangsung.</li>
                <li>Jika terdapat anggota tim yang belum hadir pada jadwal pertandingan yang telah ditentukan, maka pertandingan tersebut akan dipindahkan ke <i>slot</i> jam berikutnya. Jika setelah diundur tim tersebut masih belum lengkap/tidak dapat hadir, maka tim tersebut <b className="text-crimson-500">DIDISKUALIFIKASI</b>.</li>
                <li>Sebelum <i>match</i> dimulai setiap kapten tim <b>WAJIB</b> memberikan ID <i>account</i> dirinya sendiri ke panitia.</li>
                <li><i>Room Custom Mode</i> akan dibuat oleh panitia, sehingga cukup kapten tim yang memasuki <i>match</i> <i>room</i>.</li>
                <li><b>Tidak</b> diperbolehkan adanya <i>observer</i> di dalam ruangan pertandingan maupun <i>Custom Room</i>, kecuali dari pihak panitia.</li>
                <li>Pergantian pemain diperbolehkan sebelum <i>match</i> dimulai dan <b>hanya</b> diizinkan mengganti pemain dengan pemain cadangan atau <i>roster</i> yang sudah <b>terdaftar</b>.</li>
                <li>Setiap peserta hanya diizinkan untuk melakukan <i>taunting</i> sebanyak <b>3 kali</b> per <i>match</i>. Jika lebih dari 3 kali, maka peserta tersebut <b className="text-crimson-500">tidak diizinkan untuk berpartisipasi</b> di match berikutnya. Tim yang mendapati 2 pesertanya melanggar aturan ini otomatis akan <b className="text-crimson-500">DIDISKUALIFIKASI</b>.</li>
                <li>Diberlakukan <b>NO RADIO ALL & NO CHAT ALL</b>.</li>
                <li>Pelanggaran format turnamen akan diberikan satu kali <b>peringatan</b> atau <b className="text-crimson-500">diskualifikasi</b> secara langsung.</li>
                <li>Setiap tim membayar biaya total Rp 100.000,00 dengan rincian Rp 60.000,00 untuk biaya operasional dan Rp 40.000,00 untuk uang jaminan. Uang jaminan akan dikembalikan ketika pelaksanaan perlombaan.</li>
                <li>Babak penyisihan akan menggunakan format BO3 (<i>Best of 3</i>) dan <i>final</i> akan menggunakan BO5 (<i>Best of 5</i>).</li>
                <li>Setiap sekolah diperbolehkan mengirimkan lebih dari satu tim.</li>
                <li>Peserta diperbolehkan membawa suporter saat bertanding.</li>
                <li>Tim yang belum hadir sesuai dengan jadwal pertandingan yang telah ditentukan (bahkan setelah ada toleransi pengunduran jadwal) akan langsung dianggap gugur atau <i>Walk Out</i>.</li>
              </ul>
            </TabsContent>
            <TabsContent
              value="web-design"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Persyaratan Peserta</h2>
              <ul>
                <li>Kompetisi bersifat kelompok yang terdiri dari <b>1 - 3 orang</b>.</li>
                <li>Setiap tim hanya diperbolehkan mengirim <b>maksimal 1 karya</b>.</li>
                <li>Setiap tim membayar biaya total 65.000 dengan rincian 40.000 untuk biaya operasional dan 25.000 untuk uang jaminan.</li>
                <li>Uang jaminan akan dikembalikan ketika pelaksanaan perlombaan.</li>
              </ul>
              <h2>Ketentuan Pembuatan <i>Website</i></h2>
              <ul>
                <li>Bentuk <i>website</i> yang dibuat merupakan <b>website statis</b>.</li>
                <li>Tema website bebas.</li>
                <li>Teknik pembuatan <i>website</i> bebas, namun <b className="text-crimson-500">DILARANG</b> menggunakan sistem drag and drop dalam pembuatan website.</li>
                <li><i>Website</i> <b className="text-crimson-500">DILARANG</b> mengandung unsur <b>SARA</b>, <b>pornografi</b>, dan/atau <b>melanggar hak cipta</b>.</li>
                <li><i>Website</i> dikumpulkan dalam bentuk File ZIP.</li>
                <li>Hosting website <b>tidak diwajibkan</b>.</li>
                <li>Presentasi dilakukan menggunakan device masing-masing peserta.</li>
                <li>Kecuali sistem drag and drop, bahasa pemrograman dibebaskan, namun akan dinilai dengan nilai yang berbeda sesuai tingkat kesulitan bahasanya.</li>
              </ul>
              <h2>Kriteria Penilaian</h2>
              <ul>
                <li>Orisinalitas</li>
                <li>Kebermanfaatan</li>
                <li>Kreativitas</li>
                <li><i>User Interface</i> (UI)</li>
                <li>Bahasa pemrograman (semakin kompleks bahasa pemrograman yang digunakan, semakin besar nilainya)</li>
                <li>Kemampuan Presentasi: Mempresentasikan hasil <i>web design</i>-nya dengan menjelaskan latar belakang pemilihan <i>design</i>, tujuan pemilihan <i>design</i>, manfaat yang didapatkan, serta demonstrasi <i>design</i></li>
              </ul>
            </TabsContent>
            <TabsContent
              value="ccinformatika"
              className="prose prose-zinc prose-sm md:prose-base max-w-none rounded-lg p-6 pt-4"
            >
              <h2>Petunjuk Umum</h2>
              <ul>
                <li>Kompetisi bersifat kelompok yang terdiri dari <b>maksimal 3 orang</b>.</li>
                <li>Cabang Lomba CCI (Cerdas Cermat Informatika) dilaksanakan dalam 3 (tiga) babak: <b>Penyisihan, Semifinal, dan Grand Final</b>.</li>
                <li><b className="text-crimson-500">DILARANG</b> menggunakan alat bantu hitung dalam bentuk apapun.</li>
                <li><b className="text-crimson-500">DILARANG</b> untuk meminta bantuan ataupun bekerja sama dengan siapapun selain kepada rekan satu tim.</li>
                <li><b className="text-crimson-500">DILARANG KERAS</b> mendokumentasikan soal dan/atau menyebarluaskannya tanpa izin tertulis dari panitia.</li>
              </ul>

              <h2>B. Materi</h2>
              <p>Materi Cabang Lomba Cerdas Cermat Informatika (CCI) mengikuti materi yang disajikan pada buku <i>Informatika untuk SMA Kelas X</i>, antara lain:</p>
              <ul>
                <li>Informatika dan Keterampilan Generik</li>
                <li>Berpikir Komputasional</li>
                <li>Teknologi Informasi dan Komunikasi</li>
                <li>Sistem Komputer</li>
                <li>Jaringan Komputer dan Internet</li>
                <li>Analisis Data</li>
                <li>Algoritma dan Pemrograman dalam Bahasa Pemrograman Python</li>
                <li>Dampak Sosial Informatika</li>
              </ul>

              <h2>C. Petunjuk Teknis Babak Penyisihan</h2>
              <ul>
                <li>Babak Penyisihan CCI akan dilaksanakan melalui suatu platform kuis online yang akan diinformasikan pada hari-H perlombaan.</li>
                <li>Setiap tim <b className="text-crimson-500">WAJIB</b> membawa <b>laptop atau tablet</b> (salah satu) untuk mengerjakan soal.</li>
                <li>Panitia tidak menyediakan wifi dan kuota internet. Oleh karena itu, setiap tim <b className="text-crimson-500">WAJIB</b> menyediakan <b>hotspot</b> untuk timnya. Gawai yang digunakan sebagai hotspot tersebut diletakkan di sudut depan meja masing-masing dengan posisi layar menghadap meja.</li>
                <li><b className="text-crimson-500">DILARANG</b> membawa perangkat elektronik selain yang telah disebutkan.</li>
                <li>Soal babak penyisihan terdiri dari <b>30 soal pilihan ganda</b> dan <b>10 soal isian singkat</b> yang memiliki <b>poin sesuai dengan ketepatan dan kecepatan menjawab</b>.</li>
                <li><b className="text-crimson-500">DILARANG</b> membuka dan/atau beralih ke tab dan/atau aplikasi lain saat mengerjakan soal kecuali platform pengerjaan soal.</li>
                <li>Durasi pengerjaan soal selama <b>60 menit</b>.</li>
                <li>Ketika waktu habis, semua peserta harus mengangkat kedua tangan ke atas dan menunggu aba-aba selanjutnya dari panitia.</li>
                <li>Tim yang lolos ke Babak Semifinal ialah <b>9 (sembilan) tim dengan perolehan poin tertinggi</b> dari hasil pengerjaan soal Babak Penyisihan.</li>
              </ul>

              <h2>D. Petunjuk Teknis Babak Semifinal</h2>
              <ul>
                <li>Tim-tim yang lolos ke Babak Semifinal akan dibagi ke dalam <b>3 kloter</b>. Pembagian kloter akan ditentukan secara acak oleh panitia.</li>
                <li>Babak Semifinal akan dilaksanakan dalam 2 (dua) Sesi, yaitu <b>Sesi Wajib dan Sesi Rebutan</b>.</li>
                <li>Sebelum kedua sesi dilaksanakan, setiap tim akan diminta untuk memeriksa apakah sistem tombolnya bekerja dengan menekan tombolnya masing-masing.</li>
              </ul>
              <h3>Peraturan Sesi Wajib:</h3>
              <ul>
                <li>Penentuan urutan pemilihan paket soal adalah sebagai berikut: urutan 1 adalah tim yang memiliki perolehan poin tertinggi di antara ketiga tim, urutan 2 adalah tim yang memiliki perolehan poin kedua tertinggi di antara ketiga tim, urutan 3 adalah tim yang memiliki perolehan poin terendah di antara ketiga tim.</li>
                <li>Setiap paket terdiri dari <b>5 soal</b> yang akan diberikan kepada tim yang memilih paket soal tersebut.</li>
                <li>Setiap soal yang diberikan kepada tim yang ditujukan harus dijawab dalam durasi <b>30 detik</b>.</li>
                <li>Jika menjawab dengan benar, maka tim tersebut akan memperoleh <b>+20 poin</b>.</li>
                <li>Jika menjawab dengan salah atau waktu habis, maka soal tersebut hangus bagi tim yang ditujukan dan akan <b>dilempar ke tim lain</b>. Tim pertama yang menekan bel berhak untuk menjawab soal tersebut dengan ketentuan yang sama.</li>
              </ul>
              <h3>Peraturan Sesi Rebutan:</h3>
              <ul>
                <li>Dalam Sesi Rebutan, terdapat <b>20 soal</b> yang akan diperebutkan oleh ketiga tim.</li>
                <li>Tim pertama yang menekan bel berhak untuk menjawab soal yang diberikan dalam waktu <b>15 detik</b>.</li>
                <li>Jika menjawab dengan tepat, maka tim tersebut akan memperoleh <b>+30 poin</b>.</li>
                <li>Jika menjawab dengan salah atau waktu habis, maka poin total tim tersebut akan <b>berkurang sebanyak 10 poin</b> dan soal akan <b>dilempar ke tim lain</b>. Tim pertama yang menekan bel berhak untuk menjawab soal tersebut dengan ketentuan yang sama.</li>
                <li>Jika tidak ada tim yang dapat menjawab soal dengan tepat, maka soal akan <b>hangus</b>.</li>
                <li>Di akhir Sesi Rebutan, akan dilakukan perhitungan poin. <b>1 (satu) tim dengan perolehan poin tertinggi</b> berhak untuk lanjut ke Babak Grand Final.</li>
              </ul>

              <h2>E. Petunjuk Teknis Babak Grand Final</h2>
              <p>Babak Grand Final akan dilaksanakan dalam 3 (tiga) Sesi, yaitu Sesi Rebutan, Tic-tac-toe, dan Jeopardy. Petunjuk lebih lanjut akan dijelaskan oleh panitia tepat sebelum Babak Grand Final dilaksanakan.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA #2 */}
        <a
          href="https://forms.gle/uDJkofNaucRPPQkj8"
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
