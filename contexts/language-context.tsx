"use client"

import { createContext, useContext, useState, ReactNode } from "react"

type Language = "id" | "en"

interface LanguageContextProps {
    language: Language
    setLanguage: (lang: Language) => void
    t: typeof translations["en"]
}

const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            portfolio: "Portfolio",
            contact: "Contact",
            getStarted: "Get Started",
            brand: " Legowo",
        },
        hero: {
            title: "Legowo",
            flipWords: [
                "Foster Creativity from an Early Age",
                "Build Safe & Educational Playgrounds",
                "Support Fun Learning Processes",
                "Create Imaginative Environments",
                "Be Your Education & Family Partner",
            ],
            words: "Home Decoration",
            words2: "Educational Toys",
            words3: "Information Boards",
            words4: "Business Stands",
            button1: "Our Product",
            button2: "Learn More",

        },
        statsec: {
            label1: "Products Sold",
            label2: "Happy Clients",
            label3: "Year Experience",
            label4: "Support Available",
        },
        featuressec: {
            title: "Why Choose Legowo?",
            words: "We provide high-quality educational and decorative products to support children's learning and development holistically, while also enhancing your business with creative and functional solutions.",
            cardtitle1: "Innovative Products",
            cardwords1: "We continuously innovate in providing educational teaching aids (APE), indoor and outdoor play equipment, and home decorations that support child development and family comfort.",
            cardtitle2: "Customer-Focused",
            cardwords2: "We listen to the needs of our customers—both educational institutions and individuals—and offer custom products such as data boards and business stands tailored to specific requests.",
            cardtitle3: "Trusted & Experienced",
            cardwords3: "Trusted by hundreds of schools, early childhood centers, kindergartens, and MSMEs across Indonesia, with over 500+ successful projects and orders.",

        },
        aboutsec: {
            title: "About Legowo",
            words: "Founded in 2018, Zyfini Edukasi is a small business that manufactures and provides educational wooden and metal toys for children. We specialize in the production of various other educational toys, with a primary focus on child safety and development.",

        },
        companystory: {
            title0: "Our Story",
            words1: "Founded in 2018, Legowo is a small enterprise (UKM) that manufactures educational toys made of wood and metal. We are committed to providing safe, high-quality products that holistically support children's development—cognitively, motorically, and socially.",
            words2: "With over 5 years of experience, we have gained the trust of many institutions and schools to provide indoor and outdoor educational play equipment (APE), learning space decorations, and other supporting tools.",
            words5: "Our commitment to children's education is reflected in product designs that stimulate cognitive, motor, and social-emotional development. We continue to innovate in product development to meet the ever-evolving educational needs of children.",
            words6: "With over 5 years of experience, we have built a solid reputation in the children's toy industry. We are proud to contribute to the growth and learning of the younger generation through our high-quality products.",

            title1: "Our Mission",
            words3: "Supporting Growth & Creativity",
            words4: "We are committed to offering functional, safe, and attractive educational and decorative products to enhance learning and small businesses.",
            list1: "Provide high-quality educational toys (APE)",
            list2: "Support MSMEs and early childhood education centers (PAUD) in developing facilities",
            list3: "Offer custom designs tailored to specific needs",
            list4: "Enhance the aesthetic and educational value of spaces",


            title2: "Our Values",
            cardtitle1: "Innovative",
            wordtitle1: "Constantly innovating in educational and decorative product design.",
            cardtitle2: "Customer Focused",
            wordtitle2: "We listen and adapt our products to suit your needs.",
            cardtitle3: "Superior Quality",
            wordtitle3: "We maintain quality and precision in every product.",
            cardtitle4: "Integrity",
            wordtitle4: "Transparency in communication and transactions with customers.",

            title3: "Our Vision",
            wordtitle5: "Creating Inspiring Educational Spaces",
            wordtitle6: "To become a leading partner in providing quality educational and decorative solutions that support children's development and foster a comfortable learning environment.",
            cardtitle5: "2030 Target",
            wordtitle13: "Partner Institutions",
            wordtitle14: "Cities Reached",
            wordtitle15: "Featured Products",

            title4: "Our Team",
            wordtitle7: "Creative & Trusted Team",
            wordtitle8: "We are an experienced team committed to delivering educational and decorative products that are safe, engaging, and functional for children and business spaces.",
            wordtitle9: "Technical Expertise",
            wordtitle10: "Skilled craftsmen and technicians focused on quality and safety.",
            wordtitle11: "Creative Innovation",
            wordtitle12: "A design team that creates unique and inspiring APE, decorations, and educational furniture.",
        },
        gallerysec: {
            title: "Our Gallery",
            words: "Explore our collection of successful projects across various industries and technologies. Each project represents our commitment to excellence and innovation.",
        },
        portocta: {
            title: "Want to See More?",
            words: " This is just a glimpse of our work. Visit our complete portfolio to explore more projects, case studies, and detailed project breakdowns.",
            button: "See Full Catalog",
        },
        contact: {
            title: "Get In Touch",
            subtitle:
                "Ready to transform your business with cutting-edge technology? Let's discuss your project and explore how we can help you achieve your goals.",
            formTitle: "Send us a message",
            name: "Name",
            email: "Email",
            company: "Company",
            message: "Message",
            button: "Send Message",
            infoTitle: "Contact Information",
            address: "Address",
            contact: "Contact",
            officeHours: "Office Hours",
            days: {
                monday: "Monday - Friday",
                saturday: "Saturday",
                sunday: "Sunday",
                closed: "Closed",
            },
        },
        footer: {
            title: "Legowo",
            subtitle: "Building the future of technology, one project at a time.",
        },


    },
    id: {
        nav: {
            home: "Beranda",
            about: "Tentang",
            portfolio: "Portofolio",
            contact: "Kontak",
            getStarted: "Mulai Sekarang",
            brand: "Legowo",
        },
        hero: {
            title: "Legowo",
            flipWords: [
                "Menumbuhkan Kreativitas Anak Sejak Dini",
                "Membangun Ruang Bermain Edukatif & Aman",
                "Mendukung Proses Belajar yang Menyenangkan",
                "Menciptakan Lingkungan Penuh Imajinasi",
                "Menjadi Mitra Pendidikan & Keluarga Anda",
            ],
            words: "Dekorasi Rumah",
            words2: "Mainan Edukatif",
            words3: "Papan Data",
            words4: "Stand Usaha",
            button1: "Produk Kami",
            button2: "Pelajari Lebih Lanjut",
        },
        statsec: {
            label1: "Produk Terjual",
            label2: "Pelanggan Puas",
            label3: "Tahun Berpengalaman",
            label4: "Dukungan Tersedia",
        },
        featuressec: {
            title: "Mengapa Memilih Legowo?",
            words: "Kami menghadirkan produk edukatif dan dekoratif berkualitas tinggi untuk mendukung proses belajar dan pengembangan anak secara menyeluruh, serta menunjang usaha Anda dengan solusi kreatif dan fungsional.",
            cardtitle1: "Produk Inovatif",
            cardwords1: "Kami terus berinovasi dalam menyediakan alat peraga edukatif (APE), permainan luar dan dalam ruangan, serta dekorasi rumah yang mendukung perkembangan anak dan kenyamanan keluarga.",
            cardtitle2: "Fokus pada Pelanggan",
            cardwords2: "Kami mendengarkan kebutuhan pelanggan, baik lembaga pendidikan maupun individu, dan menawarkan produk custom seperti papan data dan stand usaha sesuai permintaan.",
            cardtitle3: "Terpercaya & Berpengalaman",
            cardwords3: "Dipercaya oleh ratusan sekolah, PAUD, TK, dan UMKM di seluruh Indonesia dengan lebih dari 500+ proyek dan pemesanan sukses.",
        },
        aboutsec: {
            title: "Tentang Legowo",
            words: "Didirikan pada tahun 2018, Zyfini Edukasi adalah UKM produsen produk dan penyedia jasa mainan kayu dan besi edukatif untuk anak-anak. Kami mengkhususkan diri dalam pembuatan berbagai mainan edukatif lainnya, dengan fokus utama pada keamanan dan perkembangan anak.",
        },
        companystory: {
            title0: "Cerita Kami",
            words1: " Legowo berdiri sejak 2018 sebagai UKM yang memproduksi mainan edukatif dari kayu dan besi. Kami berkomitmen menghadirkan produk yang aman, berkualitas, dan mendukung tumbuh kembang anak secara menyeluruh—baik dari sisi kognitif, motorik, maupun sosial.",
            words2: "  Dengan pengalaman lebih dari 5 tahun, kami telah dipercaya oleh banyak institusi dan sekolah untuk menyediakan alat permainan edukatif (APE) indoor dan outdoor, dekorasi ruang belajar, serta perlengkapan pendukung lainnya.",
            words5: "Komitmen kami terhadap pendidikan anak-anak tercermin dalam desain produk yang merangsang perkembangan kognitif, motorik, dan sosial-emosional. Kami terus berinovasi dalam pengembangan produk untuk memenuhi kebutuhan pendidikan anak yang selalu berkembang.",
            words6: "Dengan pengalaman lebih dari satu 5 tahun, kami telah membangun reputasi yang solid dalam industri mainan anak. Kami bangga dapat berkontribusi pada pertumbuhan dan pembelajaran generasi muda melalui produk-produk berkualitas kami.",


            title1: "Misi Kami",
            words3: "Mendukung Tumbuh Kembang & Kreativitas",
            words4: "Kami berkomitmen menyediakan produk edukatif dan dekoratif yang fungsional, aman, dan menarik guna menunjang pembelajaran dan usaha kecil.",
            list1: "Menyediakan produk APE berkualitas",
            list2: "Mendukung UMKM dan PAUD dalam pengembangan fasilitas",
            list3: "Menawarkan desain custom sesuai kebutuhan",
            list4: "Meningkatkan nilai estetika dan edukasi ruang",
            title2: "Nilai Kami",
            cardtitle1: "Inovatif",
            wordtitle1: "Selalu berinovasi dalam desain produk edukatif dan dekoratif.",
            cardtitle2: "Fokus pada Pelanggan",
            wordtitle2: "Kami mendengarkan dan menyesuaikan produk sesuai kebutuhan Anda.",
            cardtitle3: "Kualitas Unggul",
            wordtitle3: "Kami menjaga kualitas dan ketelitian di setiap produk.",
            cardtitle4: "Integritas",
            wordtitle4: "Transparansi dalam komunikasi dan transaksi dengan pelanggan..",
            title3: "Visi Kami",
            wordtitle5: "Mewujudkan Ruang Edukasi yang Inspiratif",
            wordtitle6: "Menjadi mitra utama dalam menyediakan solusi edukasi dan dekorasi berkualitas, yang mendukung tumbuh kembang anak dan kenyamanan lingkungan belajar.",
            cardtitle5: "Target 2030",
            wordtitle13: "Institusi Mitra",
            wordtitle14: "Kota Terjangkau",
            wordtitle15: "Produk Unggulan",
            title4: "Tim Kami",
            wordtitle7: "Tim Kreatif & Terpercaya",
            wordtitle8: "Kami adalah tim berpengalaman yang berkomitmen menghadirkan produk edukatif dan dekoratif yang aman, menarik, dan fungsional untuk anak dan ruang usaha.",
            wordtitle9: "Keahlian Teknis",
            wordtitle10: "Pengrajin dan teknisi andal yang fokus pada kualitas dan keamanan.",
            wordtitle11: "Inovasi Kreatif",
            wordtitle12: "Tim desain yang menghadirkan produk APE, dekorasi, dan furnitur edukatif yang unik dan inspiratif.",

        },
        gallerysec: {
            title: "Galeri Kami",
            words: "Jelajahi koleksi proyek sukses kami di berbagai industri dan teknologi. Setiap proyek mencerminkan komitmen kami terhadap keunggulan dan inovasi.",
        },
        portocta: {
            "title": "Ingin Lihat Lebih Banyak?",
            "words": "Ini hanyalah sekilas dari karya kami. Kunjungi portofolio lengkap kami untuk menjelajahi lebih banyak proyek, studi kasus, dan rincian proyek secara mendalam.",
            "button": "Lihat Katalog Lengkap",
        },
        contact: {
            title: "Hubungi Kami",
            subtitle:
                "Siap mengubah bisnis Anda dengan teknologi mutakhir? Mari diskusikan proyek Anda dan jelajahi bagaimana kami dapat membantu Anda mencapai tujuan.",
            formTitle: "Kirim pesan kepada kami",
            name: "Nama",
            email: "Email",
            company: "Perusahaan",
            message: "Pesan",
            button: "Kirim Pesan",
            infoTitle: "Informasi Kontak",
            address: "Alamat",
            contact: "Kontak",
            officeHours: "Jam Operasional",
            days: {
                monday: "Senin - Jumat",
                saturday: "Sabtu",
                sunday: "Minggu",
                closed: "Tutup",
            },
        },
        footer: {
            title: "Legowo",
            subtitle: "Membangun masa depan teknologi, satu proyek demi satu.",
        },
    },
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<Language>("id")
    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
