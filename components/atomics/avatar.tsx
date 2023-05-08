import Image from "next/image";

interface Props {
  src: string;
}

export const Avatar = ({ src }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image
        src={src}
        alt="avatar"
        width={50}
        height={50}
        className="flex flex-row items-center justify-start w-full h-full"
      />
    </div>
  );
};
