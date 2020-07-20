import React from "react";
import { Header } from "../header/Header";
import { News } from "../sections/News";
import { Footer } from "../footer/Footer";
import { Products } from "../sections/Products";
import sprite from "../../img/sprite.svg";
import { Providers } from "../sections/Providers";
import { Purchases } from "../sections/Purchases";
import { Hero } from "../sections/Hero";

export class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />

                <Hero />

                <main className="main">
                    {this.props.sections.map((item, index) => (
                        <section className="section container" key={index}>
                            <div className="section__header">
                                <h2 className="section__title">{item.title}</h2>

                                <a className="section__more" href="#">
                                    <span>Посмотреть все</span>
                                    <svg className="section__more-icon">
                                        <use href={`${sprite}#arrow-right`}></use>
                                    </svg>
                                </a>
                            </div>

                            <div className="section__body">{item.content}</div>
                        </section>
                    ))}
                </main>

                <Footer />
            </React.Fragment>
        );
    }
}

App.defaultProps = {
    sections: [
        {
            title: "Новости",
            content: <News />,
        },
        {
            title: "Товары",
            content: <Products />,
        },
        {
            title: "Поставщики",
            content: <Providers />,
        },
        {
            title: "Закупки",
            content: <Purchases />,
        },
    ],
};
