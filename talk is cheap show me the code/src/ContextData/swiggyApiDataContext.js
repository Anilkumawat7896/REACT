const swiggyApiDataContext = () => {
  const swiggydata = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9124336&lng=75.7872709&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    console.log(data);
  };
  return <div>
    {swiggydata}
  </div>;
};

export default swiggyApiDataContext;
