interface Props {
  title: string;
  items: string[];
}

export default function Skills({ items, title }: Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <h3 className="text-blue-950 font-light text-3xl dark:text-blue-400">
        {title}
      </h3>
      <div className="w-full flex justify-start gap-4">
        <div className="flex flex-wrap gap-2 [&>span]:font-semibold [&>span]:text-gray-800">
          {items.map((i) => (
            <span
              className="bg-blue-950 !text-white px-3 py-1 text-sm leading-5 whitespace-nowrap dark:bg-gray-700"
              key={i}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
