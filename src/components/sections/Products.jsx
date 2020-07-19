import React from "react";

import { Tabs } from "../tabs/Tabs";
import { MAIN_URL } from "../../general/config";

export class Products extends React.Component {
    state = {
        isLoading: false,
        products: [],
    };

    fetchData = async () => {
        await fetch(`${MAIN_URL}product/get/list`)
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    isLoading: true,
                    products: data,
                });
            });
    };

    componentDidMount = () => {
        this.fetchData();
    };

    render() {
        const { isLoading, products } = this.state;
        const { tabs } = this.props;
        return isLoading ? (
            <Tabs>
                <Tabs.Controls list={tabs} />
                <Tabs.Content content={products} />
            </Tabs>
        ) : null;
    }
}

Products.defaultProps = {
    tabs: [
        {
            name: "Популярные",
        },
        {
            name: "Новые",
        },
        {
            name: "Акции",
        },
    ],
};
