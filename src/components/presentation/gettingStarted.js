import React from "react";
import { skinCodes } from "../../constants/typeCodes";
// import * as actionTypes from '../../actions/actionTypes';
// import { bindActionCreators } from 'redux';

// import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setSkin, updateSkin } from "../../redux/actions/documentActions";
import { connect } from "react-redux";
function GettingStarted(props) {
  let navigate = useNavigate();
  const onChange = async (skinCd) => {
    if (props.document.id) {
       props.updateDocument(skinCd);
    } else {
       props.setDocument(skinCd);
    }
    navigate("/contact");
  };

  return (
    <div className="container med gettingStarted">
      <div className="section">
        <h1 className=" center">Select a resume template to get started</h1>
        <p className=" center">
          You’ll be able to edit and change this template later!
        </p>
        <div className="styleTemplate ">
          {skinCodes.map((value, index) => {
            return (
              <div key={index} className="template-card rounded-border">
                <i
                  className={
                    value == "demo-value" ? "selected fa fa-check" : "hide"
                  }
                ></i>
                <img className="" src={"/images/" + value + ".svg"} />
                <button
                  type="button"
                  onClick={() => onChange(value)}
                  className="btn-select-theme"
                >
                  USE TEMPLATE
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    document: state.document,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setDocument: (skinCd) => dispatch(setSkin(skinCd)),
    updateDocument: (skinCd) => dispatch(updateSkin(skinCd)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GettingStarted);
