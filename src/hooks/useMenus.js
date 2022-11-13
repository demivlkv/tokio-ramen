import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const { allContentfulMenu } = useStaticQuery(
    graphql`
        query ALL_CONTENTFUL_MENU {
            allContentfulMenu {
                nodes {
                    name
                    sections {
                        imageAlt
                        items {
                            name
                            description
                            price
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