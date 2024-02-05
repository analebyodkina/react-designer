import "./NotFound.scss";
import { Link, useLocation } from 'react-router-dom';


function NotFound() {
  return (
    <>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
          existed in the first place?
          <p>
            Let's go <Link to={'/react-designer'} className="err__a" aria-label='link to home page'>home              
          </Link> and try from there.
          </p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
