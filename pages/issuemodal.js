import ReactDom from "react-dom";
import closeImage from "../public/assets/closeImage.png";
import Image from 'next/image'

function issuemodal(props) {
    if (!props.isOpen) return null;
    return ReactDom.createPortal(
      <>
        <div
          className="fixed top-0 right-0 left-0 bottom-0 z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
          onClick={props.closeIssueModal}
        ></div>
        <div
          className="fixed top-1/2 left-1/2 z-50 p-4 bg-white text-sm rounded-2xl"
          style={{ transform: "translate(-50%,-50%)" }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-8">
              <h1 className="text-xl font-bold">Help</h1>
              <img
                className="h-4 cursor-pointer"
                src={closeImage}
                onClick={props.closeIssueModal}
              />
            </div>
            <div className="flex flex-col items-center text-sm">
              <p>Please tell us your issue in few words and we will try our</p>
              <p className="mb-4">best to resolve it at the earliest</p>
              <textarea
                className="h-64 w-full bg-gray-100 p-4 rounded-2xl mb-6"
                style={{ resize: "none" }}
                placeholder="Start Typing..."
              ></textarea>
              <button className="bg-blue-700 w-full h-8 rounded-3xl text-white mb-8">
                Send
              </button>
            </div>
          </div>
        </div>
      </>,
      document.getElementById("portal")
    );
  };

export default issuemodal
