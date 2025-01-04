import { Sidebar } from "~/components/global/sidebar";

interface IProps {
  children: React.ReactNode;
  params: { slug: string };
}

export default function SlugLayout({ children, params }: IProps) {
  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      {/* Navbar */}
      {children}
    </div>
  );
}
