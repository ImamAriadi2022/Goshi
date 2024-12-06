import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './About.css'; // Tambahkan file CSS untuk styling khusus jika diperlukan

function AboutPage() {
  const team = [
    { name: 'John Doe', role: 'CEO', description: 'Berpengalaman lebih dari 10 tahun di bidang edukasi.', image: 'john-doe.jpg' },
    { name: 'Jane Smith', role: 'Head of Curriculum', description: 'Ahli dalam merancang kurikulum modern.', image: 'jane-smith.jpg' },
    { name: 'Emily Johnson', role: 'Marketing Specialist', description: 'Memastikan semua orang tahu tentang kursus kami.', image: 'emily-johnson.jpg' },
  ];

  const mentors = [
    { name: 'Dr. Albert Einstein', expertise: 'Physics & Mathematics', image: 'albert-einstein.jpg' },
    { name: 'Marie Curie', expertise: 'Chemistry & Research', image: 'marie-curie.jpg' },
    { name: 'Alan Turing', expertise: 'Computer Science & AI', image: 'alan-turing.jpg' },
  ];

  return (
    <div className="about-page py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Tentang Kami</h2>
        <p className="text-center mb-5">
        Website ini merupakan platform yang menyediakan berbagai layanan kursus dan pelatihan untuk pengembangan keterampilan di bidang komputer, digital marketing, bahasa, dan persiapan kerja ke luar negeri, terutama Korea. Mereka menawarkan berbagai jenis kursus seperti kursus Bahasa Inggris, Bahasa Korea, komputer, website, digital marketing, programming, animasi, serta administrasi perkantoran. Selain itu, mereka juga menyediakan kesempatan untuk magang dan peluang kerja di Korea, dengan informasi terkait proses dan tes yang perlu dilalui oleh calon pekerja. 

Website ini menyediakan dua jenis kelas, yaitu kelas reguler dengan jumlah peserta maksimal 10 orang dan kelas private dengan pengajaran satu-satu, di mana jadwal pembelajaran disesuaikan dengan waktu siswa. Kursus yang ditawarkan bertujuan untuk membantu peserta mengembangkan keterampilan profesional dalam waktu singkat, terutama bagi mereka yang berada di Provinsi Lampung. Dengan berbagai artikel dan panduan yang tersedia, website ini memberikan informasi lengkap mengenai cara kerja di Korea, termasuk cara lulus tes EPS-TOPIK dan peluang kerja untuk lulusan SMK maupun S1. 

Selain itu, website ini juga mencantumkan informasi mengenai lokasi kursus yang berada di Jl. Swadaya 04 No. 101 Gunung Terang Langkapura, Bandar Lampung, serta menyediakan kontak untuk pendaftaran kursus melalui WhatsApp. Mereka juga memiliki tim pengajar dan staf profesional yang siap membantu peserta dalam menguasai berbagai keterampilan yang dibutuhkan di dunia kerja.
        </p>
      </Container>
    </div>
  );
}

export default AboutPage;
