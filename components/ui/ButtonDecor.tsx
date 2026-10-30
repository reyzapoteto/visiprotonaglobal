import Image from "next/image";

/** Decorative corner shape from the Figma button component. */
export function ButtonDecor() {
  return (
    <span
      aria-hidden="true"
      className="absolute -top-[89px] left-[151px] flex h-[100.246px] w-[96.716px] items-center justify-center"
    >
      <span className="flex-none rotate-[-142.4deg]">
        <span className="relative block h-[79.908px] w-[60.536px]">
          <span className="absolute inset-[-62.57%_-82.6%_-38.33%_-82.6%]">
            <Image
              src="/images/icons/button-decor.svg"
              alt=""
              fill
              sizes="100px"
            />
          </span>
        </span>
      </span>
    </span>
  );
}
