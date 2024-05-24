import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

type Props = {

}

export const Header: React.FC<Props> = () => {

  
  
    return (
      <header>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="/">Главная</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/news">Новости</Nav.Link>
                <Nav.Link href="/products">Продукция</Nav.Link>
                <Nav.Link href="/categories">Категории</Nav.Link>
                <Nav.Link href="/images">Картинки</Nav.Link>
                <Nav.Link href="/slider">Слайдер</Nav.Link>
                <Nav.Link href="/pages">Страницы</Nav.Link>
              </Nav>
            </Container>
        </Navbar>
      </header>
    )
}