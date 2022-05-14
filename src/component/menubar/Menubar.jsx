import { string } from "prop-types";
import nlogo from "@/images/nlogo.png";
import mike from "@/images/mike.png";
import "./Menubar.css";

const MenuBtn = ({ className, menuName, src }) => {
  return (
    <div className={className}>
      <img alt={className} src={src} />
      <span>{menuName}</span>
    </div>
  );
};

const Menubar = () => {
  return (
    <div className="menu-bar">
      <div className="sch-area">
        <div className="sch-wrap">
          <div className="sch-inner-wrap">
            <div className="sch-inner">
              <img className="sch-logo" alt="sch-logo" src={nlogo} />
              <input
                className="sch-input"
                placeholder="dogfoot.log를 입력해주세요."
              />
              <img className="sch-mike" alt="sch-mike" src={mike} />
            </div>
          </div>
        </div>
      </div>
      <div className="list-area">
        <div className="list-wrap">
          <MenuBtn
            className="list-item"
            menuName="뉴스판"
            src="https://s.pstatic.net/static/www/mobile/edit/20220303_0/upload_1646297330983vHTOQ.png"
          />
          <MenuBtn
            className="list-item"
            menuName="쇼핑판"
            src="https://s.pstatic.net/static/www/mobile/edit/20220303_0/upload_1646297388698pQsov.png"
          />
          <MenuBtn
            className="list-item"
            menuName="경제판"
            src="https://s.pstatic.net/static/www/mobile/edit/2021/0426/upload_16194098613516y6da.png"
          />
          <MenuBtn
            className="list-item"
            menuName="연예판"
            src="https://s.pstatic.net/static/www/mobile/edit/2021/0426/upload_1619409873291ZKgsb.png"
          />
          <MenuBtn
            className="list-item"
            menuName="메일"
            src="	https://s.pstatic.net/static/www/mobile/edit/2020/0319/mobile_19411917574.png"
          />
          <MenuBtn
            className="list-item"
            menuName="카페"
            src="https://s.pstatic.net/static/www/mobile/edit/2020/0319/mobile_191015178706.png"
          />
          <MenuBtn
            className="list-item"
            menuName="블로그"
            src="https://s.pstatic.net/static/www/mobile/edit/2020/0319/mobile_181505455420.png"
          />
          <MenuBtn
            className="list-item"
            menuName="  "
            src="https://s.pstatic.net/static/www/mobile/edit/2021/0427/upload_1619497854375Q53rw.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Menubar;

MenuBtn.propTypes = {
  className: string,
  menuName: string,
  src: string,
};
