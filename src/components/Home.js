import Navbar from "./Navbar";
function Home() {
  return (
    <div >
      <div className="nav-div">
        <Navbar />
      </div>
      <div className="main main-body">
        <div className="container">
          <h1>Welcome to React</h1>
          <p className="content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet
            ratione temporibus aperiam harum alias officiis assumenda officia
            ui unde optio aliquam!
          </p>
          <button className="home-btn">Explore More !!</button>
        </div>
      </div>
    </div>
  );
}
export default Home;
