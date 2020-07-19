import React from "react";
import sprite from "../../img/sprite.svg";

class TabsControls extends React.Component {
    render() {
        const { list } = this.props;
        return (
            <ul className="tabs__controls">
                {list.map((item, index) => (
                    <li className="tab" key={index}>
                        {item.name}
                    </li>
                ))}
            </ul>
        );
    }
}

class TabsContent extends React.Component {
    render() {
        const { content } = this.props;
        console.log(content.data);
        return (
            <div className="tabs__content">
                <div className="grid">
                    {content.data.map((item, index) =>
                        index < 4 ? (
                            <div className="grid__item" key={index}>
                                <div className="card">
                                    <div className="card__img">
                                        <img src={item.images[0].url} alt="qwe" />
                                    </div>

                                    <div className="card__content">
                                        <div className="card__header">
                                            <div className="card__title">{item.name}</div>

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
                        ) : null
                    )}
                </div>
            </div>
        );
    }
}

export class Tabs extends React.Component {
    static Controls = TabsControls;
    static Content = TabsContent;

    render() {
        const { children } = this.props;

        return <div className="tabs">{children}</div>;
    }
}
