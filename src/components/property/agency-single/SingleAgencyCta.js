import Image from "next/image";

const SingleAgencyCta = ({ agent }) => {
  return (
    <>
      <div className="agent-single d-sm-flex align-items-center">
        <div className="single-img mb30-sm">
          <Image
            width={172}
            height={172}
            src={`https://premium.indusre.com/Admin/pages/forms/uploads/agents/${agent.image_name}`}
            style={{
              borderRadius: "50%",
              objectFit: "cover",
              objectPosition: "top",
            }}
            alt="agents"
          />
        </div>
        {/* End single image */}
        <div className="single-contant ml30 ml0-xs">
          <h2 className="title mb-0 text-white">{agent.name}</h2>
          <p className="fz15 text-white">
            Agent at <b>Indus Real Estate LLC</b>
          </p>
          <div className="agent-meta mb15 d-md-flex align-items-center">
            {/* <a className="text fz15 pe-2 bdrr1 text-white" href="#">
              <i className="fas fa-star fz10 review-color2 pr10" />
              {agentData.reviews}
            </a> */}
            <a
              className="text fz15 pe-2 ps-2 bdrr1 text-white"
              href={`tel:+971${agent.phone_no}`}
            >
              <i className="flaticon-call pe-1" /> +971{" "}
              {new String(agent.phone_no)
                .split("")
                .map((letter, index) =>
                  index == 1 || index == 4 ? `${letter} ` : letter
                )}
            </a>
            <a
              className="text fz15 ps-2 text-white"
              href={`mailto:${agent.email}`}
            >
              <i className="flaticon-email pe-1" /> {agent.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleAgencyCta;
