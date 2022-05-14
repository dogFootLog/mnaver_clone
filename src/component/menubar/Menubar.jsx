import nlogo from "@/images/nlogo.png";
import mike from "@/images/mike.png";
import "./Menubar.css";

const Menubar = () => {
  return (
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
  );
};

export default Menubar;
