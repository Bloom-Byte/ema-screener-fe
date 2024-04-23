"use client";
import { Suspense } from "react";
import ForgottenPassword from "../components/forgotten/ForgottenPassword";

function SearchBarFallback() {
  return <>placeholder</>;
}
const page = () => {
  return (
    <div>
      <Suspense fallback={<SearchBarFallback />}>
        <ForgottenPassword />
      </Suspense>
    </div>
  );
};

export default page;
