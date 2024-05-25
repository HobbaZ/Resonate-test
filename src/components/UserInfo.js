//import { Suspense } from "react";

function DiffLoading() {
  return <h2>Loading...</h2>;
}

export default function UserInfo({ user, photo }) {
  const loadingText = "Loading...";

  return (
    <>
      <div className="card col-xs-12 col-sm-6 col-lg-4 m-2">
        {/*<Suspense fallback={<DiffLoading />}>*/}
        <div className="cardTop">
          <div className="imgContainer text-center">
            <img
              src={photo || "placeholder-image-url"}
              alt={`${user?.name || loadingText}`}
              className="card-img-top photoStyle"
            />
          </div>

          <div className="cardTopRight m-2">
            <p>{user?.name || loadingText}</p>
          </div>
        </div>
        <hr />

        <div className="card-body">
          <p>
            <i className="fa-solid fa-building"></i>{" "}
            {user?.company.name.replace("-", " ") || loadingText}
            <br />
            <i className="fa-solid fa-envelope"></i>{" "}
            {user?.email || loadingText}
            <br />
            <i className="fa-solid fa-location-dot"></i>{" "}
            {user?.address
              ? `${user.address.suite} ${user.address.street},
            ${user.address.city}, ${user.address.zipcode}`
              : loadingText}
          </p>

          <div className="text-center iconDiv">
            <i className="fab fa-linkedin icon"></i>
            <i className="fa-brands fa-twitter icon"></i>
            <i className="fab fa-github icon"></i>
            <i className="fa-solid fa-globe icon"></i>
            <i className="fa-solid fa-phone icon"></i>
          </div>
        </div>
        {/*</Suspense>*/}
      </div>
    </>
  );
}
