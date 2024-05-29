import React from "react";

/**
 * CoolBundleCard is a React component that renders a flex container with its children
 * and a title positioned absolutely at the bottom of the container. The component
 * spans the full width and height of its parent container.
 *
 * @param {Object} props The properties passed to the component.
 * @param {string | React.ReactNode} props.title The title content to display at the bottom of the container.
 * @param {string | React.ReactNode} [props.subtitle=""] The subtitle content to display next to the title in a smaller font.
 * @param {string | React.ReactNode} [props.label=""] The label displayed at the bottom of the container
 * @param {string | undefined} [props.labelBackground="linear-gradient(0.25turn, rgb(255, 104, 240), rgb(91, 196, 255))" | "#00000033"] The value of the css background property for the label.
 * @param {VoidFunction} [props.onLabelClick] The function to call when the label is clicked.
 * @param {bool} [props.labelMuted=false] Whether the label and its interactions should be muted
 * @param {string} [props.radius="40px"] The border radius of the container.
 * @param {React.ReactNode} props.children The child components to be displayed within the container.
 * @returns {JSX.Element} The JSX code for rendering the component.
 */
export const CoolBundleCard = ({
  title,
  subtitle = "",
  label = "",
  labelBackground,
  labelMuted = false,
  onLabelClick,
  radius = "40px",
  children,
}) => {
  const [isLabelHovered, setIsLabelHovered] = React.useState(false);

  const handleLabelMouseEnter = () => {
    setIsLabelHovered(true);
  };

  const handleLabelMouseLeave = () => {
    setIsLabelHovered(false);
  };

  return (
    <div
      style={{
        borderRadius: `${radius}`,
        backgroundColor: "#ffffff22",
      }}
    >
      <div
        style={{
          mixBlendMode: "hard-light",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backdropFilter: "blur(3px)",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: `${radius} ${radius} 0 0`,
        }}
      >
        {children}
      </div>
      <div
        onMouseEnter={handleLabelMouseEnter}
        onMouseLeave={handleLabelMouseLeave}
        onClick={
          onLabelClick !== undefined && !labelMuted ? onLabelClick : () => {}
        }
        style={{
          cursor: `${label === "" ? "default" : isLabelHovered && !labelMuted ? "pointer" : "default"}`,
          mixBlendMode: `${label === "" ? "hard-light" : isLabelHovered && !labelMuted ? "plus-lighter" : "normal"}`,
          backdropFilter: "blur(4px)",
          width: "100%",
          color: "white",
          background: `${
            labelBackground === undefined
              ? label === ""
                ? "#00000033"
                : `linear-gradient(0.25turn, rgba(255, 104, 240, ${labelMuted ? "0.8" : "1"}), rgb(91, 196, 255, ${labelMuted ? "0.8" : "1"}))`
              : labelBackground
          }`,
          borderRadius: `0 0 ${radius} ${radius}`,
        }}
      >
        <span
          style={{
            display: "inline-block",
            position: "relative",
            width: "100%",
            bottom: "0.65em",
            fontWeight: "bold",
            height: `${label === "" ? "1.5em" : "2.6em"}`,
            fontFamily: "Inika, sans-serif",
            fontSize: "1.5em",
            textShadow: "0 0 10px #00000088",
          }}
        >
          <span>{title}</span>
          <span style={{ paddingInlineStart: "28px", fontSize: "66%" }}>
            {subtitle}
          </span>
          <span
            style={{
              position: "absolute",
              display: "block",
              paddingBlock: `${label !== "" ? "0.8em" : "0"}`,
              bottom: "-1.1em",
              color: "white",
              left: "50%",
              transform: "translateX(-50%)",
              textShadow: "none",
              fontSize: "1.8em",
              mixBlendMode: `${labelMuted ? "soft-light" : "normal"}`,
            }}
          >
            {label}
          </span>
        </span>
      </div>
    </div>
  );
};
