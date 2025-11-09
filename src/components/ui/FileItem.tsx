import { RiFileLine } from '@remixicon/react';

interface FileItemProps {
  name: string;
  icon?: React.ComponentType<{ color?: string; size?: number }>;
  iconColor?: string;
  onClick?: () => void;
  isActive?: boolean;
}

export const FileItem: React.FC<FileItemProps> = ({
  name,
  icon: Icon = RiFileLine,
  iconColor = 'gray',
  onClick,
  isActive = false,
}) => {
  return (
    <div
      className={`flex items-start gap-1.5 py-1 px-3 cursor-pointer rounded ${
        isActive ? 'bg-slate-600 text-white' : 'hover:bg-slate-700 text-slate-200'
      }`}
      onClick={onClick}
    >
      <Icon color={isActive ? '#fff' : iconColor} size={20} />
      <p className="text-sm">{name}</p>
    </div>
  );
};
