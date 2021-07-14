import Link from "next/link";
import { useIntl } from "react-intl";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { getPage, getAllPagesWithSlug } from "../lib/api";

export default function Page({ page }) {
  const intl = useIntl();

  return (
    <Layout>
      <Seo title={page.title} description={page.description} />
      <main className="content">
        <div className="container">
          <article>
            <div className="grid">
              <div data-column="12" data-column-lg="10" data-start-lg="2">
                {documentToReactComponents(page.body.json)}
              </div>
            </div>
          </article>
          <aside>
            <Link href="/">
              <a className="link link-back">
                {intl.formatMessage({ id: "back" })}
              </a>
            </Link>
          </aside>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const page = await getPage(params.slug, locale);

  return {
    props: { page },
  };
}

export async function getStaticPaths({ locales }) {
  const allPages = await getAllPagesWithSlug();

  const paths = locales.reduce(
    (acc, locale) => [
      ...acc,
      ...allPages.map(({ slug }) => ({
        params: {
          slug,
        },
        locale,
      })),
    ],
    []
  );

  return {
    paths,
    fallback: false,
  };
}
