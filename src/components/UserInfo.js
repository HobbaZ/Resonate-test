export default function UserInfo({ user, photo }) {
  //const loadingText = "Loading...";

  return (
    <>
      <div className="card col flex-column col-sm-2 col-md-6 col-lg-3 m-2">
        {/*<Suspense fallback={<DiffLoading />}>*/}
        <div className="cardTop d-flex flex-xs-row justify content-center">
          <div className="imgContainer text-center">
            <img
              src={photo || "placeholder-image-url"}
              alt={`${user?.name || ""}`}
              className="card-img-top photoStyle"
            />
          </div>

          <div className="cardTopRight mr-auto">
            <p>{user?.name || ""}</p>
          </div>
        </div>

        <div className="card-body d-flex flex-column flex-xs-row justify-content-around align-items-center p-3">
          <p>
            <i className="fa-solid fa-building"></i>{" "}
            {user?.company.name.replace("-", " ") || ""}
            <br />
            <i className="fa-solid fa-envelope"></i> {user?.email || ""}
            <br />
            <i className="fa-solid fa-location-dot"></i>{" "}
            {user?.address
              ? `${user.address.suite} ${user.address.street},
            ${user.address.city}, ${user.address.zipcode}`
              : ""}
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
