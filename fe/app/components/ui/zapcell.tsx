type ZapCellProps = {
  name: string;
  index: number;
  image?: string;
  onClick?: () => void;
};

export const ZapCell = ({ name, index, image, onClick }: ZapCellProps) => {
  return (
    <div
      onClick={onClick}
      className="w-56 h-16 px-5 flex items-center justify-center rounded-xl border-2 border-slate-500 bg-white text-slate-900 shadow-sm cursor-pointer"
    >
      <div className="flex items-center gap-2 text-xl w-full">
        <div className="font-bold">{index}</div>
        {image ? (
          <img src={image} alt={name} className="w-6 h-6 rounded object-cover" />
        ) : (
          <div className="w-6 h-6 rounded bg-slate-200" />
        )}
        <div className="truncate">{name}</div>
      </div>
    </div>
  );
};
