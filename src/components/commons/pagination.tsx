import { useEffect, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
} from "@/components/ui/pagination";

type PaginationProps<T> = {
  items: T[];
  itemsPerPage?: number;
  children: (paginatedItems: T[], currentPage: number) => React.ReactNode;
};

export default function Pagination<T>({
  items,
  itemsPerPage = 20,
  children,
}: PaginationProps<T>) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  const rawPage = searchParams.get("page");
  const parsedPage = parseInt(rawPage || "", 10);
  const isValidPage =
    !isNaN(parsedPage) && parsedPage >= 1 && parsedPage <= totalPages;
  const currentPage = isValidPage ? parsedPage : 1;

  useEffect(() => {
    if (!isValidPage) {
      const validPage = Math.min(Math.max(parsedPage || 1, 1), totalPages);
      navigate(`?page=${validPage}`, { replace: true });
    }
  }, [parsedPage, totalPages, navigate, isValidPage]);

  function createPageLink(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `?${params.toString()}`;
  }

  function renderPages() {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationLink
              onClick={(e) => {
                e.preventDefault();
                navigate(createPageLink(i));
              }}
              isActive={i === currentPage}
              className="cursor-pointer"
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      } else if (
        (i === currentPage - 2 && i > 1) ||
        (i === currentPage + 2 && i < totalPages)
      ) {
        pages.push(
          <PaginationItem key={i}>
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }

    return pages;
  }

  const paginatedItems = useMemo(
    () =>
      items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage),
    [items, currentPage, itemsPerPage]
  );

  return (
    <>
      {children(paginatedItems, currentPage)}
      <PaginationUI>
        <PaginationContent>{renderPages()}</PaginationContent>
      </PaginationUI>
    </>
  );
}
