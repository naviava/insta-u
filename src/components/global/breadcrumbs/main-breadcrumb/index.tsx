import { PAGE_ICON } from "~/constants/pages";

interface IProps {
  page: string;
  slug?: string;
}

export function MainBreadcrumb({ page, slug }: IProps) {
  return (
    <div className="flex flex-col items-start">
      {page === "Home" && (
        <div className="flex w-full justify-center">
          <div className="radial--gradient flex w-4/12 flex-col items-center py-5 lg:py-10">
            <p className="text-lg text-text-secondary">Welcome back</p>
            <h2 className="text-4xl font-medium capitalize">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex items-center gap-x-2 py-5 pr-16 lg:py-10">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="text-3xl font-semibold capitalize">{page}</h2>
      </span>
    </div>
  );
}
