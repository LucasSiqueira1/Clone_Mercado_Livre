import React from 'react';

import tshirtImage from '../../assets/tshirt.png'
import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';


const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="">Compartilhar</a>
        <a href="">Vender um Igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>


          <WarrantySections></WarrantySections>
          <WarrantySections></WarrantySections>
          <WarrantySections></WarrantySections>
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySections = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida uhuu</p>
        <p className="description">Receba o produto que você está esperando, ou devolvemos seu dinheiro!</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil doloremque, maxime libero soluta ullam perferendis eveniet facere, magnam velit omnis, asperiores minima fugit nam quis ea officia saepe. Dignissimos, enim.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora numquam delectus totam impedit, nostrum in quas dolorum sunt eligendi dolore provident cumque at illo obcaecati, rerum aut ducimus ad dicta. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi eligendi omnis blanditiis cum magni voluptate, dolorum ipsum, necessitatibus error dolor modi ducimus. Mollitia nostrum nam obcaecati autem impedit dolor doloribus.
    </p>
  </Description>
)

export default Product;
