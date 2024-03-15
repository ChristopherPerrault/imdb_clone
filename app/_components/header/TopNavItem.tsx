import Link from "next/link";

interface TopNavItemProps {
  title: string;
  url: string;
  Icon: any;
}
const TopNavItem: React.FC<TopNavItemProps> = ({ title, url, Icon }) => {
  return (
    <div>
      <Link href={url} className="mx-4 lg:mx-6 hover:text-blue-300">
        <Icon className="mx-4 text-2xl sm:hidden" />
        <p className="hidden my-2 text-sm sm:inline">{title}</p>
      </Link>
    </div>
  );
};
export default TopNavItem;
