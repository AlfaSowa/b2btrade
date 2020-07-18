import React from "react";
import sprite from "../../img/sprite.svg";

export class Products extends React.Component {
    render() {
        const { products } = this.props;
        return (
            <div className="grid">
                {products.map((item, index) => (
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
                                    <div className="card__price">
                                        250<span>руб</span>
                                    </div>

                                    <button className="btn card__basket">
                                        <svg className="card__basket-icon">
                                            <use href={`${sprite}#basket`}></use>
                                        </svg>

                                        <span>в корзину</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

Products.defaultProps = {
    products: [
        {
            title: "Новости",
            content: "asdas das da ",
        },
        {
            title: "Новости",
            content: "asdas das da ",
        },
        {
            title: "Новости",
            content: "asdas das da ",
        },
        {
            title: "Новости",
            content: "asdas das da ",
        },
        {
            title: "Новости",
            content: "asdas das da ",
        },
    ],
};
