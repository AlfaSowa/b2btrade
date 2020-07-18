import React from "react";

export class News extends React.Component {
    render() {
        const { news } = this.props;
        return (
            <div className="grid grid--2 news">
                {news.map((item, index) => (
                    <div className="grid__item news__item" key={index}>
                        <div className="card news__card">
                            <div className="card__img news__img"></div>

                            <div className="card__content news__content">
                                <div className="card__title">{item.title}</div>

                                <div className="card__date">32.12.2020</div>

                                <div className="card__article">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quis ipsum, quod a vero
                                    libero illum labore, nihil laudantium necessitatibus eligendi laborum. Nihil beatae velit ab
                                    amet, voluptatem ipsa ex perferendis ipsum aperiam, laudantium eius debitis placeat qui
                                    sapiente odit nam exercitationem deserunt. Earum natus provident excepturi, dolores voluptate
                                    quod.
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

News.defaultProps = {
    news: [
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
