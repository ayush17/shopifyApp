import { useEffect, useState, useCallback } from "react";
import {
  Card,
  Heading,
  TextContainer,
  DisplayText,
  TextStyle,
  Image,
  Stack,
} from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
import { gql } from "@apollo/client";

import { userLoggedInFetch } from "../App";
import rectangle from "../assets/Rectangle 21.png";
import carry from "../assets/carry.png";
import cushion_covers from "../assets/cushion_covers.png";

const PRODUCTS_QUERY = gql`
  mutation populateProduct($input: ProductInput!) {
    productCreate(input: $input) {
      product {
        title
      }
    }
  }
`;

export function Products() {
  const app = useAppBridge();
  const fetch = userLoggedInFetch(app);
  return (
    <>
      <Card title="Browse our collections" sectioned>
        <TextContainer>
          <p style={{ marginBottom: "20px" }}>
            Our woven floor cushions are a great accesories to any space.
          </p>
        </TextContainer>
        <Stack
          wrap={false}
          spacing="extraTight"
          //   distribution="trailing"
          alignment="center"
        >
          <Stack.Item>
            <div style={{ marginLeft: "20px" }}>
              <Image
                source={rectangle}
                alt="Nice work on building a Shopify app"
                width={420}
              />
            </div>
          </Stack.Item>
          <Stack.Item>
            <div style={{ marginLeft: "20px" }}>
              <Image
                source={carry}
                alt="Nice work on building a Shopify app"
                width={420}
              />
            </div>
          </Stack.Item>
          <Stack.Item>
            <div style={{ marginLeft: "20px" }}>
              <Image
                source={cushion_covers}
                alt="Nice work on building a Shopify app"
                width={420}
              />
            </div>
          </Stack.Item>
        </Stack>
      </Card>
    </>
  );
}
