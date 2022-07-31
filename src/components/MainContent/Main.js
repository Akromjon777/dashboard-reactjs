import React from "react";
import Card from "../Card/Card";
import Listtwo from "../List/Listtwo";
import Itemstwo from "../Items/Itemstwo";
import "./Main.css";
import Footer from "../Footer/Footer";
const Main = ({ data }) => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="main__inner flex justify-between">
            {data.map((dates, i) => (
              <Card data={dates} key={i}/>
            ))}
          </div>
          <div className="trends">
            <div className="container">
              <div className="trends__inner flex justify-between">
                <div className="box flex  justify-between flex- border-r">
                  <div className="left_content">
                    <h1 className="box__one__title">Today’s trends</h1>
                    <p className="box__one__text font-thin">
                      as of 25 May 2019, 09:41 PM
                    </p>
                  </div>
                  <div className="right_content flex mt-11">
                  <h4 className="box__right__title mr-12">Today</h4>
                  <h4 className="box__right__title mr-12">Yesterday</h4>
                  </div>  
                </div>
                <div className="box__two">
                  <Listtwo>
                    <Itemstwo>
                      <p className="box__two__desc">Resolved</p>
                      <span className="box__two__num">449</span>
                    </Itemstwo>
                    <Itemstwo>
                      <p className="box__two__desc">Received</p>
                      <span className="box__two__num">426</span>
                    </Itemstwo>
                    <Itemstwo>
                      <p className="box__two__desc">
                        Average first response time
                      </p>
                      <span className="box__two__num">33m</span>
                    </Itemstwo>
                    <Itemstwo>
                      <p className="box__two__desc">Average response time</p>
                      <span className="box__two__num">3h 8m</span>
                    </Itemstwo>
                    <Itemstwo>
                      <p className="box__two__desc">Resolution within SLA</p>
                      <span className="box__two__num">94%</span>
                    </Itemstwo>
                  </Listtwo>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Main;
