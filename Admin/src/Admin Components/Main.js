import "../css/Main.css";

import Chart from "./Chart";

const Main = () => {
  return (
    <main>
      <div className="main__container">
        {/* <!-- MAIN TITLE STARTS HERE --> */}

        <div className="main__title">
          <div className="main__greeting">
            <h1>Brand Name </h1>
            <p>Welcome to Brand admin dashboard</p>
          </div>
        </div>

        {/* <!-- MAIN TITLE ENDS HERE --> */}

        {/* <!-- MAIN CARDS STARTS HERE --> */}
        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-store-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Number of Stores</p>
              <span className="font-bold text-title">7</span>
            </div>
          </div>

          <div className="card">
            <i className="fa fa-user-o fa-2x text-lightblue" aria-hidden="true"></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Number of Customers Today </p>
              <span className="font-bold text-title">234</span>
            </div>
          </div>

          <div className="card">
            <i
              className="fa fa-sales fa-2x text-yellow"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-primary-p">Total Sales </p>
              <span className="font-bold text-title">34000</span>
            </div>
          </div>
        </div>
        {/* <!-- MAIN CARDS ENDS HERE --> */}

        {/* <!-- CHARTS STARTS HERE --> */}
        <div className="charts">
          <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Multan, Karachi, Islamabad , Lahore</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div>

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Sales Reports</h1>
                <p>Karachi, Multan, Islamabad, Lahore</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Karachi Sales</h1>
                <p>Rs15,300</p>
              </div>

              <div className="card2">
                <h1>Lahore Sales</h1>
                <p>Rs24,200</p>
              </div>

              <div className="card3">
                <h1>Multan Sales</h1>
                <p>Rs 39,000</p>
              </div>

              <div className="card4">
                <h1>Islamabad Sales</h1>
                <p>Rs 12,000 </p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHARTS ENDS HERE --> */}
      </div>
    </main>
  );
};

export default Main;
