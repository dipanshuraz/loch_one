import Divider from "./components/Divider";
import Carousel from "./components/Carousel";
import Form from "./components/Form";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div className="parent-div h-full w-full lg:flex bg-black lg:pl-12">
    <div className="w-full lg:w-7/12 lg:h-screen lg:overflow-y-auto no-scrollbar">
      <div>
        <div>
          <div className="lg:flex py-20">
            <div className="w-full lg:w-1/2 pb-20 lg:pb-0 px-8">
              <img src="/static/images/Bell.svg" className="" />
              <p className="heading-4 text-F2F2F2 py-4">
                Get notified when a highly correlated whale makes a move
              </p>
              <span className="body text-F2F2F2">
                Find out when a certain whale moves more than any preset
                amount on-chain or when a dormant whale you care about becomes
                active.
              </span>
            </div>
            <div className="w-full lg:w-1/2 overflow-auto no-scrollbar px-8 lg:px-0">
                <Carousel />
            </div>
          </div>
          <div className="lg:flex flex-row">
            <div className="w-full lg:w-1/2 py-8 px-8 lg:px-0">
              <img
                src="/static/images/Cohorts 1.png"
                className="rounded-lg"
              />
            </div>
            <div className="lg:w-1/2 p-12 flex justify-start items-end flex-col text-right">
              <img src="/static/images/Eye.svg" />
              <p className="heading-4 text-F2F2F2 py-4">
                Watch what the whales are doing
              </p>
              <span className="body text-F2F2F2">
                All whales are not equal. Know exactly what the whales
                impacting YOUR portfolio are doing.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:pr-12">
            <p className="heading-5 text-F2F2F2 text-right pr-8 lg:pr-0 py-4">
              Testimonials
            </p>
            <Divider />
          </div>
        </div>
        <div className="flex py-8">
          <div className="w-1/6 lg:w-1/12 flex justify-end items-end p-3">
            <img src="/static/images/Vector.svg" />
          </div>
          <div className="w-5/6 lg:w-11/12 flex overflow-x-scroll no-scrollbar">
            <Testimonials />
          </div>
        </div>
      </div>
    </div>
    <Form />
  </div>
  )
}
