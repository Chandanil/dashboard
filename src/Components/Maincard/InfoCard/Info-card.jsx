import "./InfoCard.scss";

export const InfoCard = () => {
  const data = [
    {
      title: "Follow up today",
      number: 450,
      icon: <i className="fa fa-hand-stop-o icon"></i>,
    },
    {
      title: "Contact today",
      number: 230,
      icon: <i className="fa fa-phone icon"></i>,
    },
    {
      title: "Dis Contact today",
      number: 123,
      icon: <i className="fa fa-phone-slash icon"></i>,
    },
    {
      title: "Saving today",
      number: 96,
      icon: <i className="fa fa-dollor icon"></i>,
    },
    {
      title: "Deposit",
      number: 96,
      icon: <i className="fa fa-money icon"></i>,
    },
    {
      title: "No Deposit",
      number: 96,
      icon: <i className="fa fa-dollor icon"></i>,
    },
  ];

  return (
    <>
      <div className="row">
        {data?.map((item, index) => {
          return (
            <div className="col-md-4" key={index}>
              <div className="info-card ">
                <div className="info-title">
                  <h5 className="title">{item.title}</h5>
                  <span>{item.number}</span>
                </div>
                <div className="info-icon">{item.icon}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
