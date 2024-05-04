import React from "react";

/**
 * CoolBundleCard is a React component that renders a flex container with its children
 * and a title positioned absolutely at the bottom of the container. The component
 * spans the full width and height of its parent container.
 *
 * @param {Object} props The properties passed to the component.
 * @param {string | React.ReactNode} props.title The title content to display at the bottom of the container.
 * @param {string | React.ReactNode} [props.subtitle=""] The subtitle content to display next to the title in a smaller font.
 * @param {string} [props.radius="20px"] The border radius of the container.
 * @param {React.ReactNode} props.children The child components to be displayed within the container.
 * @returns {JSX.Element} The JSX code for rendering the component.
 */
export const CoolBundleCard = ({
  title,
  subtitle = "",
  radius = "20px",
  children,
}) => {
  return (
    <div
      style={{
        borderRadius: `${radius}`,
        backgroundColor: "#ffffff22",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(3px)",
          mixBlendMode: "hard-light",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: `${radius} ${radius} 0 0`,
        }}
      >
        {children}
      </div>
      <div
        style={{
          backdropFilter: "blur(4px)",
          width: "100%",
          color: "white",
          backgroundColor: "#00000033",
          borderRadius: `0 0 ${radius} ${radius}`,
        }}
      >
        <span
          style={{
            marginInlineStart: "10px",
            position: "relative",
            bottom: "0.65em",
            fontWeight: "bold",
            fontFamily: "Inika, sans-serif",
            fontSize: "1.5em",
            textShadow: "0 0 10px #00000088",
            paddingInlineStart: "10px",
          }}
        >
          <span>{title}</span>
          <span style={{ paddingInlineStart: "8px", fontSize: "66%" }}>
            {subtitle}
          </span>
        </span>
      </div>
    </div>
  );
};
