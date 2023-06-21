import { redirect } from "react-router-dom";

const requireAuth = async (request) => {
  const pathname = new URL(request.url).pathname;
  const isLoggedIn = localStorage.getItem("isLoggedIn") || false;

  if (!isLoggedIn) {
    throw redirect(
      `/login?message=You must login first!&redirectTo=${pathname}`
    );
  }
};

export default requireAuth;
