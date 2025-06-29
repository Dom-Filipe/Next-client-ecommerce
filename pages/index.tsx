import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import SliderComponent from "../components/Slider";
import { GetStaticProps } from "next";
import Link from "next/link";
import Image from "next/image";
import React, { Component } from "react";
import Slider from "react-slick";
import SmBanners from "../components/SmBanners"

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("https://express-ecommerce-server.vercel.app/getForHome");
  const data = await res.json();



  return {
    props: {
      data: data,
    },
  };
};

const Home: NextPage = ({ data }: any) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    initialSlide: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
    <div className={styles.containerHome}>
      <div className={styles.containerSlider}>
        <SliderComponent />
      </div>

      <div>
        <div className={styles.title}>
          <h2>Ultimas peças</h2>
        </div>
        <Slider {...settings} className={styles.container}>
          {data.map(
            (i: {
              team_name: string;
              value: number;
              team_year: string;
              _id: string;
              sport: string;
            }) => (
              <Link href={`/${i.sport}/${i._id}`} key={i._id}>
                <div className={styles.product}>
                  <Image
                    src={`/images/${i.team_name.split(" ").join("")}/${i.team_name
                      .split(" ")
                      .join("")}_det1.webp`}
                    height="300px"
                    width={"300px"}
                    style={{ borderRadius: "10px" }}
                  ></Image>
                  <div className={styles.wrapperInfosTeam}>
                    <h2 className={styles.TeamName}>
                      {i.team_name} | {i.team_year}
                    </h2>
                  </div>
                  <div className={styles.wrapperPrice}>
                    <div className={styles.discountPrice}>R$250,00</div>
                    <div className={styles.rightPrice}> R${i.value}</div>
                  </div>
                </div>
              </Link>
            )
          )}
        </Slider>
      </div>
      <SmBanners/>

      <div className={styles.about}>
  <h2>QUEM SOMOS NÓS? 💎</h2>
  <p>O mercado de lojas virtuais, principalmente no segmento de camisas de time e artigos esportivos, está cada vez mais competitivo e saturado. Mesmo assim, nós enxergamos uma oportunidade: faltar uma marca que entregue não só produtos, mas também confiança, transparência e proximidade real com o cliente.

Foi a partir dessa visão que nasceu a Cenexão Importado — ou, para quem já faz parte da nossa comunidade, Cenexão.

Aqui na Cenexão, acreditamos que importar vai muito além de vender: é conectar torcedores apaixonados aos melhores produtos, de forma segura, prática e com qualidade garantida.

Para isso, integramos tecnologia, logística e atendimento humanizado, criando uma experiência de compra que vai do carrinho até a porta da sua casa — sempre com o cuidado que você merece.

Cenexão Importado. Mais do que uma loja, uma conexão direta entre você e o mundo do esporte.</p>
  <p>Dê uma conferida em nossos produtos! Ah, quer uma sugestão de amigo? Dá uma olhadinha <a href="">nessas camisas</a> que eu separei pra você aqui, garanto que vai gostar!</p>
  <p>💙 Nos siga no Instagram: <a href="https://www.instagram.com/conexaoimportado/" target="_blank" rel="noopener noreferrer">@conexaoimportado</a></p>
</div>

    </div>
  );
};

export default Home;
