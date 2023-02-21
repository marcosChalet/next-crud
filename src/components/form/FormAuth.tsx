import React from 'react';

interface FormAuthProps {
  children?: React.ReactNode;
  btnText: string;
  titleText: string;
  textAuthOption: string;
  newAuthOption: (e: React.MouseEvent<HTMLElement>) => void;
  onSubmit: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function FormAuth(props: FormAuthProps) {
  return (
    <form
      action="submit"
      className={`
        selection:bg-vonCount
        flex flex-col items-center w-3/5 lg:w-2/5 rounded-md
        m-auto p-10 text-lg capitalize bg-aro text-buffy
        shadow-2xl relative overflow-hidden
      `}
    >
      <h1 className="text-4xl mb-14 w-full">{props.titleText}</h1>
      <div
        className={`
          flex items-center justify-center
          absolute w-40 h-6 top-9 -right-8
          rotate-45 after:content-["Chalet's"]
          bg-buffy text-nosferatu-800
        `}
      />

      {props.children ?? false}

      <button
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => props.onSubmit(e)}
        className={`
          text-4xl font-bold capitalize
          w-auto py-3 px-10 mb-10 mt-6 lg:mb-5
          hover:bg-nosferatu
          ease duration-1000 rounded-md
        `}
      >
        {props.btnText}
      </button>

      <button
        onClick={props.newAuthOption}
        className={`
          capitalize p-5
          absolute right-0 bottom-0 animate-pulse cursor-pointer
        `}
      >
        {props.textAuthOption}
      </button>
    </form>
  );
}
