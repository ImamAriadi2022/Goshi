import React from 'react';
import { Container, Row, Col, Card, Button, Image } from 'react-bootstrap';
import './CoursesSection.css'; // Optional, for additional styling

function CoursesSection() {
  const courses = [
    { name: 'Kursus Administrasi Komputer', description: 'Kemahiran dalam Administrasi Komputer dibutuhkan banyak perusahaan.', image: 'https://plus.unsplash.com/premium_photo-1661416307260-5013ab7adc3f?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Kursus Website', description: 'Belajar membuat dan mengelola website profesional.', image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Kursus Bahasa Inggris', description: 'Tingkatkan kemampuan bahasa Inggris untuk karier Anda.', image: 'https://plus.unsplash.com/premium_photo-1661499349175-361f52f144f7?q=80&w=1654&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Kursus Digital Marketing', description: 'Pelajari strategi pemasaran digital yang efektif.', image: 'https://plus.unsplash.com/premium_photo-1661425715124-310ec1b49b8a?q=80&w=1582&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Kursus Bahasa Korea', description: 'Belajar bahasa Korea dari dasar hingga mahir untuk menunjang karir anda.', image: 'https://plus.unsplash.com/premium_photo-1723629680032-d24ef1c9f026?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { name: 'Kursus CyberSecurity', description: 'Kuasai keterampilan cyberSecurity untuk menngamankan data digital.', image: 'https://plus.unsplash.com/premium_photo-1701179596614-9c64f50cda76?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  ];

  const classTypes = [
    {
      type: 'Kelas Reguler',
      features: ['Per kelas max 10 orang', '6 bulan pembelajaran'],
      price: '600.000/bulan',
      image: 'https://joinkursus.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-16.22.35-2-1536x811.jpeg',
    },
    {
      type: 'Kelas Private',
      features: ['1 siswa dengan 1 guru', 'Jadwal belajar fleksibel'],
      price: '1.200.000/bulan',
      image: 'https://joinkursus.com/wp-content/uploads/2024/02/Kelas-komputer-private.jpeg',
    },
  ];

  const team = [
    { name: 'Kiistiawan', role: 'CEO dan Founder', image: 'https://joinkursus.com/wp-content/uploads/2024/02/kistiawan-2.jpg' },
    { name: 'Ayi Ahadiat', role: 'Pembina', image: 'https://joinkursus.com/wp-content/uploads/2024/02/bang-ayik.jpg' },
    { name: 'Usep saifudin', role: 'Pengawas', image: 'https://joinkursus.com/wp-content/uploads/2024/02/IMG-20231021-WA0033.jpg' },
    { name: 'Fitrah darma', role: 'Dewan Pengarah', image: 'https://joinkursus.com/wp-content/uploads/2024/02/fitarah-darma.jpeg' },
  ];

  const mentors = [
    { name: 'Imam Ariadi', expertise: 'Full-Stack Developer', image: './imam.jpg' },
    { name: 'Nur Kartikawati', expertise: 'Research', image: './kartika.jpg' },
    { name: 'M Zaki Maulana', expertise: 'UI/UX Designer', image: './jaki.jpg' },
    { name: 'Shafa Andhika & M Al Khairu Akbar', expertise: 'Conten Planner & Content Creator', image: './marketing.jpg' },
    { name: 'Agnes Angraini', expertise: 'Support', image: './agnes.jpg' },
    { name: 'Ibu', expertise: 'Physics & Mathematics', image: 'https://joinkursus.com/wp-content/uploads/2024/02/WhatsApp-Image-2024-02-09-at-17.12.36-1-529x1024.jpeg' },
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
        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
          <Image 
            src={course.image} 
            alt={course.name} 
            className="img-fluid" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
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
        <Image 
          src={classType.image} 
          alt={classType.type} 
          className="image-uniform card-img-top" 
        />
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

        <h3 className="text-center mt-5 mb-4">Our struktural organisasi</h3>
        <Row className="mb-5 text-center">
            {team.map((member, index) => (
                <Col key={index} md={6} className="mb-4 text-center">
                <Card className="h-100">
                    <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
                    <Image 
                        src={member.image} 
                        alt={member.name} 
                        className="img-fluid" 
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    </div>
                    <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>


          <h3 className="text-center mt-5 mb-4">Our Mentor and staff</h3>
          <Row>
  {mentors.map((mentor, index) => (
    <Col key={index} md={4} className="mb-4">
      <Card className="h-100">
        <div style={{ width: '100%', height: '400px', overflow: 'hidden' }}>
          <Image 
            src={mentor.image} 
            alt={mentor.name} 
            className="img-fluid" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
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
                <li><a href="https://www.instagram.com/goshi.co.id/" className="text-light text-decoration-none">Instagram</a></li>
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
            <p className="mb-0">&copy; 2024 JoinKursus. All rights reserved. Designed by KADIN Digital Institute.</p>
          </div>
        </Container>
      </footer>





    </>
  );
}

export default CoursesSection;
