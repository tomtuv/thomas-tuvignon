import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Header from "../components/header";

const IndexPage = ({ data }) => {
  const homePage = data.contentfulHomePage;

  return (
    <Layout>
      <SEO />
      <Header homePage={homePage} />

      <main className="content">
        <div className="container">
          <div className="row">
            {homePage.projects.map((project, i) => (
              <div className="col-lg-4 col-6" data-aos="fade-up" key={i}>
                <Link to={`/projects/${project.slug}`}>
                  <figure>
                    <Img fluid={project.thumbnail.fluid} alt={project.title} />
                  </figure>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    contentfulHomePage {
      title
      jobTitle
      profilePicture {
        fluid(maxWidth: 170, quality: 0) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
      video {
        file {
          url
        }
      }
      projects {
        title
        slug
        thumbnail {
          fluid(maxWidth: 330, quality: 0) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`;
