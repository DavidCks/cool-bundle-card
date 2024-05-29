import React, { ReactElement } from "react";
import { CoolBundleCard, CoolBundleCardElement } from "../index";
import { placeholder } from "./placeholder.base64.js";

const Component = () => {
  const [labelClicked, setLabelClicked] = React.useState(false);

  const reset = () => {
    setLabelClicked(false);
  };

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
          backgroundColor: "#00000088",
          padding: "20px",
          backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
          backgroundSize: "20px 20px",
          backgroundRepeat: "repeat",
        }}
      >
        <CoolBundleCard
          title="Cool Bundle Card"
          label="label"
          labelMuted={labelClicked}
          onLabelClick={() => {
            setLabelClicked(!labelClicked);
          }}
        >
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
        <div style={{ height: "40px" }}></div>
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
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default {
  component: Component,
  title: "CoolBundleCard",
};

export const Placeholder = () => <Component />;
