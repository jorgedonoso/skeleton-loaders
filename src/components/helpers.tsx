import React from "react";

type RepeatProps = {
  title: string;
  children: React.ReactNode;
};

export function Repeat({ title, children }: RepeatProps) {
  return (
    <>
      <h2 className="text-2xl">{title}</h2>
      <div className="flex w-full gap-4">
        {Array.from({ length: 3 }).map((_, index) => (
          <React.Fragment key={index}>{children}</React.Fragment>
        ))}
      </div>
    </>
  );
}
