import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
// import './CoursesSection.css'; // Tambahkan file CSS untuk styling khusus jika diperlukan

function CoursesSection() {
  const courses = [
    { name: 'Kursus Administrasi Komputer', description: 'Kemahiran dalam Administrasi Komputer dibutuhkan banyak perusahaan.', image: 'admin-komputer.jpg' },
    { name: 'Kursus Website', description: 'Belajar membuat dan mengelola website profesional.', image: 'website.jpg' },
    { name: 'Kursus Bahasa Inggris', description: 'Tingkatkan kemampuan bahasa Inggris untuk karier Anda.', image: 'bahasa-inggris.jpg' },
    { name: 'Kursus Digital Marketing', description: 'Pelajari strategi pemasaran digital yang efektif.', image: 'digital-marketing.jpg' },
    { name: 'Kursus Bahasa Korea', description: 'Belajar bahasa Korea dari dasar hingga mahir.', image: 'bahasa-korea.jpg' },
    { name: 'Kursus Programming', description: 'Kuasai keterampilan coding untuk masa depan Anda.', image: 'programming.jpg' },
  ];

  const classTypes = [
    {
      type: 'Kelas Reguler',
      features: ['Per kelas max 10 orang', '6 bulan pembelajaran'],
      price: '600.000/bulan',
    },
    {
      type: 'Kelas Private',
      features: ['1 siswa dengan 1 guru', 'Jadwal belajar fleksibel'],
      price: '1.200.000/bulan',
    },
  ];

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
    <>
    <div className="courses-section py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Kursus Yang Kami Siapkan Untuk Anda</h2>
        <Row className="mb-5">
          {courses.map((course, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Image src={course.image} alt={course.name} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary">Daftar Sekarang</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="text-center mb-4">Tipe Kelas</h3>
        <Row>
          {classTypes.map((classType, index) => (
            <Col key={index} md={6} className="mb-4">
              <Card className="h-100">
                <Card.Body>
                  <Card.Title>{classType.type}</Card.Title>
                  <ul>
                    {classType.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <p className="fw-bold">Harga: {classType.price}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-4">
          <Button href="https://wa.me/08127988210" variant="success">Daftar Via Whatsapp</Button>
        </div>

        <h3 className="text-center mt-5 mb-4">Our Team and Staff</h3>
        <Row className="mb-5">
          {team.map((member, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Image src={member.image} alt={member.name} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                  <Card.Text>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <h3 className="text-center mt-5 mb-4">Our Mentor</h3>
        <Row>
          {mentors.map((mentor, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card className="h-100">
                <Image src={mentor.image} alt={mentor.name} className="card-img-top" />
                <Card.Body>
                  <Card.Title>{mentor.name}</Card.Title>
                  <Card.Text><strong>Expertise:</strong> {mentor.expertise}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

    </div>
      <footer className="footer bg-dark text-light py-5 mt-5">
        <Container>
          <Row>
            <Col md={4} className="mb-3">
              <h5 className="text-uppercase">Tentang Kami</h5>
              <p>Kami menyediakan berbagai kursus untuk membantu Anda mengembangkan diri secara profesional.</p>
              <p><strong>Alamat:</strong> Jl Swadaya 04 No 101 Gunung Terang Langkapura, Bandar Lampung</p>
              <p><strong>Kontak:</strong> 08127988210 – 085776637546</p>
            </Col>

            <Col md={4} className="mb-3">
              <h5 className="text-uppercase">Ikuti Kami</h5>
              <ul className="list-unstyled d-flex gap-3">
                <li><a href="https://facebook.com" className="text-light text-decoration-none">Facebook</a></li>
                <li><a href="https://instagram.com" className="text-light text-decoration-none">Instagram</a></li>
                <li><a href="https://twitter.com" className="text-light text-decoration-none">Twitter</a></li>
              </ul>
            </Col>

            <Col md={4} className="mb-3">
              <h5 className="text-uppercase">Newsletter</h5>
              <p>Daftarkan email Anda untuk mendapatkan informasi terbaru.</p>
              <form>
                <div className="input-group">
                  <input type="email" className="form-control" placeholder="Email Anda" />
                  <button type="submit" className="btn btn-primary">Kirim</button>
                </div>
              </form>
            </Col>
          </Row>

          <div className="text-center mt-4">
            <p className="mb-0">&copy; 2024 JoinKursus. All rights reserved. Designed by TERALAB.id and Imam Ariadi</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default CoursesSection;
