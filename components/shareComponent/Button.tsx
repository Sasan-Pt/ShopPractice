import React from "react";
interface Types {
  buttonColor: string | null;
  textColor: string | null;
  input: string | null;
  buttest: any | null;
  disable: boolean | null;
}

const Button: React.FC<Types> = ({
  buttonColor,
  textColor,
  input,
  buttest,
  disable,
}) => {
  if (buttest === undefined) {
    return (
      <div className="flex items-center justify-center ">
        <button
          className={`flex ${buttonColor} ${textColor}  items-center justify-center rounded-2xl font-bold shadow-xl`}
          disabled={disable}
          type={"submit"}
        >
          {/*<button type={"submit"}>{input}</button>*/}
          {input}
        </button>
      </div>
    );
  }
  return (
    <div
      className="flex items-center justify-center "
      onClick={(event) => buttest(event)}
    >
      <button
        className={`flex ${buttonColor} ${textColor}  items-center justify-center rounded-2xl font-bold shadow-xl`}
        disabled={disable}
        type={"submit"}
      >
        {/*<button type={"submit"}>{input}</button>*/}
        {input}
      </button>
    </div>
  );
};

export default Button;
