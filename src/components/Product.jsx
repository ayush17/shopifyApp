import { Image, Stack } from "@shopify/polaris";
import { useAppBridge } from "@shopify/app-bridge-react";
export function Product({ product }) {
  const app = useAppBridge();
  return (
    <Stack.Item>
      <div style={{ position: "relative" }}>
        <div style={{ filter: "brightness(0.5)" }}>
          <Image
            source={product.imageURL}
            alt="Nice work on building a Shopify app"
            width={400}
          />
        </div>
        <div
          style={{
            width: "90%",
            height: "90%",
            position: "absolute",
            top: "5%",
            left: "5%",
            color: "white",
            border: "3px dotted white",
            padding: "20px",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "30%",
              fontSize: "23px",
              fontWeight: "900",
              fontFamily: "Poppins",
              lineHeight: "28px",
            }}
          >
            {product.name}
          </span>
          <span
            style={{
              position: "absolute",
              bottom: "20%",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "italic",
            }}
          >
            Starting from{" "}
            <span
              style={{
                background: "#C4984F",
                fontWeight: "bold",
                padding: "2px",
              }}
            >
              {product.startingPrice}
            </span>
          </span>
          <button
            style={{
              position: "absolute",
              fontFamily: "Poppins",
              bottom: "10%",
              fontSize: "19px",
              background: "none",
              cursor: "pointer",
              border: "none",
              borderBottom: "2px solid white",
              color: "white",
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </Stack.Item>
  );
}
