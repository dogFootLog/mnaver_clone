import nlogo from "@/images/nlogo.png";
import "./Menubar.css";

const Menubar = () => {
  return (
    <div className="sch-area">
      <div className="sch-wrap">
        <div className="sch-inner-wrap">
          <div className="sch-inner">
            <img className="sch-logo" alt="sch-logo" src={nlogo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
