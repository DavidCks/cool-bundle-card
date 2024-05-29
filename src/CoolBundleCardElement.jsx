import React from "react";

/**
 * CoolBundleCardElement is a clickable React component that displays an image and a name.
 * It is primarily used within a list or grid of similar elements where selection toggles
 * additional actions or visual emphasis. The component changes its opacity based on whether
 * it is selected.
 *
 * @param {Object} props The properties passed to the component.
 * @param {string} props.name The name of the item to display and to use as alt text for the image.
 * @param {string} props.image The URL of the image to display.
 * @param {React.ReactNode} props.floatingElement The element to display in the middle of the lower-quarter of the image.
 * @param {function(string)} props.onSelected The callback function to invoke when the component is clicked.
 *                                    It receives the name as an argument.
 * @param {boolean} [props.selected=false] Indicates whether the component is currently selected.
 *                                         Affects the opacity of the rendered element.
 * @returns {JSX.Element} The JSX code for rendering the clickable image and name display.
 */
export const CoolBundleCardElement = ({
  name,
  image,
  onSelected = (name) => null,
  floatingElement,
  selected = false,
}) => {
  const [hover, setHover] = React.useState(false);

  return (
    <button
      onClick={() => onSelected(name)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        cursor: "pointer",
        opacity: selected || hover ? "1" : "0.5",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <img src={image} alt={name} style={{ width: "100%", height: "auto" }} />
        {floatingElement && (
          <div
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              left: "0",
              bottom: "15%",
            }}
          >
            {floatingElement}
          </div>
        )}
      </div>
    </button>
  );
};
