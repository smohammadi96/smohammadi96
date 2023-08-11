interface Props {
  title: string;
  items: string[];
}

export default function Skills({ items, title }: Props) {
  return (
    <div className="flex flex-col justify-start items-start gap-4">
      <h3 className="text-blue-950 font-light text-3xl">{title}</h3>
      <div className="w-full flex justify-start gap-4">
        <div className="flex flex-wrap gap-2 [&>span]:font-semibold [&>span]:text-gray-800">
          {items.map((i) => (
            <span className="skill-item" key={i}>
              {i}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
