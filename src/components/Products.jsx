import { useEffect, useState, useCallback } from "react";
import { Card, TextContainer, Image, Stack } from "@shopify/polaris";
import Carousel from "react-elastic-carousel";
import { useAppBridge } from "@shopify/app-bridge-react";
import rectangle from "../assets/Rectangle 21.png";
import carry from "../assets/carry.png";
import cushion_covers from "../assets/cushion_covers.png";
import { Product } from "./Product";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 420, itemsToShow: 2 },
  { width: 840, itemsToShow: 3 },
];
const staticData = [
  {
    name: "THE WOVEN PICNIC RUG & THROW COLLECTION",
    imageURL: rectangle,
    startingPrice: "109$",
  },
  {
    name: "Cotton Carry Strap",
    imageURL: carry,
    startingPrice: "109$",
  },
  {
    name: "Cushion Covers",
    imageURL: cushion_covers,
    startingPrice: "109$",
  },
  {
    name: "THE WOVEN PICNIC RUG & THROW COLLECTION",
    imageURL: rectangle,
    startingPrice: "109$",
  },
  {
    name: "Cotton Carry Strap",
    imageURL: carry,
    startingPrice: "109$",
  },
  {
    name: "Cushion Covers",
    imageURL: cushion_covers,
    startingPrice: "109$",
  },
];
export function Products() {
  const app = useAppBridge();
  return (
    <>
      <Card title="Browse our collections" sectioned>
        <TextContainer>
          <p style={{ marginBottom: "20px" }}>
            Our woven floor cushions are a great accesories to any space.
          </p>
        </TextContainer>

        {staticData.length > 3 ? (
          <Carousel breakPoints={breakPoints}>
            {staticData.map((product) => (
              <Product product={product} />
            ))}
          </Carousel>
        ) : (
          <Product product={product} />
        )}
      </Card>
    </>
  );
}
