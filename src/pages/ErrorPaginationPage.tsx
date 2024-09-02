import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export function ErrorPaginationPage() {
  return (
    <div
      id="error-pagination-page"
      className="flex flex-col gap-8 justify-center items-center h-screen"
    >
      <h1>Oops!</h1>
      <p>Sorry, this page not exists</p>
    </div>
  );
}
