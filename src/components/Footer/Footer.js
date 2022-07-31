import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner flex">
            <div className="box__footer__one flex justify-between mt-5 flex-col">
              <div className="footer__box__left">
                <strong className="footer__box__title">
                  Unresolved tickets
                </strong>
                <p className="footer__box__desc">
                  <span className="footer__box__desc--active">Group:</span>
                  Support
                </p>
                <p className="text-right">View details</p>
              </div>
              <div className="menu">
                <ul className="footer__menu__list">
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                      Waiting on Feature Request
                    </span>
                    <span className="footer__menu__item-num">4238</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                      Awaiting Customer Response
                    </span>
                    <span className="footer__menu__item-num">1005</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                      Awaiting Developer Fix
                    </span>
                    <span className="footer__menu__item-num">914</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                    Pending
                    </span>
                    <span className="footer__menu__item-num">281</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box__footer__one flex justify-between mt-5 flex-col ml-16">
              <div className="footer__box__left">
                <strong className="footer__box__title">
                  Tasks
                </strong>
                <p className="footer__box__desc">
                  <span className="footer__box__desc--active">Today</span>
                </p>
                <p className="text-right">View All</p>
              </div>
              <div className="menu">
                <ul className="footer__menu__list">
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                      <input className="outline-none" placeholder="Create new task"/>
                    </span>
                    <span className="footer__menu__item-num bg-slate-200 py-1 px-2 rounded-md
                    mb-1 text-base cursor-pointer">+</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                    <input type="checkbox" className="input__checkbox mr-3" checked="checked"/>
                    Create new ticket example
                    </span>
                    <span className="footer__menu__item-num uppercase bg-green-500 rounded-md py-1 px-2 mb-1" style={{color:"white"}}>New</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                    <input type="checkbox" className="input__checkbox mr-3" checked="checked"/>
                    Update ticket report
                    </span>
                    <span className="footer__menu__item-num uppercase bg-slate-200 py-1 px-2 rounded-md
                    mb-1 text-base">Default</span>
                  </li>
                  <li className="footer__menu__item flex items-center justify-between border-b py-3">
                    <span className="footer__menu__item-title">
                    <input type="checkbox" className="input__checkbox mr-3" checked="checked"/>
                    Update ticket report
                    </span>
                    <span className="footer__menu__item-num uppercase bg-yellow-400 py-1 px-2 rounded-md
                    mb-1 text-base" style={{color:"white"}}>Urgent</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
