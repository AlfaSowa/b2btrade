import React from "react";

export class News extends React.Component {
    render() {
        const { news } = this.props;
        return (
            <div className="grid grid--2 news">
                {news.map((item, index) =>
                    index < 2 ? (
                        <div className="grid__item" key={index}>
                            <div className="article">
                                <div className="article__img"></div>

                                <div className="article__content">
                                    <div className="article__title">{item.title}</div>

                                    <div className="article__date">32.12.2020</div>

                                    <div className="article__txt">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, quis ipsum, quod a
                                        vero libero illum labore, nihil laudantium necessitatibus eligendi laborum. Nihil beatae
                                        velit ab amet, voluptatem ipsa ex perferendis ipsum aperiam, laudantium eius debitis
                                        placeat qui sapiente odit nam exercitationem deserunt. Earum natus provident excepturi,
                                        dolores voluptate quod.
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
