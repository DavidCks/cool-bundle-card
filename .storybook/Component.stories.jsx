import React, { ReactElement } from "react";
import { CoolBundleCard, CoolBundleCardElement } from "../index";
import { placeholder } from "./placeholder.base64.js";

const Component = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          backgroundColor: "#e5e5f7",
          padding: "20px",
          opacity: "0.8",
          backgroundImage:
            "linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)",
          backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      >
        <CoolBundleCard title="Cool Bundle Card">
          <CoolBundleCardElement
            selected={true}
            name="Placeholder 1"
            image={placeholder}
          ></CoolBundleCardElement>
          <CoolBundleCardElement
            name="Placeholder 2"
            image={placeholder}
          ></CoolBundleCardElement>
          <CoolBundleCardElement
            name="Placeholder 3"
            image={placeholder}
          ></CoolBundleCardElement>
          <CoolBundleCardElement
            name="Placeholder 4"
            image={placeholder}
          ></CoolBundleCardElement>
          <CoolBundleCardElement
            selected={true}
            name="Placeholder 5"
            image={placeholder}
          ></CoolBundleCardElement>
        </CoolBundleCard>
      </div>
    </div>
  );
};

export default {
  component: Component,
  title: "CoolBundleCard",
};

export const Placeholder = () => <Component />;
