import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const { allContentfulMenu } = useStaticQuery(
    graphql`
        query ALL_CONTENTFUL_MENU {
            allContentfulMenu {
                nodes {
                    name
                    sections {
                        name
                        imageAlt
                        items {
                            name
                            description
                            price
                            spicy
                            popular
                            categoryList
                        }
                        image {
                            publicUrl
                        }
                    }
                }
            }
        }
    `
    )
    return allContentfulMenu.nodes;
};