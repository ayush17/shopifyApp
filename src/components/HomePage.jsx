import { Card, Page, Layout } from "@shopify/polaris";

import trophyImgUrl from "../assets/home-trophy.png";
import { ProductsCard } from "./ProductsCard";
import { Products } from "./Products";

export function HomePage() {
  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Products />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
