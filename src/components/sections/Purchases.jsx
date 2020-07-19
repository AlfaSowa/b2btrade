import React from "react";
import sprite from "../../img/sprite.svg";

export class Purchases extends React.Component {
    render() {
        const { purchases } = this.props;
        return (
            <div className="grid">
                {purchases.map((item, index) =>
                    index < 4 ? (
                        <div className="grid__item" key={index}>
                            <div className="card">
                                <div className="card__img"></div>

                                <div className="card__content">
                                    <div className="card__header">
                                        <div className="card__title">{item.title}</div>

                                        {index % 2 ? (
                                            <svg className="card__header-icon">
                                                <use href={`${sprite}#heart`}></use>
                                            </svg>
                                        ) : (
                                            <svg className="card__header-icon">
                                                <use href={`${sprite}#heart-active`}></use>
                                            </svg>
                                        )}
                                    </div>

                                    <div className="card__txt">Хозяюшка</div>

                                    <div className="card__bottom">
                                        <button className="btn btn--dark card__basket">
                                            <span>узнать цену</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                )}
            </div>
        );
    }
}

Purchases.defaultProps = {
    purchases: [
        {
            title: "Пельмени замороженные Chef Maestro Di Pasta",
            content: "asdas das da ",
        },
        {
            title: "Пельмени замороженные Chef Maestro Di Pasta",
            content: "asdas das da ",
        },
        {
            title: "Пельмени замороженные Chef Maestro Di Pasta",
            content: "asdas das da ",
        },
        {
            title: "Пельмени замороженные Chef Maestro Di Pasta",
            content: "asdas das da ",
        },
        {
            title: "Пельмени замороженные Chef Maestro Di Pasta",
            content: "asdas das da ",
        },
    ],
};
