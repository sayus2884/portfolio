import { useState, useEffect, useCallback, forwardRef } from "react";
import { CaretLeft } from "phosphor-react";

function Dropdown(
  {
    className,
    children,
    defaultOption = { name: "Select an option" },
    options = [],
    onItemSelected = () => {},
    ...props
  },
  ref,
) {
  const containerRef = ref;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultOption);

  const closeSelection = () => {
    setIsOpen(false);
  };

  const handleTitleClick = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };

  const handleItemSelected = (item) => {
    onItemSelected(item);
    setSelectedItem(item);
    closeSelection();
  };

  const handleOnClickOutside = () => {
    if (containerRef && !containerRef.current.contains(event.target)) {
      closeSelection();
    }
  };

  const handleOnEscapePress = useCallback(
    (event) => {
      if (event.key === "Escape" && isOpen) {
        closeSelection();
      }
    },
    [isOpen],
  );

  useEffect(() => {
    if (isOpen) {
      console.log("mouse click");
      document.addEventListener("mousedown", handleOnClickOutside);
      document.addEventListener("keydown", handleOnEscapePress);
    } else {
      document.removeEventListener("mousedown", handleOnClickOutside);
      document.removeEventListener("keydown", handleOnEscapePress);
    }

    return () => {
      document.removeEventListener("mousedown", handleOnClickOutside);
      document.removeEventListener("keydown", handleOnEscapePress);
    };
  }, [isOpen]);

  useEffect(() => {
    containerRef.current.dropdown = {
      setSelectedItem,
    };
  }, [ref]);

  return (
    <div className={`${className} relative text-left text-20`} ref={containerRef}>
      <button
        type="button"
        className={`flex justify-end gap-8 py-8 px-12 items-center w-full font-medium focus:outline-none cursor-pointer rounded-t-md text-right ${
          isOpen && "bg-chocolate text-white"
        }`}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={handleTitleClick}>
        {selectedItem.name}{" "}
        <span>
          <CaretLeft size={16} className={`transform ${isOpen && "-rotate-90"}`} />
        </span>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 w-full rounded-b-md shadow-lg focus:outline-none bg-chocolate text-white"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button">
          <div className="py-1" role="none">
            {options.map((option, i) => (
              <button
                key={i}
                href="#"
                className="block px-4 py-2 hover:bg-plum w-full text-left"
                role="menuitem"
                id="menu-item-0"
                onClick={() => handleItemSelected(option)}>
                {option.name ? option.name : option.value}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default forwardRef(Dropdown);
