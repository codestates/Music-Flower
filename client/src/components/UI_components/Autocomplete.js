import { useState, useEffect } from "react";
import styled from "styled-components";

const deselectedOptions = [
  {
    postTitle: "봄에 듣기 좋은 노래",
    image: "http://spring",
    nickname: "김코딩",
    postExplain: "봄에 들으면 더 좋은 노래입니다",
    musicList: [
      {
        musicTitle: "분홍신",
        artist: "아이유",
        musicImage: "http://IU",
        musicUrl: "http://music",
        genre: "k-pop",
      },
      {
        musicTitle: "뱅뱅뱅",
        artist: "빅뱅",
        musicImage: "http://bigbang",
        musicUrl: "http://music",
        genre: "k-pop",
      },
    ],
    likeCount: "1",
    tags: ["봄", "좋은노래"],
    totalComment: [],
    createdAt: new Date(),
  },

  {
    postTitle: "여름에 듣기 좋은 노래",
    imageUrl: "http://summer",
    user: "박해커",
    likeCount: "1",
    tags: "",
  },
  {
    postTitle: "가을에 듣기 좋은 노래",
    imageUrl: "http://fall",
    user: "뮤지션",
    likeCount: "1",
    tags: "",
  },
  {
    postTitle: "겨울에 듣기 좋은 노래",
    imageUrl: "http://winter",
    user: "하루",
    likeCount: "1",
    tags: "",
  },
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

export const InputContainer = styled.div`
  /* margin-top: 8rem; */
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  padding: 1rem;
  border: 1px solid rgb(223, 225, 229);
  border-radius: ${(props) =>
    props.hasText ? activeBorderRadius : inactiveBorderRadius};
  z-index: 3;
  /* box-shadow: ${(props) => (props.hasText ? boxShadow : 0)}; */

  &:focus-within {
    // 선택시 그림자
    /* box-shadow: ${boxShadow}; */
  }

  > input {
    flex: 1 0 0;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    outline: none;
    font-size: 16px;
  }

  > div.delete-button {
    cursor: pointer;
  }
`;

export const DropDownContainer = styled.ul`
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  border: 1px solid rgb(223, 225, 229);
  border-radius: 0 0 1rem 1rem;
  /* box-shadow: ${boxShadow}; */
  z-index: 3;

  > li {
    padding: 0 1rem;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #ebe5f9;
    }
  }
`;

export const Autocomplete = () => {
  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasText(true) : setHasText(false);

    // updateText
    setInputValue(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");
    const resultOptions = deselectedOptions.filter((option) =>
      option.postTitle.match(filterRegex)
    );
    setOptions(resultOptions);
  };

  // option은 객체
  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption.postTitle);
    const resultOptions = deselectedOptions.filter(
      (option) => option.postTitle === clickedOption.postTitle
    );
    setOptions(resultOptions);
  };

  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  const handleKeyUp = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#example
    // eslint-disable-next-line
    if (
      event.getModifierState("Fn") ||
      event.getModifierState("Hyper") ||
      event.getModifierState("OS") ||
      event.getModifierState("Super") ||
      event.getModifierState("Win")
    )
      return;
    if (
      event.getModifierState("Control") +
        event.getModifierState("Alt") +
        event.getModifierState("Meta") >
      1
    )
      return;
    if (hasText) {
      if (event.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === "Enter" && selected >= 0) {
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <div className="autocomplete-wrapper" onKeyUp={handleKeyUp}>
      <InputContainer hasText={hasText}>
        <input
          type="text"
          className="autocomplete-input"
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className="delete-button" onClick={handleDeleteButtonClick}>
          &times;
        </div>
      </InputContainer>
      {hasText ? (
        <DropDown
          options={options}
          handleDropDownClick={handleDropDownClick}
          selected={selected}
        />
      ) : null}
    </div>
  );
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
  return (
    <DropDownContainer>
      {options.map((option, idx) => (
        <li
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? "selected" : ""}
        >
          {option.postTitle}
        </li>
      ))}
    </DropDownContainer>
  );
};
