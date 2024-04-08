const Home = () => {
  let token = localStorage.getItem("token");

  return (
    <>
      <div
        className="home-container"
        style={{ color: "#538dd7", textAlign: "center", fontSize: "30px" }}
      >
        {token ? (
          <h4>Chào mừng bạn đã đến với trang quản lý người dùng.</h4>
        ) : (
          <h4>
            Chào mừng bạn đã đến với trang quản lý người dùng vui lòng đăng nhập
            để sử dụng.
          </h4>
        )}
      </div>
    </>
  );
};

export default Home;
